# API

## 发送私聊消息

终结点：`/send_private_msg`

**参数**

| 字段名 | 数据类型 | 默认值 | 说明 |
| ----- | ------- | ----- | --- |
| `user_id` | number | - | 对方 QQ 号 |
| `message` | message | - | 要发送的内容 |
| `auto_escape` | boolean | `false` | 消息内容是否作为纯文本发送 ( 即不解析 CQ 码 ) , 只在 `message` 字段是字符串时有效 |

**响应数据**

| 字段名 | 数据类型 | 说明 |
| ----- | ------- | --- |
| `message_id` | number (int32) | 消息 ID |

##  发送群消息

终结点：`/send_group_msg`

**参数**

| 字段名 | 数据类型 | 默认值 | 说明 |
| ----- | ------- | ----- | --- |
| `group_id` | number | - | 群号 |
| `message` | message | - | 要发送的内容 |
| `auto_escape` | boolean | `false` | 消息内容是否作为纯文本发送 ( 即不解析 CQ 码) , 只在 `message` 字段是字符串时有效 |

**响应数据**

| 字段名 | 数据类型 | 说明 |
| ----- | ------- | --- |
| `message_id` | number (int32) | 消息 ID |

## 发送合并转发 ( 群 )

终结点: `/send_group_forward_msg`

**参数**

| 字段       | 类型           | 说明                          |
| ---------- | -------------- | ----------------------------- |
| `group_id` | int64          | 群号                          |
| `messages` | forward node[] | 自定义转发消息, 具体看 CQcode |

## 发送消息

终结点：`/send_msg`

**参数**

| 字段名 | 数据类型 | 默认值 | 说明 |
| ----- | ------- | ----- | --- |
| `message_type` | string | - | 消息类型, 支持 `private`、`group` , 分别对应私聊、群组, 如不传入, 则根据传入的 `*_id` 参数判断 |
| `user_id` | number | - | 对方 QQ 号 ( 消息类型为 `private` 时需要 ) |
| `group_id` | number | - | 群号 ( 消息类型为 `group` 时需要 ) |
| `message` | message | - | 要发送的内容 |
| `auto_escape` | boolean | `false` | 消息内容是否作为纯文本发送 ( 即不解析 CQ 码 ) , 只在 `message` 字段是字符串时有效 |

**响应数据**

| 字段名 | 数据类型 | 说明 |
| ----- | ------- | --- |
| `message_id` | number (int32) | 消息 ID |

## 撤回消息

终结点：`/delete_msg`

**参数**

| 字段名 | 数据类型 | 默认值 | 说明 |
| ----- | ------- | ----- | --- |
| `message_id` | number (int32) | - | 消息 ID |

::: tip 提示
该 API 无响应数据
:::

## 获取消息

终结点: `/get_msg`

**参数**

| 字段         | 类型  | 说明   |
| ------------ | ----- | ------ |
| `message_id` | int32 | 消息id |

**响应数据**

| 字段          | 类型     | 说明       |
| ------------ | ------- | ---------- |
| `message_id` | int32   | 消息id      |
| `real_id`    | int32   | 消息真实id   |
| `sender`     | object  | 发送者      |
| `time`       | int32   | 发送时间    |
| `message`    | string  | 消息内容    |
| `raw_message`| string  | 原始消息内容 |

::: warning 注意
在 go-cqhttp-v0.9.35~v0.9.36-fix3 版本中 `raw_message` 字段为 `message_raw`

在 go-cqhttp-v0.9.35以前的版本中不存在 `message_raw` 字段

在 go-cqhttp-v0.9.29-fix1 以前的版本可能不符合该文档
:::

## 获取合并转发内容

终结点: `/get_forward_msg`

**参数**

| 字段         | 类型   | 说明   |
| ------------ | ------ | ------ |
| `message_id` | string | 消息id |

**响应数据**

| 字段       | 类型              | 说明     |
| ---------- | ----------------- | -------- |
| `messages` | forward message[] | 消息列表 |

响应示例

