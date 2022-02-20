# 频道事件

### 收到频道消息

**上报数据**

| 字段          | 类型   | 可能的值       | 说明           |
| ------------- | ------ | -------------- | -------------- |
| `post_type`   | string | `message`       | 上报类型       |
| `message_type` | string | `guild` | 消息类型       |
| `sub_type` | string | `channel` | 消息子类型       |
| `guild_id`    | string  |                | 频道ID           |
| `channel_id`    | string  |                | 子频道ID           |
| `user_id`     | string  |                | 消息发送者ID   |
| `message_id`     | string  |                | 消息ID  |
| `sender`     | Sender  |                | 发送者  |
| `message`     | Message  |                | 消息内容  |

> 注: 此处的 `Sender` 对象为保证一致性, `user_id` 为 `uint64` 类型, 并添加了 `string` 类型的 `tiny_id` 字段

### 频道消息表情贴更新

**上报数据**

| 字段          | 类型   | 可能的值       | 说明           |
| ------------- | ------ | -------------- | -------------- |
| `post_type`   | string | `notice`       | 上报类型       |
| `notice_type` | string | `message_reactions_updated` | 消息类型       |
| `guild_id`    | string  |                | 频道ID           |
| `channel_id`    | string  |                | 子频道ID           |
| `user_id`     | string  |                | 操作者ID  |
| `message_id`     | string  |                | 消息ID  |
| `current_reactions`     | []ReactionInfo  |                | 当前消息被贴表情列表  |

ReactionInfo:

| 字段       | 类型  | 说明 |
| ---------- | ----- | ---- |
| `emoji_id` | string | 表情ID |
| `emoji_index` | int32 | 表情对应数值ID |
| `emoji_type` | int32 | 表情类型 |
| `emoji_name` | string | 表情名字 |
| `count` | int32 | 当前表情被贴数量 |
| `clicked` | bool | BOT是否点击 |

### 子频道信息更新

**上报数据**

| 字段          | 类型   | 可能的值       | 说明           |
| ------------- | ------ | -------------- | -------------- |
| `post_type`   | string | `notice`       | 上报类型       |
| `notice_type` | string | `channel_updated` | 消息类型       |
| `guild_id`    | string  |                | 频道ID           |
| `channel_id`    | string  |                | 子频道ID           |
| `user_id`     | string  |                | 操作者ID  |
| `operator_id`     | string  |                | 操作者ID  |
| `old_info`     | ChannelInfo  |        | 更新前的频道信息  |
| `new_info`     | ChannelInfo  |        | 更新后的频道信息  |

### 子频道创建

**上报数据**

| 字段          | 类型   | 可能的值       | 说明           |
| ------------- | ------ | -------------- | -------------- |
| `post_type`   | string | `notice`       | 上报类型       |
| `notice_type` | string | `channel_created` | 消息类型       |
| `guild_id`    | string  |                | 频道ID           |
| `channel_id`    | string  |                | 子频道ID           |
| `user_id`     | string  |                | 操作者ID  |
| `operator_id`     | string  |                | 操作者ID  |
| `channel_info`     | ChannelInfo  |        | 频道信息  |

### 子频道删除

**上报数据**

| 字段          | 类型   | 可能的值       | 说明           |
| ------------- | ------ | -------------- | -------------- |
| `post_type`   | string | `notice`       | 上报类型       |
| `notice_type` | string | `channel_destroyed` | 消息类型       |
| `guild_id`    | string  |                | 频道ID           |
| `channel_id`    | string  |                | 子频道ID           |
| `user_id`     | string  |                | 操作者ID  |
| `operator_id`     | string  |                | 操作者ID  |
| `channel_info`     | ChannelInfo  |        | 频道信息  |