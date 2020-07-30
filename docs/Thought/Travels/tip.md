## 获取已连接的wifi密码

- 以管理员权限运行CMD
- 输入命令：
- CMD会列出很多行都是以前连接过得wifi信息、加密方式、包括密码
```bash
for /f "skip=9 tokens=1,2 delims=:" %i in ('netsh wlan show profiles') do @echo %j | findstr -i -v echo | netsh wlan show profiles %j key=clear
```