````json
{
    "data": {
        "messages": [
            {
                "content": "合并转发1",
                "sender": {
                    "nickname": "发送者A",
                    "user_id": 10086
                },
                "time": 1595694374
            },
            {
                "content": "合并转发2[CQ:image,file=xxxx,url=xxxx]",
                "sender": {
                    "nickname": "发送者B",
                    "user_id": 10087
                },
                "time": 1595694393
            }
        ]
    },
    "retcode": 0,
    "status": "ok"
}
````

## 获取图片信息

终结点: `/get_image`

::: warning 注意
该接口为 CQHTTP 接口修改
:::

**参数**

| 字段   | 类型   | 说明           |
| ------ | ------ | -------------- |
| `file` | string | 图片缓存文件名 |

**响应数据**

| 字段       | 类型   | 说明           |
| ---------- | ------ | -------------- |
| `size`     | int32  | 图片源文件大小 |
| `filename` | string | 图片文件原名   |
| `url`      | string | 图片下载地址   |

## 发送好友赞

::: warning 警告
go-cqhttp 预计不会支持该 API
:::

终结点：`/send_like`

**参数**

| 字段名 | 数据类型 | 默认值 | 说明 |
| ----- | ------- | ----- | --- |
| `user_id` | number | - | 对方 QQ 号 |
| `times` | number | 1 | 赞的次数, 每个好友每天最多 10 次 |

::: tip 提示
该 API 无响应数据
:::

## 群组踢人

终结点：`/set_group_kick`

**参数**

| 字段名 | 数据类型 | 默认值 | 说明 |
| ----- | ------- | ----- | --- |
| `group_id` | number | - | 群号 |
| `user_id` | number | - | 要踢的 QQ 号  |
| `reject_add_request` | boolean | `false` | 拒绝此人的加群请求 |

::: tip 提示
该 API 无响应数据
:::

## 群组单人禁言

终结点：`/set_group_ban`

**参数**

| 字段名 | 数据类型 | 默认值 | 说明 |
| ----- | ------- | ----- | --- |
| `group_id` | number | - | 群号 |
| `user_id` | number | - | 要禁言的 QQ 号 |
| `duration` | number | `30 * 60` | 禁言时长, 单位秒, 0 表示取消禁言 |

::: tip 提示
该 API 无响应数据
:::

## 群组匿名用户禁言

::: warning 注意
该 API 从 go-cqhttp-v0.9.36 开始支持
:::

终结点：`/set_group_anonymous_ban`

**参数**

| 字段名 | 数据类型 | 默认值 | 说明 |
| ----- | ------- | ----- | --- |
| `group_id` | number | - | 群号 |
| `anonymous` | object | - | 可选, 要禁言的匿名用户对象（群消息上报的 `anonymous` 字段） |
| `anonymous_flag` 或 `flag` | string | - | 可选, 要禁言的匿名用户的 flag（需从群消息上报的数据中获得） |
| `duration` | number | `30 * 60` | 禁言时长, 单位秒, 无法取消匿名用户禁言 |

::: tip 提示
上面的 `anonymous` 和 `anonymous_flag` 两者任选其一传入即可, 若都传入, 则使用 `anonymous`。
:::

::: tip 提示
该 API 无响应数据
:::

## 群组全员禁言

终结点：`/set_group_whole_ban`

**参数**

| 字段名 | 数据类型 | 默认值 | 说明 |
| ----- | ------- | ----- | --- |
| `group_id` | number | - | 群号 |
| `enable` | boolean | `true` | 是否禁言 |

::: tip 提示
该 API 无响应数据
:::

## 群组设置管理员

终结点：`/set_group_admin`

**参数**

| 字段名 | 数据类型 | 默认值 | 说明 |
| ----- | ------- | ----- | --- |
| `group_id` | number | - | 群号 |
| `user_id` | number | - | 要设置管理员的 QQ 号 |
| `enable` | boolean | `true` | true 为设置, false 为取消 |

::: tip 提示
该 API 无响应数据
:::

## 群组匿名

