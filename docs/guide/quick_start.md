#  开始

欢迎来到 go-cqhttp 文档 !

## 基础教程

### 下载

从 [release](https://github.com/Mrs4s/go-cqhttp/releases) 界面下载最新版本的 go-cqhttp

| 系统类型 | 可执行文件 | 压缩文件 |
| :---: | :---: | :---: |
| Intel 版 Macos | Not available | `go-cqhttp_darwin_amd64.tar.gz` |
| M1 版 Macos | Not available | `go-cqhttp_darwin_arm64.tar.gz` |
| 32 位 Linux | Not available | `go-cqhttp_linux_386.tar.gz` |
| 64 位 Linux | Not available | `go-cqhttp_linux_amd64.tar.gz` |
| arm64 Linux | Not available | `go-cqhttp_linux_arm64.tar.gz` |
| armv7 Linux | Not available | `go-cqhttp_linux_armv7.tar.gz` |
| 32 位 Windows | `go-cqhttp_windows_386.exe` | `go-cqhttp_windows_386.zip` |
| 64 位 Windows | `go-cqhttp_windows_amd64.exe` | `go-cqhttp_windows_amd64.zip` |
| arm64 Windows | `go-cqhttp_windows_arm64.exe` | `go-cqhttp_windows_arm64.zip` |
| armv7 Windows | `go-cqhttp_windows_armv7.exe` | `go-cqhttp_windows_armv7.zip` |


- MD5信息在 `go-cqhttp_checksums.txt` , 可用于校验文件完整性
- 如果没有你所使用的系统版本或者希望自己构建, 请移步 [进阶指南-如何自己构建](#如何自己构建)

### 解压

- Windows下请使用自己熟悉的解压软件自行解压
- Linux下在命令行中输入 `tar -xzvf [文件名]` 

### 使用

#### Windows 标准方法

1. 双击`go-cqhttp_*.exe`，根据提示生成运行脚本
2. 双击运行脚本
```
[WARNING]: 尝试加载配置文件 config.yml 失败: 文件不存在
[INFO]: 默认配置文件已生成,请编辑 config.yml 后重启程序.
```
3. 参照[config.md](https://github.com/Mrs4s/go-cqhttp/blob/master/docs/config.md)和你所用到的插件的 `README` 填入参数
4. 再次双击运行脚本
```
[INFO]: 登录成功 欢迎使用: balabala
```

如出现需要认证的信息, 请自行认证设备。

此时, 基础配置完成

#### Linux 标准方法

1. 通过 SSH 连接到服务器
2. `cd`到解压目录
3. 输入 `./go-cqhttp`, `Enter`运行 , 此时将提示
```
[WARNING]: 尝试加载配置文件 config.yml 失败: 文件不存在
[INFO]: 默认配置文件已生成,请编辑 config.yml 后重启程序.
```

4. 参照 [config.md](https://github.com/Mrs4s/go-cqhttp/blob/master/docs/config.md) 和你所用到的插件的 `README` 填入参数
5. 再次输入 `./go-cqhttp`, `Enter`运行
```
[INFO]: 登录成功 欢迎使用: balabala
```

如出现需要认证的信息, 请自行认证设备。

此时, 基础配置完成

::: warning 注意
需要保持 go-cqhttp 在后台持续运行

请配合 screen 等服务来保证断开 SSH 连接后 go-cqhttp 的持续运行
:::

### 跳过启动的五秒延时

使用命令行参数 `faststart`即可跳过启动的五秒钟延时，例如

```shell
# Windows
.\go-cqhttp.exe -faststart

# Linux
./go-cqhttp -faststart
```

## 进阶指南

### 如何自己构建

1. [下载源码](https://github.com/Mrs4s/go-cqhttp/archive/master.zip)并解压 || 使用 `git clone https://github.com/Mrs4s/go-cqhttp.git` 来拉取

2. [下载golang binary release](https://golang.google.cn/dl/)并安装或者[自己构建golang](https://golang.google.cn/doc/install/source)

3. 在 `cmd` 或Linux命令行中, `cd` 到目录中

4. 输入 `go build -ldflags "-s -w -extldflags '-static'"`, `Enter` 运行

*注：可以使用* `go env -w GOPROXY=https://goproxy.cn,direct` *来加速国内依赖安装速度*

### 更新

#### 方法一

从 [release](https://github.com/Mrs4s/go-cqhttp/releases) 界面下载最新版本的 go-cqhttp
并替换之前的版本

#### 方法二

使用更新参数, 在命令行中打开 go-cqhttp 所在目录

**windows**

输入指令
```powershell
go-cqhttp.exe update
```

如果在国内连接github下载速度可能很慢, 可以使用镜像源下载

```powershell
go-cqhttp.exe update https://github.rc1844.workers.dev
```

几个可用的镜像源
- `https://hub.fastgit.org`
- `https://github.com.cnpmjs.org`
- `https://github.bajins.com`
- `https://github.rc1844.workers.dev`

**linux**

方法与windows基本一致, 将 `go-cqhttp.exe` 替换为 `./go-cqhttp` 即可

```shell
./go-cqhttp update
```

### 安装 ffmpeg

为了支持任意格式的语音发送, 你需要安装 ffmpeg 。

#### Windows

从 [这里](https://www.gyan.dev/ffmpeg/builds/ffmpeg-release-full.7z) 下载 并解压, 并为 `bin` 这个文件夹添加环境变量。

如果遇到下载速度缓慢的问题可以用 [这个源](https://downloads.go-cqhttp.org/ffmpeg-release-full.7z) 。

然后在 cmd 输入 **(不能使用 powershell）**

```shell
setx /M PATH "C:\Program Files\ffmpeg\bin;%PATH%"
```

自行将这个指令中的 `C:\Program Files` 替换成你的解压目录。

#### Linux

Ubuntu / Debian :

终端执行

```shell
apt install -y ffmpeg
```

Fedora / RHEL / CentOS : 

根据 [Rpmfusion](https://rpmfusion.org/Configuration) 的文档配置源

终端执行

```shell
# Centos7 及之前
yum install ffmpeg ffmpeg-devel 

# CentOS8 及之后
dnf install ffmpeg ffmpeg-devel
```

