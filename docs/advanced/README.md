# 自定义 go-cqhttp

## 使用 `xgo-cqhttp`

本工具魔改自[xcaddy](https://github.com/caddyserver/xcaddy)   
这个命令行工具和相关的 Go 包可以很容易地进行自定义构建 [go-cqhttp](https://github.com/Mrs4s/go-cqhttp).

### 预先准备

- [Golang](https://golang.org/doc/install)

### 安装

你可以从 Release 标签中[下载已经为你的平台编译好的二进制文件](https://github.com/RomiChan/xgo-cqhttp/releases)。

你也可以从源代码构建 `xgo-cqhttp`:

```bash
$ go install github.com/RomiChan/xgo-cqhttp/cmd/xgo-cqhttp@latest
```

### 命令用法

`xgo-cqhttp`命令有两个主要用途。

1. 编译自定义的 `xgo-cqhttp` 二进制文件
2. 在开发 `go-cqhttp` 插件时替代 `go run`。

`xgo-cqhttp` 命令默认使用 `go-cqhttp` 的最新版本，你可以通过设置`GOCQHTTP_VERSION`环境变量来为所有的调用进行自定义。
\
与 `go` 命令一样，`xgo-cqhttp` 命令将传递 `GOOS`、`GOARCH` 和 `GOARM` 环境变量，以便交叉编译。


#### 自定义构建

语法:

```
$ xgo-cqhttp build [<gocq_version>]
    [--output <file>]
    [--with <module[@version][=replacement]>...]
```

- `<gocq_version>` 是要建立的 `go-cqhttp` 核心版本；默认为 `GOCQHTTP_VERSION` 环境变量或最新版本。
- `--output` 输出文件路径。
- `--with` 可以重复，通过指定Go模块的名称和可选的版本来添加插件，类似 `go get`。
    模块名称必须，具体版本和/或本地替换可选。

例子:

```bash
$ xgo-cqhttp build \
    --with github.com/Mrs4s/go-cqhttp/db/mongodb

$ xgo-cqhttp build v1.0.0-rc1 \
    --with github.com/Mrs4s/go-cqhttp/db/mongodb@v1.0.0-rc1

$ xgo-cqhttp build \
    --with github.com/Mrs4s/MiraiGo=../../my-fork

$ xgo-cqhttp build \
    --with github.com/Mrs4s/MiraiGo@v0.1.1=../../my-fork
```

你甚至可以使用 `--with` 标志来替换 `go-cqhttp` 核心:

```
$ xgo-cqhttp build \
    --with github.com/Mrs4s/go-cqhttp=../../my-go-cqhttp-fork
```

这可以让你更容易修改 `go-cqhttp` 核心（同时也可以选择插入额外的模块！）。
