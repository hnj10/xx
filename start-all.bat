@echo off
chcp 936 >nul
setlocal
cd /d "%~dp0"

REM ============================================================
REM  原神登录项目 一键启动 (后端 8081 + 前端 5173)
REM  双击运行即可, 会新开两个窗口分别跑前后端。
REM  重置后 node_modules / target 被删也没关系, 两个子脚本会自动重建。
REM  注意: 批处理中 echo 的内容不要带英文括号, 否则会破坏 if 代码块。
REM ============================================================

REM 坑1: 清空沙箱注入的端口劫持变量 (必须, 否则后端起不来)
set "SERVER__PORT="
set "SERVER__HOST="

echo ============================================
echo   原神登录项目 一键启动
echo ============================================

netstat -ano | findstr ":8081 " | findstr LISTENING >nul
if %errorlevel%==0 (
  echo 后端端口 8081 已在监听, 跳过启动。
) else (
  echo 正在启动后端 ...
  start "genshin-backend" /D "%~dp0" cmd /k start-backend.bat
)

netstat -ano | findstr ":5173 " | findstr LISTENING >nul
if %errorlevel%==0 (
  echo 前端端口 5173 已在监听, 跳过启动。
) else (
  echo 正在启动前端 ...
  start "genshin-frontend" /D "%~dp0" cmd /k start-frontend.bat
)

echo ============================================
echo   已发出启动指令, 请查看弹出的两个窗口。
echo   前端: http://localhost:5173/
echo   后端: http://localhost:8081/api
echo   账号: traveler/123456   或   paimon/123456
echo   停止: 双击 stop-all.bat
echo ============================================
endlocal
timeout /t 8 >nul 2>&1
