# 频道API

### 获取频道系统内BOT的资料

终结点: `/get_guild_service_profile`

**响应数据**

| 字段          | 类型  | 说明       |
| ------------- | ----- | ---------- |
| `nickname`    | string | 昵称      |
| `tiny_id`     | string | 自身的ID   |
| `avatar_url`  | string | 头像链接   |

### 获取频道列表

终结点: `/get_guild_list`

**响应数据**

正常情况下响应 `GuildInfo` 数组, 未加入任何频道响应 `null`

GuildInfo:

| 字段          | 类型  | 说明       |
| ------------- | ----- | ---------- |
| `guild_id`    | string | 频道ID      |
| `guild_name`     | string | 频道名称   |
| `guild_display_id`  | int64 | 频道显示ID, 公测后可能作为搜索ID使用  |

### 通过访客获取频道元数据

终结点: `/get_guild_meta_by_guest`

**参数**

| 字段       | 类型  | 说明 |
| ---------- | ----- | ---- |
| `guild_id` | string | 频道ID |

**响应数据**

| 字段          | 类型  | 说明       |
| ------------- | ----- | ---------- |
| `guild_id`    | string | 频道ID      |
| `guild_name`     | string | 频道名称   |
| `guild_profile`  | string | 频道简介  |
| `create_time`  | int64 | 创建时间  |
| `max_member_count`  | int64 | 频道人数上限  |
| `max_robot_count`  | int64 | 频道BOT数上限  |
| `max_admin_count`  | int64 | 频道管理员人数上限  |
| `member_count`  | int64 | 已加入人数  |
| `owner_id`  | string | 创建者ID  |

### 获取子频道列表

终结点: `/get_guild_channel_list`

**参数**

| 字段       | 类型  | 说明 |
| ---------- | ----- | ---- |
| `guild_id` | string | 频道ID |
| `no_cache` | bool  | 是否无视缓存 |

**响应数据**

正常情况下响应 `ChannelInfo` 数组, 未找到任何子频道响应 `null`

ChannelInfo:

| 字段          | 类型  | 说明       |
| ------------- | ----- | ---------- |
| `owner_guild_id`    | string | 所属频道ID      |
| `channel_id`     | string | 子频道ID   |
| `channel_type`     | int32 | 子频道类型   |
| `channel_name`  | string | 子频道名称  |
| `create_time`  | int64 | 创建时间  |
| `creator_tiny_id`  | string | 创建者ID  |
| `talk_permission`  | int32 | 发言权限类型  |
| `visible_type`  | int32 | 可视性类型  |
| `current_slow_mode`  | int32 | 当前启用的慢速模式Key  |
| `slow_modes`  | []SlowModeInfo | 频道内可用慢速模式类型列表|

SlowModeInfo:

| 字段          | 类型  | 说明       |
| ------------- | ----- | ---------- |
| `slow_mode_key`    | int32 | 慢速模式Key   |
| `slow_mode_text`     | string | 慢速模式说明   |
| `speak_frequency`  | int32 | 周期内发言频率限制  |
| `slow_mode_circle`  | int32 | 单位周期时间, 单位秒 |

已知子频道类型列表

| 类型          |  说明       |
| ------------- | ---------- |
| 1    | 文字频道  |
| 2     | 语音频道  |
| 5  |  直播频道  |
| 7  |  主题频道  |

### 获取频道成员列表

终结点: `/get_guild_member_list`

> 由于频道人数较多(数万), 请尽量不要全量拉取成员列表, 这将会导致严重的性能问题
>
> 尽量使用 `get_guild_member_profile` 接口代替全量拉取

**参数**

| 字段       | 类型  | 说明 |
| ---------- | ----- | ---- |
| `guild_id` | string | 频道ID |
| `next_token` | string | 翻页Token |

> `next_token` 为空的情况下, 将返回第一页的数据, 并在返回值附带下一页的 `token`

**响应数据**

| 字段          | 类型  | 说明       |
| ------------- | ----- | ---------- |
| `members`    | []GuildMemberInfo | 成员列表   |
| `finished`    | bool | 是否最终页   |
| `next_token`    | string | 翻页Token   |

GuildMemberInfo:

| 字段          | 类型  | 说明       |
| ------------- | ----- | ---------- |
| `tiny_id`    | string | 成员ID   |
| `title`    | string | 成员头衔   |
| `nickname`    | string | 成员昵称   |
| `role_id`    | string | 所在权限组ID   |
| `role_name`    | string | 所在权限组名称   |

