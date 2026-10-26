@echo off
chcp 936 >nul
echo 正在停止 原神登录项目 前后端服务 ...

taskkill /FI "WINDOWTITLE eq genshin-backend" /F >nul 2>&1
taskkill /FI "WINDOWTITLE eq genshin-frontend" /F >nul 2>&1

for /f "tokens=5" %%a in ('netstat -ano ^| findstr ":8081 " ^| findstr LISTENING') do taskkill /PID %%a /F >nul 2>&1
for /f "tokens=5" %%a in ('netstat -ano ^| findstr ":5173 " ^| findstr LISTENING') do taskkill /PID %%a /F >nul 2>&1

powershell -Command "$ports=@(8081,5173);foreach($p in $ports){$ids=(Get-NetTCPConnection -LocalPort $p -State Listen -ErrorAction SilentlyContinue).OwningProcess;$ids|Sort-Object -Unique|ForEach-Object{taskkill /PID $_ /F >$null 2>&1}}" >nul 2>&1

echo 已发送停止指令，端口 8081 / 5173 应已释放。
