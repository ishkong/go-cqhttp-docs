# 数据结构

这里定义了 go-cqhttp 所使用的数据结构

## Post_Type

一个枚举, 传输使用字符串, 表示上报类型, 有以下值:

| 值 | 说明 |
| --- | ---- |
| message | 消息, 例如, 群聊消息 |
| message_sent | 消息发送，例如，bot发送在群里的消息|
| request | 请求, 例如, 好友申请 |
| notice | 通知, 例如, 群成员增加 |
| meta_event | 元事件, 例如, go-cqhttp 心跳包 |


## Post_Message_MessageSender

表示消息发送者的信息

如果是私聊:

| 字段名 | 数据类型 | 说明 |
| ----- | ------ | ---- |
| \* `user_id` | int64 | 发送者 QQ 号 |
| \* `nickname` | string | 昵称 |
| \* `sex` | string | 性别, `male` 或 `female` 或 `unknown` |
| \* `age` | int32 | 年龄 |

当私聊类型为群临时会话时的额外字段:
| 字段名 | 数据类型 | 说明 |
| ----- | ------ | ---- |
|  `group_id` | int64 | 临时群消息来源群号 |

如果是群聊:

| 字段名 | 数据类型 | 说明 |
| ----- | ------ | ---- |
| \* `user_id` | int64 | 发送者 QQ 号 |
| \* `nickname` | string | 昵称 |
| \* `sex` | string | 性别, `male` 或 `female` 或 `unknown` |
| \* `age` | int32 | 年龄 |
| `card` | string | 群名片／备注 |
| `area` | string | 地区 |
| `level` | string | 成员等级 |
| `role` | string | 角色, `owner` 或 `admin` 或 `member` |
| `title` | string | 专属头衔 |

> 该消息在 "message" 上报中被使用

## Post_Message_Type

一个枚举, 传输使用字符串, 表示消息类型.

| 值 | 说明 |
| ------- | -------- |
| private | 私聊消息 |
| group   | 群消息 |

## Post_Message_SubType

一个枚举, 传输使用字符串, 表示消息子类型.

| 值 | 说明 |
| --- | ---- |
| friend | 好友 |
| normal | 群聊 |
| anonymous | 匿名 |
| group_self | 群中自身发送 |
| group | 群临时会话 |
| notice | 系统提示 |

## Post_Message_TempSource

一个枚举, 传输使用 int32, 有以下值:


| 类型 | 来源 |
| --- | --- |
| 0 | 群聊 |
| 1 | QQ咨询 |
| 2 | 查找 |
| 3 | QQ电影 |
| 4 | 热聊 |
| 6 | 验证消息 |
| 7 | 多人聊天 |
| 8 | 约会 |
| 9 | 通讯录 |

## Post_Request_Type

一个枚举, 传输使用字符串, 表示请求类型.

| 值 | 说明 |
| --- | ---- |
| friend | 好友请求 |
| group | 群请求 |


## Post_Notice_Type

一个枚举, 传输使用字符串, 表示通知类型.

| 值 | 说明 |
| --- | ---- |
| group_upload | 群文件上传 |
| group_admin | 群管理员变更 |
| group_decrease | 群成员减少 |
| group_increase | 群成员增加 |
| group_ban | 群成员禁言 |
| friend_add | 好友添加 |
| group_recall | 群消息撤回 |
| friend_recall | 好友消息撤回 |
| group_card | 群名片变更 |
| offline_file | 离线文件上传 |
| client_status | 客户端状态变更 |
| essence | 精华消息 |
| notify | 系统通知 |

## Post_Notice_Notify_SubType

一个枚举, 传输使用字符串, 表示系统通知的子类型

| 值 | 说明 |
| -- | --- |
| honor | 群荣誉变更 |
| poke | 戳一戳 |
| lucky_king | 群红包幸运王 |
| title | 群成员头衔变更 |

## Post_MetaEvent_Type

一个枚举, 传输使用字符串, 表示元事件类型.

| 值 | 说明 |
| - | - |
| lifecycle | 生命周期 |
| heartbeat | 心跳包 |

## Status

一个数据结构, 在 `心跳包` 上报中作为成员使用

| 字段名 | 数据类型 | 说明 |
| --- | --- | --- |
| `app_initialized` | bool | 程序是否初始化完毕 |
| `app_enabled` | bool | 程序是否可用 |
| `plugins_good` | bool | 插件正常(可能为 null) |
| `app_good` | bool | 程序正常 |
| `online` | bool | 是否在线 |
| `stat` | Status_Statistics | 统计信息 |

## Status_Statistics

一个数据结构, 是 `心跳包` 的 `status` 字段的 `stat` 字段

| 字段名 | 数据类型 | 说明 |
| --- | --- | --- |
| `PacketReceived` | uint64 | 收包数 |
| `PacketSent` | uint64 | 发包数 |
| `PacketLost` | uint64 | 丢包数 |
| `MessageReceived` | uint64 | 消息接收数 |
| `MessageSent` | uint64 | 消息发送数 |
| `DisconnectTimes` | uint32 | 连接断开次数 |
| `LostTimes` | uint32 | 连接丢失次数 |
| `LastMessageTime` | int64 | 最后一次消息时间 |

## Post_MetaEvent_LifecycleType

一个枚举, 传输使用字符串, 表示生命周期上报的子类型

| 值 | 说明 |
| -- | -- |
| `enable` | 启用 |
| `disable` | 禁用 |
| `connect` | 连接 |