> 默认情况下频道管理员的权限组ID为 `2`, 部分频道可能会另行创建, 需手动判断
>
> 此接口仅展现最新的权限组, 获取用户加入的所有权限组请使用 `get_guild_member_profile` 接口

### 单独获取频道成员信息

终结点: `/get_guild_member_profile`

**参数**

| 字段       | 类型  | 说明 |
| ---------- | ----- | ---- |
| `guild_id` | string | 频道ID |
| `user_id` | string | 用户ID |

**响应数据**

| 字段          | 类型  | 说明       |
| ------------- | ----- | ---------- |
| `tiny_id`    | string | 用户ID     |
| `nickname`    | string | 用户昵称     |
| `avatar_url`    | string | 头像地址     |
| `join_time`    | int64 | 加入时间     |
| `roles`    | []RoleInfo | 加入的所有权限组    |

RoleInfo:

| 字段          | 类型  | 说明       |
| ------------- | ----- | ---------- |
| `role_id`    | string | 权限组ID     |
| `role_name`   | string | 权限组名称     |

### 发送信息到子频道

终结点: `/send_guild_channel_msg`

**参数**

| 字段       | 类型  | 说明 |
| ---------- | ----- | ---- |
| `guild_id` | string | 频道ID |
| `channel_id` | string | 子频道ID |
| `message` | Message | 消息, 与原有消息类型相同 |

**响应数据**

| 字段          | 类型  | 说明       |
| ------------- | ----- | ---------- |
| `message_id`    | string | 消息ID     |

### 获取话题频道帖子

终结点: `/get_topic_channel_feeds`

**参数**

| 字段       | 类型  | 说明 |
| ---------- | ----- | ---- |
| `guild_id` | string | 频道ID |
| `channel_id` | string | 子频道ID |

**响应数据**

返回 `FeedInfo` 数组

FeedInfo:

| 字段          | 类型  | 说明       |
| ------------- | ----- | ---------- |
| `id`   | string | 帖子ID     |
| `channel_id`    | string | 子频道ID     |
| `guild_id`   | string | 频道ID     |
| `create_time`   | int64 | 发帖时间     |
| `title`   | string | 帖子标题     |
| `sub_title`   | string | 帖子副标题  |
| `poster_info`   | PosterInfo | 发帖人信息  |
| `resource`   | ResourceInfo | 媒体资源信息  |
| `resource.images`   | []FeedMedia | 帖子附带的图片列表 |
| `resource.videos`   | []FeedMedia | 帖子附带的视频列表 |
| `contents`   | []FeedContent | 帖子内容 |

PosterInfo:

| 字段          | 类型  | 说明       |
| ------------- | ----- | ---------- |
| `tiny_id`   | string | 发帖人ID     |
| `nickname`    | string | 发帖人昵称     |
| `icon_url`   | string | 发帖人头像链接   |

FeedMedia:

| 字段          | 类型  | 说明       |
| ------------- | ----- | ---------- |
| `file_id`   | string | 媒体ID     |
| `pattern_id`    | string |   控件ID?(不确定)   |
| `url`   | string | 媒体链接   |
| `height`   | int32 | 媒体高度  |
| `width`   | int32 | 媒体宽度  |

FeedContent:

| 字段          | 类型  | 说明       |
| ------------- | ----- | ---------- |
| `type`   | string |  内容类型    |
| `data`    | Data |   内容数据   |

#### 内容类型列表:

|  类型  | 说明       |
|  ----- | ---------- |
| `text` |  文本   |
| `face` |  表情   |
| `at` |  At  |
| `url_quote` |  链接引用   |
| `channel_quote` |  子频道引用  |

#### 内容类型对应数据列表:

- `text`

| 字段          | 类型  | 说明       |
| ------------- | ----- | ---------- |
| `text`   | string |  文本内容    |

- `face`

| 字段          | 类型  | 说明       |
| ------------- | ----- | ---------- |
| `id`   | string |  表情ID    |

- `at`

| 字段          | 类型  | 说明       |
| ------------- | ----- | ---------- |
| `id`   | string |  目标ID    |
| `qq`   | string |  目标ID, 为确保和 `array message` 的一致性保留    |

- `url_quote`

| 字段          | 类型  | 说明       |
| ------------- | ----- | ---------- |
| `display_text`   | string |  显示文本    |
| `url`   | string |  链接    |

- `channel_quote`

| 字段          | 类型  | 说明       |
| ------------- | ----- | ---------- |
| `display_text`   | string |  显示文本    |
| `guild_id`   | string |  频道ID    |
| `channel_id`   | string |  子频道ID    |
