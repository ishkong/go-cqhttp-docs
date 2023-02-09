# 使用Docker

go-cqhttp支持使用Docker，目前镜像托管在GitHub Package。

## 拉取镜像

首先，请确保您的Docker已经安装完毕，且Docker Daemon正常运行。

此后，请输入以下命令，拉取go-cqhttp的Docker镜像
```bash
docker pull ghcr.io/mrs4s/go-cqhttp:master
```


## 准备配置文件

部署在服务器的Docker不适宜用交互式界面生成配置文件，因此您需要事先准备好你的配置文件。我们假设您准备好的配置文件本地路径位于`/path/to/config.yml`。

> 您也可以同时准备好设备文件`device.json`，此时我们一样假设本地路径为`/path/to/device.json`。

## 开始运行

接下来输入以下命令以启动go-cqhttp

```bash
docker run \
  -v /path/to/config.yml:/data/config.yml \
  -v /path/to/device.json:/data/device.json \
  -p 2333:8080 \
  -d \
  --name cqhttp \
  ghcr.io/mrs4s/go-cqhttp:master
```

接下来逐行解释上面的命令：

- `docker run` 代表命令 Docker 启动容器。
- `-v /path/to/config.yml:/data/config.yml` 代表将本地计算机中的`/path/to/config.yml`映射至容器内的`/data/config.yml`。
  Docker既支持文件映射也支持文件夹映射，因此若您需要读取音视频缓存文件，您可以直接替换`-v /path/to/config.yml:/data/config.yml -v /path/to/device.json:/data/device.json`为`-v /path/to/data:/data`。
- `-p 2333:8080` 若您配置了**正向服务器（包括正向HTTP、正向WebSocket）**，您需要通过这个命令将容器内服务器端口暴露至本地计算机。该命令代表将*容器内8080端口*映射至*主机2333端口*。在主机内可以通过`localhost:2333`来访问容器。
  若您只配置了反向服务器，则无需输入该行命令。
- `-d` 以后台形式运行。若没有这个选项将会实时显示程序输出。
- `--name cqhttp` 定义容器名为`cqhttp`。
- `ghcr.io/mrs4s/go-cqhttp:master` 镜像的地址。

在以后台形式运行时，您会获得一个容器的识别码，形式如下：
```bash
$ docker run \
    -v /path/to/config.yml:/data/config.yml \
    -v /path/to/device.json:/data/device.json \
    -p 2333:8080 \
    -d \
    --name cqhttp \
    ghcr.io/mrs4s/go-cqhttp:master
aa89d8943600a653b7e06a9d404fd6396b33c5c4e3b37d28c27df2437b3df033 # 这个就是容器的识别码
```

## 确认运行状态

运行后，请务必查看容器的log，因为go-cqhttp可能会要求您扫码验证。获取log的命令如下：
```bash
docker container logs cqhttp
```
此处，cqhttp为容器名，若您忘记定义容器名，可以替换为容器识别码。

确认登陆成功后，请再一次获取log，以确认go-cqhttp正常运行。

至此，您已经学会了如何通过Docker快速部署go-cqhttp。
