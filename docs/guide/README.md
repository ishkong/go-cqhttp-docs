# 简介

## go-cqhttp

使用 [mirai](https://github.com/mamoe/mirai) 以及 [MiraiGo](https://github.com/Mrs4s/MiraiGo) 开发的 cqhttp golang 原生实现, 并在 [cqhttp 原版](https://github.com/richardchien/coolq-http-api) 的基础上做了部分修改和拓展。
文档目前还在撰写中。

测试版可前往 [Release](https://github.com/Mrs4s/go-cqhttp/releases) 下载。

[![release](https://img.shields.io/github/v/release/Mrs4s/go-cqhttp?color=blueviolet&include_prereleases)](https://github.com/Mrs4s/go-cqhttp/releases) [![action](https://github.com/Mrs4s/go-cqhttp/workflows/CI/badge.svg)](https://github.com/Mrs4s/go-cqhttp/actions)

::: danger 注意
由于 go-cqhttp 仍在开发中，暂未发布正式版

本文档将仅保留最新版的文档

被遗弃的功能的文档将会被从文档中删除
:::

## 兼容性

### 接口

- HTTP API
- 反向HTTP POST
- 正向WebSocket
- 反向WebSocket

### 拓展支持

> 拓展API可前往 [文档](docs/cqhttp.md) 查看

- HTTP POST 多点上报
- 反向 WS 多点连接
- 修改群名
- 消息撤回事件
- 解析/发送 回复消息
- 解析/发送 合并转发
- 使用代理请求网络图片

## 关于 issue

以下 issue 会被直接关闭

- 提交BUG不使用Template
- 询问已知问题
- 提问找不到重点
- 重复提问

::: warning 注意
开发者并没有义务回复您的问题, 您应该具备基本的提问技巧。
:::

## 性能

在关闭数据库的情况下, 加载 25 个好友 128 个群运行 24 小时后内存使用为 10MB 左右. 开启数据库后内存使用将根据消息量增加 10-20MB , 如果系统内存小于 128M 建议关闭数据库使用。

---

**下一篇: [Guide/开始](/guide/quick_start)**