::: warning 注意
该 API 暂未被 go-cqhttp 支持, 您可以提交 pr 以使该 API 被支持
[提交 pr](https://github.com/Mrs4s/go-cqhttp/compare)
:::

终结点：`/set_group_anonymous`

**参数**

| 字段名 | 数据类型 | 默认值 | 说明 |
| ----- | ------- | ----- | --- |
| `group_id` | number | - | 群号 |
| `enable` | boolean | `true` | 是否允许匿名聊天 |

::: tip 提示
该 API 无响应数据
:::

## 设置群名片 ( 群备注 )

终结点：`/set_group_card`

**参数**

| 字段名 | 数据类型 | 默认值 | 说明 |
| ----- | ------- | ----- | --- |
| `group_id` | number | - | 群号 |
| `user_id` | number | - | 要设置的 QQ 号 |
| `card` | string | 空 | 群名片内容, 不填或空字符串表示删除群名片 |

::: tip 提示
该 API 无响应数据
:::

## 设置群名

终结点：`/set_group_name`

**参数**

| 字段名   | 数据类型 | 说明 |
| -------- | ------ | ---- |
| `group_id` | number (int64) | 群号 |
| `group_name` | string | 新群名 |

::: tip 提示
该 API 无响应数据
:::

## 退出群组

终结点：`/set_group_leave`

**参数**

| 字段名 | 数据类型 | 默认值 | 说明 |
| ----- | ------- | ----- | --- |
| `group_id` | number | - | 群号 |
| `is_dismiss` | boolean | `false` | 是否解散, 如果登录号是群主, 则仅在此项为 true 时能够解散 |

::: tip 提示
该 API 无响应数据
:::

## 设置群组专属头衔

终结点：`/set_group_special_title`

**参数**

| 字段名 | 数据类型 | 默认值 | 说明 |
| ----- | ------- | ----- | --- |
| `group_id` | number | - | 群号 |
| `user_id` | number | - | 要设置的 QQ 号 |
| `special_title` | string | 空 | 专属头衔, 不填或空字符串表示删除专属头衔 |
| `duration` | number | `-1` | 专属头衔有效期, 单位秒, -1 表示永久, 不过此项似乎没有效果, 可能是只有某些特殊的时间长度有效, 有待测试 |

::: tip 提示
该 API 无响应数据
:::

## 处理加好友请求

终结点：`/set_friend_add_request`

**参数**

| 字段名 | 数据类型 | 默认值 | 说明 |
| ----- | ------- | ----- | --- |
| `flag` | string | - | 加好友请求的 flag（需从上报的数据中获得） |
| `approve` | boolean | `true` | 是否同意请求 |
| `remark` | string | 空 | 添加后的好友备注（仅在同意时有效） |

::: tip 提示
该 API 无响应数据
:::

## 处理加群请求／邀请

终结点：`/set_group_add_request`

**参数**

| 字段名 | 数据类型 | 默认值 | 说明 |
| ----- | ------- | ----- | --- |
| `flag` | string | - | 加群请求的 flag（需从上报的数据中获得） |
| `sub_type` 或 `type` | string | - | `add` 或 `invite`, 请求类型（需要和上报消息中的 `sub_type` 字段相符） |
| `approve` | boolean | `true` | 是否同意请求／邀请 |
| `reason` | string | 空 | 拒绝理由（仅在拒绝时有效） |

::: tip 提示
该 API 无响应数据
:::

## 获取登录号信息

终结点：`/get_login_info`

::: tip 提示
该 API 无需参数
:::

**响应数据**

| 字段名 | 数据类型 | 说明 |
| ----- | ------- | --- |
| `user_id` | number (int64) | QQ 号 |
| `nickname` | string | QQ 昵称 |

## 获取陌生人信息

终结点：`/get_stranger_info`

**参数**

| 字段名 | 数据类型 | 默认值 | 说明 |
| ----- | ------- | ----- | --- |
| `user_id` | number | - | QQ 号 |
| `no_cache` | boolean | `false` | 是否不使用缓存（使用缓存可能更新不及时, 但响应更快） |

**响应数据**

| 字段名 | 数据类型 | 说明 |
| ----- | ------- | --- |
| `user_id` | number (int64) | QQ 号 |
| `nickname` | string | 昵称 |
| `sex` | string | 性别, `male` 或 `female` 或 `unknown` |
| `age` | number (int32) | 年龄 |

## 获取好友列表

终结点：`/get_friend_list`

::: tip 提示
该 API 无需参数
:::

**响应数据**

响应内容为 json 数组, 每个元素如下：

| 字段名 | 数据类型 | 说明 |
| ----- | ------- | --- |
| `user_id` | number (int64) | QQ 号 |
| `nickname` | string | 昵称 |
| `remark` | string | 备注名 |

## 获取群信息

终结点：`/get_group_info`

**参数**

| 字段名 | 数据类型 | 默认值 | 说明 |
| ----- | ------- | ----- | --- |
| `group_id` | number | - | 群号 |
| `no_cache` | boolean | `false` | 是否不使用缓存（使用缓存可能更新不及时, 但响应更快） |

**响应数据**

| 字段名 | 数据类型 | 说明 |
| ----- | ------- | --- |
| `group_id` | number (int64) | 群号 |
| `group_name` | string | 群名称 |
| `member_count` | number (int32) | 成员数 |
| `max_member_count` | number (int32) | 最大成员数（群容量） |

## 获取群列表

终结点：`/get_group_list`

::: tip 提示
该 API 无需参数
:::

**响应数据**

响应内容为 json 数组, 每个元素和上面的 `get_group_info` 接口相同。

## 获取群成员信息

终结点：`/get_group_member_info`

**参数**

| 字段名 | 数据类型 | 默认值 | 说明 |
| ----- | ------- | ----- | --- |
| `group_id` | number | - | 群号 |
| `user_id`  | number | - | QQ 号 |
| `no_cache` | boolean | `false` | 是否不使用缓存（使用缓存可能更新不及时, 但响应更快） |

**响应数据**

| 字段名 | 数据类型 | 说明 |
| ----- | ------- | --- |
| `group_id` | number (int64) | 群号 |
| `user_id` | number (int64) | QQ 号 |
| `nickname` | string | 昵称 |
| `card` | string | 群名片／备注 |
| `sex` | string | 性别, `male` 或 `female` 或 `unknown` |
| `age` | number (int32) | 年龄 |
| `area` | string | 地区 |
| `join_time` | number (int32) | 加群时间戳 |
| `last_sent_time` | number (int32) | 最后发言时间戳 |
| `level` | string | 成员等级 |
| `role` | string | 角色, `owner` 或 `admin` 或 `member` |
| `unfriendly` | boolean | 是否不良记录成员 |
| `title` | string | 专属头衔 |
| `title_expire_time` | number (int32) | 专属头衔过期时间戳 |
| `card_changeable` | boolean | 是否允许修改群名片 |

## 获取群成员列表

终结点：`/get_group_member_list`

**参数**

| 字段名 | 数据类型 | 默认值 | 说明 |
| ----- | ------- | ----- | --- |
| `group_id` | number (int64) | - | 群号 |

**响应数据**

响应内容为 json 数组, 每个元素的内容和上面的 `get_group_member_info` 接口相同, 但对于同一个群组的同一个成员, 获取列表时和获取单独的成员信息时, 某些字段可能有所不同, 例如 `area`、`title` 等字段在获取列表时无法获得, 具体应以单独的成员信息为准。

## 获取群荣誉信息

终结点：`/get_group_honor_info`

**参数**

| 字段名 | 数据类型 | 默认值 | 说明 |
| ----- | ------- | ----- | --- |
| `group_id` | number (int64) | - | 群号 |
| `type` | string | - | 要获取的群荣誉类型, 可传入 `talkative` `performer` `legend` `strong_newbie` `emotion` 以分别获取单个类型的群荣誉数据, 或传入 `all` 获取所有数据 |

**响应数据**

| 字段名 | 数据类型 | 说明 |
| ----- | ------- | --- |
| `group_id` | number (int64) | 群号 |
| `current_talkative` | object | 当前龙王, 仅 `type` 为 `talkative` 或 `all` 时有数据 |
| `talkative_list` | array | 历史龙王, 仅 `type` 为 `talkative` 或 `all` 时有数据 |
| `performer_list` | array | 群聊之火, 仅 `type` 为 `performer` 或 `all` 时有数据 |
| `legend_list` | array | 群聊炽焰, 仅 `type` 为 `legend` 或 `all` 时有数据 |
| `strong_newbie_list` | array | 冒尖小春笋, 仅 `type` 为 `strong_newbie` 或 `all` 时有数据 |
| `emotion_list` | array | 快乐之源, 仅 `type` 为 `emotion` 或 `all` 时有数据 |

其中 `current_talkative` 字段的内容如下：

| 字段名 | 数据类型 | 说明 |
| ----- | ------- | --- |
| `user_id` | number (int64) | QQ 号 |
| `nickname` | string | 昵称 |
| `avatar` | string | 头像 URL |
| `day_count` | number (int32) | 持续天数 |

其它各 `*_list` 的每个元素是一个 json 对象, 内容如下：

| 字段名 | 数据类型 | 说明 |
| ----- | ------- | --- |
| `user_id` | number (int64) | QQ 号 |
| `nickname` | string | 昵称 |
| `avatar` | string | 头像 URL |
| `description` | string | 荣誉描述 |

## 获取 Cookies

::: warning 注意
该 API 暂未被 go-cqhttp 支持, 您可以提交 pr 以使该 API 被支持
[提交 pr](https://github.com/Mrs4s/go-cqhttp/compare)
:::

终结点：`/get_cookies`

**参数**

| 字段名 | 数据类型 | 默认值 | 说明 |
| ----- | ------- | ----- | --- |
| `domain` | string | 空 | 需要获取 cookies 的域名 |

**响应数据**

| 字段名 | 数据类型 | 说明 |
| ----- | ------- | --- |
| `cookies` | string | Cookies |

## 获取 CSRF Token

::: warning 注意
该 API 暂未被 go-cqhttp 支持, 您可以提交 pr 以使该 API 被支持
[提交 pr](https://github.com/Mrs4s/go-cqhttp/compare)
:::

终结点：`/get_csrf_token`

::: tip 提示
该 API 无需参数
:::

**响应数据**

| 字段名 | 数据类型 | 说明 |
| ----- | ------- | --- |
| `token` | number (int32) | CSRF Token |

## 获取 QQ 相关接口凭证

::: warning 注意
该 API 暂未被 go-cqhttp 支持, 您可以提交 pr 以使该 API 被支持
[提交 pr](https://github.com/Mrs4s/go-cqhttp/compare)
:::

::: tip 提示
即上面两个接口的合并
:::

终结点：`/get_credentials`

**参数**

| 字段名 | 数据类型 | 默认值 | 说明 |
| ----- | ------- | ----- | --- |
| `domain` | string | 空 | 需要获取 cookies 的域名 |

**响应数据**

| 字段名 | 数据类型 | 说明 |
| ----- | ------- | --- |
| `cookies` | string | Cookies |
| `csrf_token` | number (int32) | CSRF Token |

## 获取语音

::: warning 注意
该 API 暂未被 go-cqhttp 支持, 您可以提交 pr 以使该 API 被支持
[提交 pr](https://github.com/Mrs4s/go-cqhttp/compare)
:::

终结点：`/get_record`

::: tip 提示
要使用此接口, 通常需要安装 ffmpeg, 请参考 OneBot 实现的相关说明。
:::

**参数**

| 字段名 | 数据类型 | 默认值 | 说明 |
| ----- | ------- | ----- | --- |
| `file` | string | - | 收到的语音文件名（消息段的 `file` 参数）, 如 `0B38145AA44505000B38145AA4450500.silk` |
| `out_format`  | string | - | 要转换到的格式, 目前支持 `mp3`、`amr`、`wma`、`m4a`、`spx`、`ogg`、`wav`、`flac` |

**响应数据**

| 字段名 | 数据类型 | 说明 |
| ----- | ------- | --- |
| `file` | string | 转换后的语音文件路径, 如 `/home/somebody/cqhttp/data/record/0B38145AA44505000B38145AA4450500.mp3` |

## 检查是否可以发送图片

终结点：`/can_send_image`

::: tip 提示
该 API 无需参数
:::

**响应数据**

| 字段名 | 数据类型 | 说明 |
| ----- | ------- | --- |
| `yes` | boolean | 是或否 |

## 检查是否可以发送语音

终结点：`/can_send_record`

::: tip 提示
该 API 无需参数
:::

**响应数据**

| 字段名 | 数据类型 | 说明 |
| ----- | ------- | --- |
| `yes` | boolean | 是或否 |

## 获取版本信息

终结点：`/get_version_info`

::: tip 提示
该 API 无需参数
:::

**响应数据**

| 字段名 | 数据类型 | 说明 |
| ----- | ------- | --- |
| `app_name` | string | 应用标识, 如 `mirai-native` |
| `app_version` | string | 应用版本, 如 `1.2.3` |
| `protocol_version` | string | OneBot 标准版本, 如 `v11` |

## 重启 go-cqhttp

终结点：`/set_restart`

由于重启 go-cqhttp 实现同时需要重启 API 服务, 这意味着当前的 API 请求会被中断, 因此需要异步地重启, 接口返回的 `status` 是 `async`。

**参数**

| 字段名 | 数据类型 | 默认值 | 说明 |
| ----- | ------- | ----- | --- |
| `delay` | number | `0` | 要延迟的毫秒数, 如果默认情况下无法重启, 可以尝试设置延迟为 2000 左右 |

::: tip 提示
该 API 无响应数据
:::

## 清理缓存

::: warning 注意
该 API 暂未被 go-cqhttp 支持, 您可以提交 pr 以使该 API 被支持
[提交 pr](https://github.com/Mrs4s/go-cqhttp/compare)
:::

终结点：`/clean_cache`

用于清理积攒了太多的缓存文件。

::: tip 提示
该 API 无需参数也没有响应数据
:::

## 设置群头像

终结点: `/set_group_portrait`

**参数**

| 字段       | 类型   | 说明                     |
| ---------- | ------ | ------------------------ |
| `group_id` | int64  | 群号                     |
| `file`     | string | 图片文件名               |
| `cache`    | int    | 表示是否使用已缓存的文件 |

[1] `file` **参数**支持以下几种格式：

- 绝对路径, 例如 `file:///C:\\Users\Richard\Pictures\1.png`, 格式使用 [`file` URI](https://tools.ietf.org/html/rfc8089)
- 网络 URL, 例如 `http://i1.piimg.com/567571/fdd6e7b6d93f1ef0.jpg`
- Base64 编码, 例如 `base64://iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAIAAADJt1n/AAAAKElEQVQ4EWPk5+RmIBcwkasRpG9UM4mhNxpgowFGMARGEwnBIEJVAAAdBgBNAZf+QAAAAABJRU5ErkJggg==`

[2] `cache`**参数**: 通过网络 URL 发送时有效, `1`表示使用缓存, `0`关闭关闭缓存, 默认 为`1`

[3] 目前这个API在登录一段时间后因cookie失效而失效, 请考虑后使用

## 获取中文分词 ( 隐藏 API )

::: danger 警告
隐藏 API 是不建议一般用户使用的, 它们只应该在 OneBot 实现内部或由 SDK 和框架使用, 因为不正确的使用可能造成程序运行不正常。
:::

终结点: `/.get_word_slices`

**参数**

| 字段      | 类型   | 说明 |
| --------- | ------ | ---- |
| `content` | string | 内容 |

**响应数据**

| 字段     | 类型     | 说明 |
| -------- | -------- | ---- |
| `slices` | string[] | 词组 |

## 图片 OCR

::: warning 注意
目前图片OCR接口仅支持接受的图片

ocr_image API移除了实验模式, 目前版本 .ocr_image 和 ocr_image 均能访问, 后期将只保留后者.

[go-cqhttp-v0.9.34更新日志](https://github.com/Mrs4s/go-cqhttp/releases/tag/v0.9.34)
:::

终结点: `/ocr_image`或`/.ocr_image`

**参数**

| 字段    | 类型   | 说明   |
| ------- | ------ | ------ |
| `image` | string | 图片ID |

**响应数据**

| 字段       | 类型            | 说明    |
| ---------- | --------------- | ------- |
| `texts`    | TextDetection[] | OCR结果 |
| `language` | string          | 语言    |

**TextDetection**

| 字段          | 类型    | 说明   |
| ------------- | ------- | ------ |
| `text`        | string  | 文本   |
| `confidence`  | int32   | 置信度 |
| `coordinates` | vector2 | 坐标   |


## 获取群系统消息

终结点: `/get_group_system_msg`

**响应数据**

| 字段               | 类型             | 说明         |
| ------------------ | ---------------- | ------------ |
| `invited_requests` | InvitedRequest[] | 邀请消息列表 |
| `join_requests`    | JoinRequest[]    | 进群消息列表 |

::: warning 注意
如果列表不存在任何消息, 将返回 `null`
:::

**InvitedRequest**

| 字段           | 类型   | 说明              |
| -------------- | ------ | ----------------- |
| `request_id`   | int64  | 请求ID            |
| `invitor_uin`  | int64  | 邀请者            |
| `invitor_nick` | string | 邀请者昵称        |
| `group_id`     | int64  | 群号              |
| `group_name`   | string | 群名              |
| `checked`      | bool   | 是否已被处理      |
| `actor`        | int64  | 处理者, 未处理为0 |

**JoinRequest**

| 字段             | 类型   | 说明              |
| ---------------- | ------ | ----------------- |
| `request_id`     | int64  | 请求ID            |
| `requester_uin`  | int64  | 请求者ID          |
| `requester_nick` | string | 请求者昵称        |
| `message`        | string | 验证消息          |
| `group_id`       | int64  | 群号              |
| `group_name`     | string | 群名              |
| `checked`        | bool   | 是否已被处理      |
| `actor`          | int64  | 处理者, 未处理为0 |

## 获取群文件系统信息

终结点: `/get_group_file_system_info`

**参数**

| 字段       | 类型  | 说明 |
| ---------- | ----- | ---- |
| `group_id` | int64 | 群号 |

**响应数据**

| 字段          | 类型  | 说明       |
| ------------- | ----- | ---------- |
| `file_count`  | int32 | 文件总数   |
| `limit_count` | int32 | 文件上限   |
| `used_space`  | int64 | 已使用空间 |
| `total_space` | int64 | 空间上限   |

## 获取群根目录文件列表

::: tip 提示
`File` 和 `Folder` 对象信息请参考最下方
:::

终结点: `/get_group_root_files`

**参数**

| 字段       | 类型  | 说明 |
| ---------- | ----- | ---- |
| `group_id` | int64 | 群号 |

**响应数据**

| 字段      | 类型     | 说明       |
| --------- | -------- | ---------- |
| `files`   | File[]   | 文件列表   |
| `folders` | Folder[] | 文件夹列表 |

## 获取群子目录文件列表

::: tip 提示
`File` 和 `Folder` 对象信息请参考最下方
:::

终结点: `/get_group_files_by_folder`

**参数**

| 字段        | 类型   | 说明                        |
| ----------- | ------ | --------------------------- |
| `group_id`  | int64  | 群号                        |
| `folder_id` | string | 文件夹ID 参考 `Folder` 对象 |

**响应数据**

| 字段      | 类型     | 说明       |
| --------- | -------- | ---------- |
| `files`   | File[]   | 文件列表   |
| `folders` | Folder[] | 文件夹列表 |

## 获取群文件资源链接

::: tip 提示
`File` 和 `Folder` 对象信息请参考最下方
:::

终结点: `/get_group_file_url`

**参数**

| 字段       | 类型   | 说明                      |
| ---------- | ------ | ------------------------- |
| `group_id` | int64  | 群号                      |
| `file_id`  | string | 文件ID 参考 `File` 对象   |
| `busid`    | int32  | 文件类型 参考 `File` 对象 |

**响应数据**

| 字段  | 类型   | 说明         |
| ----- | ------ | ------------ |
| `url` | string | 文件下载链接 |

**File**

| 字段             | 类型   | 说明                   |
| ---------------- | ------ | ---------------------- |
| `file_id`        | string | 文件ID                 |
| `file_name`      | string | 文件名                 |
| `busid`          | int32  | 文件类型               |
| `file_size`      | int64  | 文件大小               |
| `upload_time`    | int64  | 上传时间               |
| `dead_time`      | int64  | 过期时间,永久文件恒为0 |
| `modify_time`    | int64  | 最后修改时间           |
| `download_times` | int32  | 下载次数               |
| `uploader`       | int64  | 上传者ID               |
| `uploader_name`  | string | 上传者名字             |

**Folder**

| 字段               | 类型   | 说明       |
| ------------------ | ------ | ---------- |
| `folder_id`        | string | 文件夹ID   |
| `folder_name`      | string | 文件名     |
| `create_time`      | int64  | 创建时间   |
| `creator`          | int64  | 创建者     |
| `creator_name`     | string | 创建者名字 |
| `total_file_count` | int32  | 子文件数量 |

## 获取状态

终结点: `/get_status`

**响应数据**

| 字段              | 类型       | 说明                            |
| ----------------- | ---------- | ------------------------------- |
| `app_initialized` | bool       | 原 `CQHTTP` 字段, 恒定为 `true` |
| `app_enabled`     | bool       | 原 `CQHTTP` 字段, 恒定为 `true` |
| `plugins_good`    | bool       | 原 `CQHTTP` 字段, 恒定为 `true` |
| `app_good`        | bool       | 原 `CQHTTP` 字段, 恒定为 `true` |
| `online`          | bool       | 表示BOT是否在线                 |
| `goold`           | bool       | 同 `online`                     |
| `stat`            | Statistics | 运行统计                        |

**Statistics**


| 字段               | 类型   | 说明             |
| ------------------ | ------ | ---------------- |
| `packet_received`  | uint64 | 收到的数据包总数 |
| `packet_sent`      | uint64 | 发送的数据包总数 |
| `packet_lost`      | uint32 | 数据包丢失总数   |
| `message_received` | uint64 | 接受信息总数     |
| `message_sent`     | uint64 | 发送信息总数     |
| `disconnect_times` | uint32 | TCP 链接断开次数 |
| `lost_times`       | uint32 | 账号掉线次数     |

::: warning 注意
所有统计信息都将在重启后重制
:::


## 获取群 @全体成员 剩余次数

终结点: `/get_group_at_all_remain`

**参数**

| 字段       | 类型   | 说明                      |
| ---------- | ------ | ------------------------- |
| `group_id` | int64  | 群号                      |

**响应数据**

| 字段                             | 类型       | 说明                            |
| ------------------------------- | ---------- | ------------------------------- |
| `can_at_all`                    | bool       | 是否可以 @全体成员               |
| `remain_at_all_count_for_group` | int16      | 群内所有管理当天剩余 @全体成员 次数 |
| `remain_at_all_count_for_uin`   | int16      | Bot 当天剩余 @全体成员 次数      |

## 对事件执行快速操作 ( 隐藏 API )

::: warning 注意
隐藏 API 是不建议一般用户使用的, 它们只应该在 OneBot 实现内部或由 SDK 和框架使用, 因为不正确的使用可能造成程序运行不正常。
:::

终结点：`/.handle_quick_operation`

关于事件的快速操作, 见 [快速操作](../event/#快速操作)。

**参数**

| 字段名 | 数据类型 | 默认值 | 说明 |
| ----- | ------- | ----- | --- |
| `context` | object | - | 事件数据对象, 可做精简, 如去掉 `message` 等无用字段 |
| `operation` | object | - | 快速操作对象, 例如 `{"ban": true, "reply": "请不要说脏话"}` |

::: tip 提示
该 API 没有响应数据
:::

## 获取VIP信息

终结点：`/_get_vip_info`

**参数**

| 字段名 | 数据类型 | 默认值 | 说明 |
| ----- | ------- | ----- | --- |
| `user_id` | int64 | | 用户ID |

**响应数据**

| 字段                | 类型    | 说明        |
| ------------------ | ------- | ---------- |
| `user_id`          | int64   | QQ号       |
| `nickname`         | string  | 用户昵称    |
| `level`            | int64   | QQ等级     |
| `level_speed`      | float64 | 等级加速度  |
| `vip_level`        | string  | 会员等级    |
| `vip_growth_speed` | int64   | 会员成长速度 |
| `vip_growth_total` | int64   | 会员成长总值 |

## 发送群公告

终结点： `/_send_group_notice`

**参数**

| 字段名      | 数据类型  | 默认值 | 说明    |
| ---------- | ------- | ----- | ------ |
| `group_id` | int64   |       | 群号    |
| `content`  | string  |       | 公告内容 |

::: tip 提示
该 API 没有响应数据
:::

## 重载事件过滤器

终结点：`/reload_event_filter`

::: tip 提示
该 API 无需参数也没有响应数据
:::
