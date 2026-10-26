@echo off
chcp 936 >nul
setlocal
cd /d %~dp0

REM ============================================================
REM  原神登录项目 一键启动脚本 (start-all.bat)
REM  用途：每次开机重置后，自动初始化数据库、编译并启动前后端。
REM  说明：重置后 node_modules / target 会被清空，脚本会自动重建。
REM  前置：MySQL 已安装并运行（账号 root / 123456）。
REM  关键坑：沙箱会注入 SERVER__PORT=61437 把后端端口劫持为 61437，
REM         必须在启动后端前把该变量清空，否则启动失败。
REM ============================================================

REM 清空沙箱注入的端口劫持变量（必须在启动后端前执行）
set "SERVER__PORT="

echo ============================================
echo  原神登录项目 一键启动 (start-all)
echo ============================================

REM ---------- 1) 初始化数据库 ----------
echo [1/4] 初始化 MySQL 数据库 genshin_db ...
set "MYSQL=%ProgramFiles%\MySQL\MySQL Server 8.0\bin\mysql.exe"
if not exist "%MYSQL%" (
  echo [错误] 未找到 mysql.exe：%MYSQL%
  echo 请确认本机 MySQL 安装路径，或修改本脚本中的 MYSQL 变量。
  exit /b 1
)
"%MYSQL%" -uroot -p123456 -e "CREATE DATABASE IF NOT EXISTS genshin_db DEFAULT CHARACTER SET utf8mb4;" 2>nul
"%MYSQL%" -uroot -p123456 -e "USE genshin_db; SELECT COUNT(*) FROM t_user;" >nul 2>&1
if errorlevel 1 (
  echo       首次导入表结构与示例数据 ...
  "%MYSQL%" -uroot -p123456 --default-character-set=utf8mb4 genshin_db < "springBootTest\sql\genshin_db.sql" 2>nul
) else (
  echo       数据表已存在，跳过导入。
)
echo       数据库就绪。

REM ---------- 2) 确保 Maven 可用 ----------
echo [2/4] 检查 Maven ...
set "MVN_PATH=%~dp0apache-maven-3.9.9\bin\mvn.cmd"
if not exist "%MVN_PATH%" (
  echo       Maven 缺失，开始下载 apache-maven-3.9.9 ...
  curl -L -o apache-maven-3.9.9-bin.zip https://repo.maven.apache.org/maven2/org/apache/maven/apache-maven/3.9.9/apache-maven-3.9.9-bin.zip
  powershell -Command "Expand-Archive -Path apache-maven-3.9.9-bin.zip -DestinationPath . -Force"
  del /q apache-maven-3.9.9-bin.zip
)
echo       Maven 就绪。

REM ---------- 3) 启动后端 (独立窗口) ----------
echo [3/4] 启动后端 Spring Boot (端口 8081) ...
netstat -ano | findstr ":8081 " | findstr LISTENING >nul
if %errorlevel%==0 (
  echo       后端已在运行，跳过。
) else (
  start "genshin-backend" cmd /k "cd /d %~dp0springBootTest && %MVN_PATH% spring-boot:run"
  echo       后端启动中，请查看 genshin-backend 窗口。
)

REM ---------- 4) 启动前端 (独立窗口) ----------
echo [4/4] 启动前端 Vue (端口 5173) ...
netstat -ano | findstr ":5173 " | findstr LISTENING >nul
if %errorlevel%==0 (
  echo       前端已在运行，跳过。
) else (
  start "genshin-frontend" cmd /k "cd /d %~dp0genshin-login-vue && (if not exist node_modules npm install) && npm run dev"
  echo       前端启动中，请查看 genshin-frontend 窗口。
)

echo ============================================
echo  启动命令已发送，请查看弹出的两个命令行窗口。
echo  前端地址: http://localhost:5173/
echo  后端地址: http://localhost:8081/api
echo  测试账号: traveler/123456   或   paimon/123456
echo ============================================
endlocal
