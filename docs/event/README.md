# 事件

事件, 也就是上报.

参考: [go-cqhttp 帮助中心: 参考](/reference), [go-cqhttp 帮助中心: 数据结构](/reference/data_struct)

关于下面 API 中 **快速操作** 的使用方式, 请参考: [go-cqhttp 参考: 快速操作](/reference/#快速操作)

> 本页面中, 数据类型是使用 golang 数据类型来表示的.

## 通用数据

下面定义了上报数据所包含的通用数据, 这些可能在你进行面向对象封装并处理继承关系时有用

### 所有上报

所有上报都将包含下面的有效通用数据

| 字段名 | 数据类型 | 可能的值 | 说明 |
|-----------|--------|--------------------------------------|----------------------------|
| `time`  | int64  | -  | 事件发生的unix时间戳 |
| `self_id` | int64  | -  | 收到事件的机器人的 QQ 号 |
| `post_type` | string [参考](/reference/data_struct/#post-type) | message, message_sent, request, notice, meta_event | 表示该上报的类型, 消息, 消息发送, 请求, 通知, 或元事件 |

**注**: `message`与`message_sent`的数据是一致的, 区别仅在于后者是bot发出的消息. 默认配置下不会上报`message_sent`, 仅在配置`message`下`report-self-message`项为true时上报

### 消息上报

`post_type` 为 `message` *或* `message_sent` 的上报将会有以下有效通用数据

| 字段名 | 数据类型 | 可能的值 | 说明 |
|-------------|--------------------------------------------------------|------|----|
| `message_type` | string [参考](/reference/data_struct/#post-message-type) | private, group | 消息类型 |
| `sub_type`  | string [参考](/reference/data_struct/#post-message-subtype) | group, public | 表示消息的子类型 |
| `message_id`  | int32  | - | 消息 ID |
| `user_id` | int64  | - | 发送者 QQ 号 |
| `message` | message [参考](/reference/#消息) | - | 一个消息链 |
| `raw_message` | string [参考](/cqcode) | - | CQ 码格式的消息 |
| `font`  | int  | 0 | 字体 |
| `sender`  | object [参考](/reference/data_struct/#post-message-messagesender) | - | 发送者信息 |

### 请求上报

post_type 为 request 的上报会有以下有效通用数据

| 字段名 | 数据类型 | 可能的值 | 说明 |
| - | - | - | - |
| `request_type` | string [参考](/reference/data_struct/#post-request-type) | - | 请求类型 |

### 通知上报

post_type 为 notice 的上报会有以下有效通用数据

| 字段名 | 数据类型 | 可能的值 | 说明 |
| - | - | - | - |
| `notice_type` | string [参考](/reference/data_struct/#post-notice-type) | - | 通知类型 |

### 元事件上报

post_type 为 meta_event 的上报会有以下有效数据

| 字段名 | 数据类型 | 可能的值 | 说明 |
| - | - | - | - |
| `meta_event_type` | string [参考](/reference/data_struct/#post-metaevent-type) | - | 元数据类型 |

## 数据定义

下面定义了各种上报的数据字段, 标注 \* 号的字段表示它属于通用数据

> message 数据类型表示一个消息链, 关于消息链, 参考: [go-cqhttp 帮助中心: 参考](/reference)

### ↓ 消息上报 ↓

下面的提到的上报, 都是消息上报. 消息上报的 `post_type` 值为 `message`, 其通用数据如下:

| 字段名 | 数据类型 | 可能的值 | 说明 |
|-------------|--------------------------------------------------------|------|----|
| `message_type` | string [参考](/reference/data_struct/#post-message-type) | private, group | 消息类型 |
| `sub_type`  | string [参考](/reference/data_struct/#post-message-subtype) | group, public | 表示消息的子类型 |
| `message_id`  | int32  | - | 消息 ID |
| `user_id` | int64  | - | 发送者 QQ 号 |
| `message` | message  | - | 一个消息链 |
| `raw_message` | string [参考](/cqcode) | - | CQ 码格式的消息 |
| `font`  | int  | 0 | 字体 |
| `sender`  | object [参考](/reference/data_struct/#post-message-messagesender) | - | 发送者信息 |

### 私聊消息

**事件数据**

| 字段名  | 数据类型 | 可能的值  | 说明 |
|----------------|--------------------------------------------------------|---------------------------------------|------------------------------------------------------------------------|
| \* `time`  | int64  | - | 事件发生的时间戳 |
| \* `self_id` | int64  | - | 收到事件的机器人 QQ 号  |
| \* `post_type` | string [参考](/reference/data_struct/#post-type) | `message` | 上报类型 |
| \* `message_type` | string | `private` | 消息类型 |
| \* `sub_type` | string [参考](/reference/data_struct/#post-message-subtype) | `friend`、`group`、`group_self`、`other` | 消息子类型, 如果是好友则是 `friend`, 如果是群临时会话则是 `group`, 如果是在群中自身发送则是 `group_self` |
| \* `message_id` | int32  | - | 消息 ID  |
| \* `user_id`  | int64  | - | 发送者 QQ 号 |
| \* `message`  | message [参考](/reference/#消息) | - | 消息内容 |
| \* `raw_message`  | string [参考](/cqcode) | - | 原始消息内容 |
| \* `font` | int32  | - | 字体 |
| \* `sender` | object [参考](/reference/data_struct/#post-message-messagesender) | - | 发送人信息  |
|  `target_id`  | int64  | - | 接收者 QQ 号 |
| `temp_source`  | int  | - | 临时会话来源 |

需要注意的是, `sender` 中的各字段是尽最大努力提供的, 也就是说, 不保证每个字段都一定存在, 也不保证存在的字段都是完全正确的 ( 缓存可能过期 ) 。

**快速操作**

| 字段名 | 数据类型 | 说明 | 默认情况 |
| ----- | ------- | --- | ------- |
| `reply` | message | 要回复的内容 | 不回复 |
| `auto_escape` | boolean | 消息内容是否作为纯文本发送 ( 即不解析 CQ 码 ) , 只在 `reply` 字段是字符串时有效 | 不转义 |

### 群消息

**事件数据**

| 字段名  | 数据类型  | 可能的值  | 说明  |
|----------------|---------|-------------------------------|-------------------------------------------------------------------------------|
| \* `time`  | int64 | - | 事件发生的时间戳  |
| \* `self_id` | int64 | - | 收到事件的机器人 QQ 号 |
| \* `post_type` | string [参考](/reference/data_struct/#post-type) | `message` | 上报类型  |
| \* `message_type` | string  | `group` | 消息类型  |
| \* `sub_type` | string  | `normal`、`anonymous`、`notice` | 消息子类型, 正常消息是 `normal`, 匿名消息是 `anonymous`, 系统提示 ( 如「管理员已禁止群内匿名聊天」 ) 是 `notice` |
| \* `message_id` | int32 | - | 消息 ID |
| \* `user_id`  | int64 | - | 发送者 QQ 号  |
| \* `message`  | message [参考](/reference/#消息) | - | 消息内容  |
| \* `raw_message`  | string  | - | 原始消息内容  |
| \* `font` | int32 | - | 字体  |
| \* `sender` | object [参考](/reference/data_struct/#post-message-messagesender) | - | 发送人信息 |
| `group_id` | int64 | - | 群号  |
| `anonymous`  | object  | - | 匿名信息, 如果不是匿名消息则为 null |

::: warning 注意
`anonymous` 字段从 go-cqhttp-v0.9.36 开始支持
:::

其中 `anonymous` 字段的内容如下：

| 字段名 | 数据类型 | 说明 |
| ----- | ------ | ---- |
| `id` | int64 | 匿名用户 ID |
| `name` | string | 匿名用户名称 |
| `flag` | string | 匿名用户 flag, 在调用禁言 API 时需要传入 |

`sender` 字段的内容如下：

需要注意的是, `sender` 中的各字段是尽最大努力提供的, 也就是说, 不保证每个字段都一定存在, 也不保证存在的字段都是完全正确的 ( 缓存可能过期 ) 。尤其对于匿名消息, 此字段不具有参考价值。

**快速操作**

| 字段名 | 数据类型 | 说明 | 默认情况 |
| ----- | ------- | --- | ------- |
| `reply` | message | 要回复的内容 | 不回复 |
| `auto_escape` | boolean | 消息内容是否作为纯文本发送 ( 即不解析 CQ 码 ) , 只在 `reply` 字段是字符串时有效 | 不转义 |
| `at_sender` | boolean | 是否要在回复开头 at 发送者 ( 自动添加 ) , 发送者是匿名用户时无效 | at 发送者 |
| `delete` | boolean | 撤回该条消息 | 不撤回 |
| `kick` | boolean | 把发送者踢出群组 ( 需要登录号权限足够 ) , **不拒绝**此人后续加群请求, 发送者是匿名用户时无效 | 不踢出 |
| `ban` | boolean | 禁言该消息发送者, 对匿名用户也有效 | 不禁言 |
| `ban_duration` | number | 若要执行禁言操作时的禁言时长 | 30 分钟 |

### ↓ 通知上报 ↓

下面的提到的上报, 都是通知上报. 消息上报的 `post_type` 值为 `notice`, 通用数据如下:

| 字段名 | 数据类型 | 可能的值 | 说明 |
| - | - | - | - |
| `notice_type` | string [参考](/reference/data_struct/#post-notice-type) | - | 通知类型 |

### 私聊消息撤回

**事件数据**

| 字段名  | 数据类型 | 可能的值 | 说明 |
| ------------- | ------ | -------------- | -------------- |
| \* `time` | int64 | - | 事件发生的时间戳 |
| \* `self_id` | int64 | - | 收到事件的机器人 QQ 号 |
| \* `post_type` | string [参考](/reference/data_struct/#post-type) | `notice` | 上报类型 |
| \* `notice_type` | string [参考](/reference/data_struct/#post-notice-type) | `friend_recall`| 通知类型 |
| `user_id` | int64  |  | 好友 QQ 号  |
| `message_id`  | int64  |  | 被撤回的消息 ID |

### 群消息撤回

**事件数据**

| 字段名  | 数据类型 | 可能的值 | 说明 |
| ------------- | ------ | -------------- | -------------- |
| \* `time` | int64 | - | 事件发生的时间戳 |
| \* `self_id` | int64 | - | 收到事件的机器人 QQ 号 |
| \* `post_type` | string [参考](/reference/data_struct/#post-type) | `notice` | 上报类型 |
| \* `notice_type` | string [参考](/reference/data_struct/#post-notice-type) | `group_recall` | 通知类型 |
| `group_id`  | int64  |  | 群号 |
| `user_id` | int64  |  | 消息发送者 QQ 号 |
| `operator_id` | int64  |  | 操作者 QQ 号  |
| `message_id`  | int64  |  | 被撤回的消息 ID |

### 群成员增加

**事件数据**

| 字段名 | 数据类型 | 可能的值 | 说明 |
| ----- | ------ | -------- | --- |
| \* `time` | int64 | - | 事件发生的时间戳 |
| \* `self_id` | int64 | - | 收到事件的机器人 QQ 号 |
| \* `post_type` | string [参考](/reference/data_struct/#post-type) | `notice` | 上报类型 |
| \* `notice_type` | string [参考](/reference/data_struct/#post-notice-type) | `group_increase` | 通知类型 |
| `sub_type` | string | `approve`、`invite` | 事件子类型, 分别表示管理员已同意入群、管理员邀请入群 |
| `group_id` | int64 | - | 群号 |
| `operator_id` | int64 | - | 操作者 QQ 号 |
| `user_id` | int64 | - | 加入者 QQ 号 |

### 群成员减少

**事件数据**

| 字段名 | 数据类型 | 可能的值 | 说明 |
| ----- | ------ | -------- | --- |
| \* `time` | int64 | - | 事件发生的时间戳 |
| \* `self_id` | int64 | - | 收到事件的机器人 QQ 号 |
| \* `post_type` | string [参考](/reference/data_struct/#post-type) | `notice` | 上报类型 |
| \* `notice_type` | string [参考](/reference/data_struct/#post-notice-type) | `group_decrease` | 通知类型 |
| `sub_type` | string | `leave`、`kick`、`kick_me` | 事件子类型, 分别表示主动退群、成员被踢、登录号被踢 |
| `group_id` | int64 | - | 群号 |
| `operator_id` | int64 | - | 操作者 QQ 号 ( 如果是主动退群, 则和 `user_id` 相同 )  |
| `user_id` | int64 | - | 离开者 QQ 号 |

### 群管理员变动

**事件数据**

| 字段名 | 数据类型 | 可能的值 | 说明 |
| ----- | ------ | -------- | --- |
| \* `time` | int64 | - | 事件发生的时间戳 |
| \* `self_id` | int64 | - | 收到事件的机器人 QQ 号 |
| \* `post_type` | string [参考](/reference/data_struct/#post-type) | `notice` | 上报类型 |
| \* `notice_type` | string [参考](/reference/data_struct/#post-notice-type) | `group_admin` | 通知类型 |
| `sub_type` | string | `set`、`unset` | 事件子类型, 分别表示设置和取消管理员 |
| `group_id` | int64 | - | 群号 |
| `user_id` | int64 | - | 管理员 QQ 号 |

### 群文件上传

**事件数据**

| 字段名 | 数据类型 | 可能的值 | 说明 |
| ----- | ------ | ------- | ---- |
| \* `time` | int64 | - | 事件发生的时间戳 |
| \* `self_id` | int64 | - | 收到事件的机器人 QQ 号 |
| \* `post_type` | string [参考](/reference/data_struct/#post-type) | `notice` | 上报类型 |
| \* `notice_type` | string [参考](/reference/data_struct/#post-notice-type) | `group_upload` | 通知类型 |
| `group_id` | int64 | - | 群号 |
| `user_id` | int64 | - | 发送者 QQ 号 |
| `file` | object | - | 文件信息 |

其中 `file` 字段的内容如下：

| 字段名 | 数据类型 | 说明 |
| ----- | ------ | ---- |
| `id` | string | 文件 ID |
| `name` | string | 文件名 |
| `size` | int64 | 文件大小 ( 字节数 )  |
| `busid` | int64 | busid ( 目前不清楚有什么作用 )  |


### 群禁言

**事件数据**

| 字段名 | 数据类型 | 可能的值 | 说明 |
| ----- | ------ | -------- | --- |
| \* `time` | int64 | - | 事件发生的时间戳 |
| \* `self_id` | int64 | - | 收到事件的机器人 QQ 号 |
| \* `post_type` | string [参考](/reference/data_struct/#post-type) | `notice` | 上报类型 |
| \* `notice_type` | string [参考](/reference/data_struct/#post-notice-type) | `group_ban` | 通知类型 |
| `sub_type` | string | `ban`、`lift_ban` | 事件子类型, 分别表示禁言、解除禁言 |
| `group_id` | int64 | - | 群号 |
| `operator_id` | int64 | - | 操作者 QQ 号 |
| `user_id` | int64 | - | 被禁言 QQ 号 (为全员禁言时为`0`) |
| `duration` | int64 | - | 禁言时长, 单位秒 (为全员禁言时为`-1`) |

### 好友添加

**事件数据**

| 字段名 | 数据类型 | 可能的值 | 说明 |
| ----- | ------ | -------- | --- |
| \* `time` | int64 | - | 事件发生的时间戳 |
| \* `self_id` | int64 | - | 收到事件的机器人 QQ 号 |
| \* `post_type` | string [参考](/reference/data_struct/#post-type) | `notice` | 上报类型 |
| \* `notice_type` | string [参考](/reference/data_struct/#post-notice-type) | `friend_add` | 通知类型 |
| `user_id` | int64 | - | 新添加好友 QQ 号 |

### 好友戳一戳（双击头像）

**事件数据**

| 字段名 | 数据类型 | 可能的值 | 说明 |
| ----- | ------ | -------- | --- |
| \* `time` | int64 | | 时间 |
| \* `self_id` | int64 |  | BOT QQ 号 |
| \* `post_type` | string [参考](/reference/data_struct/#post-type) | `notice` | 上报类型 |
| \* `notice_type` | string [参考](/reference/data_struct/#post-notice-type) | `notify` | 消息类型 |
| `sub_type` | string | `poke` | 提示类型 |
| `sender_id` | int64 | | 发送者 QQ 号 |
| `user_id` | int64  | | 发送者 QQ 号 |
| `target_id` | int64 | | 被戳者 QQ 号 |

### 群内戳一戳（双击头像）

::: warning 注意
此事件无法在手表协议上触发
:::

**事件数据**

| 字段  | 类型 | 可能的值 | 说明 |
| ------------- | ------ | -------------- | -------------- |
| \* `time` | int64 | | 时间 |
| \* `self_id` | int64 |  | BOT QQ 号 |
| \* `post_type` | string [参考](/reference/data_struct/#post-type) | `notice` | 上报类型 |
| \* `notice_type` | string [参考](/reference/data_struct/#post-notice-type) | `notify` | 消息类型 |
| `sub_type` | string | `poke` | 提示类型 |
| `group_id` | int64 |  | 群号 |
| `user_id` | int64  |  | 发送者 QQ 号 |
| `target_id` | int64 | | 被戳者 QQ 号 |

### 群红包运气王提示

::: warning 注意
此事件无法在手表协议上触发
:::

**事件数据**

| 字段  | 类型 | 可能的值 | 说明 |
| ------------- | ------ | ------------ | ------------ |
| \* `time` | int64 | | 时间 |
| \* `self_id` | int64 |  | BOT QQ 号 |
| \* `post_type` | string [参考](/reference/data_struct/#post-type) | `notice` | 上报类型 |
| \* `notice_type` | string [参考](/reference/data_struct/#post-notice-type) | `notify` | 消息类型 |
| `sub_type`  | string | `lucky_king` | 提示类型 |
| `group_id`  | int64  |  | 群号 |
| `user_id` | int64  |  | 红包发送者id |
| `target_id` | int64  |  | 运气王id |

### 群成员荣誉变更提示

::: warning 注意
此事件无法在手表协议上触发
:::

**事件数据**

| 字段  | 类型 | 可能的值 | 说明 |
| ------------- | ------ | -------------------------------------------------------- | -------- |
| \* `time` | int64 | | 时间 |
| \* `self_id` | int64 |  | BOT QQ 号 |
| \* `post_type` | string [参考](/reference/data_struct/#post-type) | `notice` | 上报类型 |
| \* `notice_type` | string [参考](/reference/data_struct/#post-notice-type) | `notify` | 消息类型 |
| `sub_type`  | string | `honor`  | 提示类型 |
| `group_id`  | int64  |  | 群号 |
| `user_id` | int64  |  | 成员id |
| `honor_type`  | string | `talkative:龙王` `performer:群聊之火` `emotion:快乐源泉` | 荣誉类型 |

### 群成员头衔变更

**事件数据**

| 字段  | 类型 | 可能的值 | 说明 |
| ------------- | ------ | -------------------------------------------------------- | -------- |
| \* `time` | int64 | | 时间 |
| \* `self_id` | int64 |  | BOT QQ 号 |
| \* `post_type` | string [参考](/reference/data_struct/#post-type) | `notice` | 上报类型 |
| \* `notice_type` | string [参考](/reference/data_struct/#post-notice-type) | `notify` | 消息类型 |
| `sub_type`  | string | `title`  | 提示类型 |
| `group_id`  | int64  |  | 群号 |
| `user_id`   | int64  |  | 变更头衔的用户 QQ 号 |
| `title` | string | | 获得的新头衔 |

### 群成员名片更新

::: warning 注意
此事件不保证时效性, 仅在收到消息时校验卡片
:::

**事件数据**

| 字段  | 类型 | 可能的值 | 说明 |
| ------------- | ------ | ------------ | -------- |
| \* `time` | int64 | | 时间 |
| \* `self_id` | int64 |  | BOT QQ 号 |
| \* `post_type` | string [参考](/reference/data_struct/#post-type) | `notice` | 上报类型 |
| \* `notice_type` | string [参考](/reference/data_struct/#post-notice-type) | `group_card` | 消息类型 |
| `group_id`  | int64  |  | 群号 |
| `user_id` | int64  |  | 成员id |
| `card_new`  | string  |  | 新名片 |
| `card_old`  | string  |  | 旧名片 |

::: tip PS
当名片为空时 `card_xx` 字段为空字符串, 并不是昵称
:::

### 接收到离线文件

**事件数据**

| 字段  | 类型 | 可能的值 | 说明 |
| ------------- | ------ | -------------- | -------- |
| \* `time` | int64 | | 时间 |
| \* `self_id` | int64 |  | BOT QQ 号 |
| \* `post_type` | string [参考](/reference/data_struct/#post-type) | `notice` | 上报类型 |
| \* `notice_type` | string [参考](/reference/data_struct/#post-notice-type) | `offline_file` | 消息类型 |
| `user_id` | int64  |  | 发送者id |
| `file`  | object |  | 文件数据 |

**file object**

| 字段 | 类型 | 可能的值 | 说明 |
| ------ | ------ | -------- | -------- |
| `name` | string |  | 文件名 |
| `size` | int64  |  | 文件大小 |
| `url`  | string |  | 下载链接 |

### 其他客户端在线状态变更

**事件数据**

| 字段  | 类型 | 可能的值 | 说明 |
| ------------- | ------ | -------------- | -------- |
| \* `post_type` | string [参考](/reference/data_struct/#post-type) | `notice` | 上报类型 |
| \* `notice_type` | string [参考](/reference/data_struct/#post-notice-type) | `client_status` | 消息类型 |
| `client`  | Device*  |  | 客户端信息 |
| `online`  | bool |  | 当前是否在线 |

* Device 可在 [API - 获取当前账号在线客户端列表](../api/#获取当前账号在线客户端列表) 查看

### 精华消息变更

**事件数据**

| 字段  | 类型 | 可能的值 | 说明 |
| ------------- | ------ | -------------- | -------- |
| \* `time` | int64 | | 时间 |
| \* `self_id` | int64 |  | BOT QQ 号 |
| \* `post_type` | string [参考](/reference/data_struct/#post-type) | `notice` | 上报类型 |
| \* `notice_type` | string [参考](/reference/data_struct/#post-notice-type) | `essence` | 消息类型 |
| `sub_type` | string | `add`,`delete` | 添加为`add`,移出为`delete` |
| `group_id` | int64 |  | 群号 |
| `sender_id` | int64 |  | 消息发送者ID |
| `operator_id` | int64 |  | 操作者ID |
| `message_id` | int32 |  | 消息ID |

### ↓ 请求上报 ↓

下面的提到的上报, 都是请求上报. 消息上报的 `post_type` 值为 `request`, 通用数据如下:

| 字段名 | 数据类型 | 可能的值 | 说明 |
| - | - | - | - |
| `request_type` | string [参考](/reference/data_struct/#post-request-type) | - | 请求类型 |

### 加好友请求

**事件数据**

| 字段名 | 数据类型 | 可能的值 | 说明 |
| ----- | ------ | -------- | --- |
| \* `time` | int64 | - | 事件发生的时间戳 |
| \* `self_id` | int64 | - | 收到事件的机器人 QQ 号 |
| \* `post_type` | string [参考](/reference/data_struct/#post-type) | `request` | 上报类型 |
| \* `request_type` | string [参考](/reference/data_struct/#Post_Request_Type) | `friend` | 请求类型 |
| `user_id` | int64 | - | 发送请求的 QQ 号 |
| `comment` | string | - | 验证信息 |
| `flag` | string | - | 请求 flag, 在调用处理请求的 API 时需要传入 |

**快速操作**

| 字段名 | 数据类型 | 说明 | 默认情况 |
| ----- | ------- | --- | ------- |
| `approve` | boolean | 是否同意请求 | 不处理 |
| `remark` | string  | 添加后的好友备注 ( 仅在同意时有效 )  | 无备注 |

### 加群请求／邀请

**事件数据**

| 字段名 | 数据类型 | 可能的值 | 说明 |
| ----- | ------ | -------- | --- |
| \* `time` | int64 | - | 事件发生的时间戳 |
| \* `self_id` | int64 | - | 收到事件的机器人 QQ 号 |
| \* `post_type` | string [参考](/reference/data_struct/#post-type) | `request` | 上报类型 |
| \* `request_type` | string [参考](/reference/data_struct/#post-request-type) | `group` | 请求类型 |
| `sub_type` | string | `add`、`invite` | 请求子类型, 分别表示加群请求、邀请登录号入群 |
| `group_id` | int64 | - | 群号 |
| `user_id` | int64 | - | 发送请求的 QQ 号 |
| `comment` | string | - | 验证信息 |
| `flag` | string | - | 请求 flag, 在调用处理请求的 API 时需要传入 |

**快速操作**

| 字段名 | 数据类型 | 说明 | 默认情况 |
| ----- | ------- | --- | ------- |
| `approve` | boolean | 是否同意请求／邀请 | 不处理 |
| `reason` | string | 拒绝理由 ( 仅在拒绝时有效 )  | 无理由 |

### ↓ 元事件上报 ↓

下面的提到的上报, 都是元事件上报. 消息上报的 `post_type` 值为 `meta_event`, 通用数据如下:

| 字段名 | 数据类型 | 可能的值 | 说明 |
| - | - | - | - |
| `meta_event_type` | string [参考](/reference/data_struct/#post-metaevent-type) | - | 元数据类型 |

### 心跳包

| 字段名 | 数据类型 | 可能的值 | 说明 |
| ----- | ------ | -------- | --- |
| \* `time` | int64 | - | 事件发生的时间戳 |
| \* `self_id` | int64 | - | 收到事件的机器人 QQ 号 |
| \* `post_type` | string [参考](/reference/data_struct#post-type) | `meta_event` | 上报类型 |
| `meta_event_type` | string [参考](/reference/data_struct#post-metaevent-type) | `heartbeat` | 元事件类型 |
| `status` | Status [参考](/reference/data_struct#status) | - | 应用程序状态 |
| `interval` | int64 | - | 距离上一次心跳包的时间(单位是毫秒) |

### 生命周期

| 字段名 | 数据类型 | 可能的值 | 说明 |
| ----- | ------ | -------- | --- |
| \* `time` | int64 | - | 事件发生的时间戳 |
| \* `self_id` | int64 | - | 收到事件的机器人 QQ 号 |
| \* `post_type` | string [参考](/reference/data_struct#post-type) | `meta_event` | 上报类型 |
| `sub_type` | string | `enable`, `disable`, `connect` | 子类型 |
