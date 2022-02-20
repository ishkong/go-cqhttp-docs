# 自定义go-cqhttp

## 使用 `xgo-cqhttp`

本工具魔改自[xcaddy](https://github.com/caddyserver/xcaddy)   
这个命令行工具和相关的 Go 包可以很容易地进行自定义构建 [go-cqhttp](https://github.com/Mrs4s/go-cqhttp).

:::warning 需要帮助！Help needed!
请帮助我们将以下内容翻译为中文！  
Please help us translate the following into Chinese!
:::

### Requirements

- [Go installed](https://golang.org/doc/install)

### Install

You can [download binaries](https://github.com/RomiChan/xgo-cqhttp/releases) that are already compiled for your platform from the Release tab.

You may also build `xgo-cqhttp` from source:

```bash
$ go install github.com/RomiChan/xgo-cqhttp/cmd/xgo-cqhttp@latest
```

### Command usage

The `xgo-cqhttp` command has two primary uses:

1. Compile custom `xgo-cqhttp` binaries
2. A replacement for `go run` while developing go-cqhttp plugins

The `xgo-cqhttp` command will use the latest version of go-cqhttp by default. You can customize this for all invocations by setting the `GOCQHTTP_VERSION` environment variable.

As usual with `go` command, the `xgo-cqhttp` command will pass the `GOOS`, `GOARCH`, and `GOARM` environment variables through for cross-compilation.


#### Custom builds

Syntax:

```
$ xgo-cqhttp build [<gocq_version>]
    [--output <file>]
    [--with <module[@version][=replacement]>...]
```

- `<gocq_version>` is the core go-cqhttp version to build; defaults to `GOCQHTTP_VERSION` env variable or latest.
- `--output` changes the output file.
- `--with` can be used multiple times to add plugins by specifying the Go module name and optionally its version, similar to `go get`. Module name is required, but specific version and/or local replacement are optional.

Examples:

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

You can even replace go-cqhttp core using the `--with` flag:

```
$ xgo-cqhttp build \
    --with github.com/Mrs4s/go-cqhttp=../../my-go-cqhttp-fork
```

This allows you to hack on go-cqhttp core (and optionally plug in extra modules at the same time!) with relative ease.
