@echo off
chcp 936 >nul

REM ============================================================
REM  停止原神登录项目前后端服务 (释放 8081 / 5173)
REM ============================================================

echo 正在停止 原神登录项目 前后端服务 ...

REM 1) 关掉启动脚本打开的窗口
taskkill /FI "WINDOWTITLE eq genshin-backend" /F >nul 2>&1
taskkill /FI "WINDOWTITLE eq genshin-frontend" /F >nul 2>&1

REM 2) 按端口杀进程 (netstat 方式)
for /f "tokens=5" %%a in ('netstat -ano ^| findstr ":8081 " ^| findstr LISTENING') do taskkill /PID %%a /F >nul 2>&1
for /f "tokens=5" %%a in ('netstat -ano ^| findstr ":5173 " ^| findstr LISTENING') do taskkill /PID %%a /F >nul 2>&1

REM 3) PowerShell 兜底 (处理 netstat 漏掉的情况)
powershell -Command "$ports=@(8081,5173);foreach($p in $ports){$ids=(Get-NetTCPConnection -LocalPort $p -State Listen -ErrorAction SilentlyContinue).OwningProcess;$ids|Sort-Object -Unique|ForEach-Object{taskkill /PID $_ /F >$null 2>&1}}" >nul 2>&1

echo 已发送停止指令, 端口 8081 / 5173 应已释放。
timeout /t 5 >nul 2>&1
