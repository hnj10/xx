@echo off
set "ROOT=D:\workSpace\xx"
set "BACKEND=%ROOT%\springBootTest"
set "FRONTEND=%ROOT%\genshin-login-vue"
set "MAVEN=%BACKEND%\mvnw.cmd"
set "MYSQL=C:\Program Files\MySQL\MySQL Server 8.0\bin\mysql.exe"
set "LAN_IP=192.168.68.4"

REM Clear sandbox-injected hijack vars: SERVER__PORT maps to server.port
REM via Spring Boot relaxed binding and would override application-dev.properties.
set "SERVER__PORT="
set "SERVER__HOST="

if "%~1"=="backend" goto :backend
if "%~1"=="frontend" goto :frontend

echo ============================================
echo   XX Project - One-click Dev Launcher
echo   LAN IP: %LAN_IP%
echo ============================================
echo.

echo [1/4] Checking MySQL service...
sc query MySQL80 | find "RUNNING" >nul
if %errorlevel%==0 (
  echo       MySQL80: running
) else (
  echo       Starting MySQL80...
  net start MySQL80 >nul 2>&1
  if %errorlevel%==0 (echo       MySQL80: started) else (echo       [WARN] need admin rights to start MySQL80)
)

echo [2/4] Checking database genshin_db...
"%MYSQL%" -uroot -p123456 -e "USE genshin_db;" >nul 2>&1
if %errorlevel%==0 (
  echo       genshin_db: exists
) else (
  echo       Creating and importing genshin_db...
  "%MYSQL%" -uroot -p123456 -e "CREATE DATABASE IF NOT EXISTS genshin_db DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;" >nul 2>&1
  "%MYSQL%" -uroot -p123456 genshin_db < "%BACKEND%\sql\genshin_db.sql" >nul 2>&1
  echo       genshin_db: imported
)

echo [3/4] Starting backend on %LAN_IP%:8081 ...
start "XX-Backend-8081" cmd /c ""%~f0" backend"

echo [4/4] Starting frontend on %LAN_IP%:5173 ...
start "XX-Frontend-5173" cmd /c ""%~f0" frontend"

echo.
echo Done. Wait ~30s for backend to compile, then:
echo   http://%LAN_IP%:5173/
echo   http://%LAN_IP%:8081/api
echo.
timeout /t 3 >nul
start "" "http://%LAN_IP%:5173/"
exit /b

:backend
set "LAN_IP=192.168.68.4"
set "SERVER__PORT="
set "SERVER__HOST="
cd /d "%BACKEND%"
call "%MAVEN%" spring-boot:run "-Dspring-boot.run.arguments=--server.address=%LAN_IP% --server.port=8081"
pause
exit /b

:frontend
cd /d "%FRONTEND%"
call npm run dev
pause
exit /b
