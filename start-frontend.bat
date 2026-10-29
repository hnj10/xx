@echo off
chcp 936 >nul
setlocal
cd /d "%~dp0genshin-login-vue"

REM ============================================================
REM  启动前端 Vue3 + Vite  端口 5173, /api 代理到 8081
REM  重置后 node_modules 会被删除, 这里自动 npm install 重建。
REM  注意: echo 内容不要带英文括号, 否则会破坏 if 代码块。
REM ============================================================

echo ============================================
echo   前端 Vue 启动中  5173
echo ============================================

echo [1/2] 检查依赖 node_modules ...
if exist "node_modules" (
  echo         node_modules 已存在, 跳过安装。
) else (
  echo         node_modules 不存在, 已被重置删除, 正在 npm install ...
  echo         首次较慢, 请耐心等待。
  call npm install
  if errorlevel 1 (
    echo   [错误] npm install 失败, 请检查 Node.js 是否已安装并在 PATH 中。
    pause
    exit /b 1
  )
)

echo [2/2] 启动 Vite 开发服务器, 会自动打开浏览器 ...
call npm run dev
endlocal
