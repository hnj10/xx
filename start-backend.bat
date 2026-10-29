@echo off
chcp 936 >nul
setlocal
cd /d "%~dp0"

REM ============================================================
REM  启动后端 Spring Boot (端口 8081, context-path=/api)
REM  双击可单独运行, 也可由 start-all.bat 调用。
REM  重置后 target 会被删除, mvn spring-boot:run 会自动重新编译。
REM ============================================================

REM ---- 坑1: 清空沙箱注入的端口劫持变量 (必须, 否则后端起不来) ----
REM SERVER__PORT(双下划线) 会被 Spring Boot 宽松绑定解析成 server.port,
REM 优先级高于 application-dev.properties 的 8081。该值每次开机都变。
set "SERVER__PORT="
set "SERVER__HOST="

echo ============================================
echo   后端 Spring Boot 启动中 (8081)
echo ============================================

REM ---------- 1) 初始化数据库 ----------
echo [1/3] 检查 MySQL 数据库 genshin_db ...
set "MYSQL=%ProgramFiles%\MySQL\MySQL Server 8.0\bin\mysql.exe"
if not exist "%MYSQL%" (
  for /d %%D in ("%ProgramFiles%\MySQL\MySQL Server *") do (
    if exist "%%~D\bin\mysql.exe" set "MYSQL=%%~D\bin\mysql.exe"
  )
)
if not exist "%MYSQL%" (
  echo   [警告] 未找到 mysql.exe, 跳过数据库初始化。
  echo          若后端连不上库, 请手动导入 springBootTest\sql\genshin_db.sql
  goto :FIND_MVN
)
"%MYSQL%" -uroot -p123456 -e "CREATE DATABASE IF NOT EXISTS genshin_db DEFAULT CHARACTER SET utf8mb4;" 2>nul
"%MYSQL%" -uroot -p123456 -e "USE genshin_db; SELECT COUNT(*) FROM t_user;" >nul 2>&1
if errorlevel 1 (
  echo         首次导入表结构与示例数据 ...
  "%MYSQL%" -uroot -p123456 --default-character-set=utf8mb4 genshin_db < "%~dp0springBootTest\sql\genshin_db.sql" 2>nul
) else (
  echo         数据表已存在, 跳过。
)
echo         数据库就绪。

:FIND_MVN
REM ---------- 2) 定位可用的 Maven ----------
REM 注意: 项目内 apache-maven-3.9.9 只有 license 没有 jar, 是坏的,
REM       所以必须用 boot\plexus-classworlds-*.jar 是否存在来判断真假。
echo [2/3] 定位可用的 Maven ...
set "MVN="

if defined MAVEN_HOME if exist "%MAVEN_HOME%\bin\mvn.cmd" if exist "%MAVEN_HOME%\boot\plexus-classworlds-*.jar" set "MVN=%MAVEN_HOME%\bin\mvn.cmd"

if not defined MVN if exist "%~dp0apache-maven-3.9.9\bin\mvn.cmd" if exist "%~dp0apache-maven-3.9.9\boot\plexus-classworlds-*.jar" set "MVN=%~dp0apache-maven-3.9.9\bin\mvn.cmd"

if not defined MVN (
  for /d %%D in ("D:\IntelliJ IDEA *" "C:\Program Files\JetBrains\IntelliJ IDEA *") do (
    if exist "%%~D\plugins\maven\lib\maven3\bin\mvn.cmd" if exist "%%~D\plugins\maven\lib\maven3\boot\plexus-classworlds-*.jar" set "MVN=%%~D\plugins\maven\lib\maven3\bin\mvn.cmd"
  )
)

if not defined MVN (
  for /f "delims=" %%M in ('where mvn.cmd 2^>nul') do if not defined MVN set "MVN=%%M"
)

if not defined MVN (
  echo   [错误] 没找到可用的 Maven。
  echo         项目内 apache-maven-3.9.9 缺 jar 已跳过; 也没找到 IDEA 自带 Maven。
  echo         请把完整 Maven 解压到 apache-maven-3.9.9\ 再重试。
  pause
  exit /b 1
)
echo         %MVN%

REM ---------- 校验 JAVA_HOME ----------
if not defined JAVA_HOME (
  for /d %%J in ("C:\Program Files\Zulu\*" "C:\Program Files\Java\*" "C:\Program Files\Eclipse Adoptium\*") do (
    if exist "%%~J\bin\java.exe" set "JAVA_HOME=%%~J"
  )
)
if defined JAVA_HOME if "%JAVA_HOME:~-1%"=="\" set "JAVA_HOME=%JAVA_HOME:~0,-1%"
if not exist "%JAVA_HOME%\bin\java.exe" (
  echo   [错误] 未找到可用的 JDK。
  echo         请设置 JAVA_HOME, 例如 C:\Program Files\Zulu\zulu-21
  pause
  exit /b 1
)
echo         JAVA_HOME=%JAVA_HOME%

REM ---------- 3) 启动 ----------
echo [3/3] 启动 Spring Boot (target 若被删会自动重新编译, 首次较慢) ...
cd /d "%~dp0springBootTest"
"%MVN%" -DskipTests -Dspring-boot.run.arguments=--server.port=8081 spring-boot:run
endlocal
