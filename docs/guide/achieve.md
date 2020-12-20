# 实现


## 已实现 CQ 码

##### 符合 OneBot 标准的 CQ 码
|  CQ 码       | 功能                         |
| ------------ | ---------------------------- |
| [CQ:face]    | [QQ表情]                     |
| [CQ:record]  | [语音]                       |
| [CQ:video]   | [短视频]                     |
| [CQ:at]      | [@某人]                      |
| [CQ:share]   | [链接分享]                   |
| [CQ:music]   | [音乐分享]  [音乐自定义分享] |
| [CQ:reply]   | [回复]                       |
| [CQ:forward] | [合并转发]                   |
| [CQ:xml]     | [XML消息]                    |
| [CQ:json]    | [JSON消息]                   |

[QQ表情]: /cqcode/README.md#qq-%E8%A1%A8%E6%83%85
[语音]: /cqcode/README.md#%E8%AF%AD%E9%9F%B3
[短视频]: /cqcode/README.md#%E7%9F%AD%E8%A7%86%E9%A2%91
[@某人]: /cqcode/README.md#%E6%9F%90%E4%BA%BA
[链接分享]: /cqcode/README.md#%E9%93%BE%E6%8E%A5%E5%88%86%E4%BA%AB
[音乐分享]: /cqcode/README.md#%E9%9F%B3%E4%B9%90%E5%88%86%E4%BA%AB
[音乐自定义分享]: /cqcode/README.md#%E9%9F%B3%E4%B9%90%E8%87%AA%E5%AE%9A%E4%B9%89%E5%88%86%E4%BA%AB
[回复]: /cqcode/README.md#%E5%9B%9E%E5%A4%8D
[合并转发]: /cqcode/README.md#%E5%90%88%E5%B9%B6%E8%BD%AC%E5%8F%91
[XML消息]: /cqcode/README.md#xml-%E6%B6%88%E6%81%AF
[JSON消息]: /cqcode/README.md#json-%E6%B6%88%E6%81%AF

##### 拓展 CQ 码及与 OneBot 标准有略微差异的 CQ 码
| 拓展 CQ 码     | 功能                            |
| -------------- | ------------------------------- |
| [CQ:image]     | [图片]                          |
| [CQ:redbag]    | [红包]                          |
| [CQ:poke]      | [戳一戳]                        |
| [CQ:gift]      | [礼物]                          |
| [CQ:node]      | [合并转发消息节点]              |
| [CQ:cardimage] | [一种xml的图片消息（装逼大图）] |
| [CQ:tts]       | [文本转语音]                    |

[图片]: /cqcode/README.md#%E5%9B%BE%E7%89%87
[红包]: /cqcode/README.md#%E7%BA%A2%E5%8C%85
[戳一戳]: /cqcode/README.md#%E6%88%B3%E4%B8%80%E6%88%B3
[礼物]: /cqcode/README.md#%E7%A4%BC%E7%89%A9
[合并转发消息节点]: /cqcode/README.md#%E5%90%88%E5%B9%B6%E8%BD%AC%E5%8F%91%E6%B6%88%E6%81%AF%E8%8A%82%E7%82%B9
[一种xml的图片消息（装逼大图）]: /cqcode/README.md#cardimage
[文本转语音]: /cqcode/README.md#%E6%96%87%E6%9C%AC%E8%BD%AC%E8%AF%AD%E9%9F%B3

## 已实现 API

##### 符合 OneBot 标准的 API
| API                      | 功能                   |
| ------------------------ | ---------------------- |
| /send_private_msg        | [发送私聊消息]         |
| /send_group_msg          | [发送群消息]           |
| /send_msg                | [发送消息]             |
| /delete_msg              | [撤回信息]             |
| /set_group_kick          | [群组踢人]             |
| /set_group_ban           | [群组单人禁言]         |
| /set_group_whole_ban     | [群组全员禁言]         |
| /set_group_admin         | [群组设置管理员]       |
| /set_group_card          | [设置群名片（群备注）] |
| /set_group_name          | [设置群名]             |
| /set_group_leave         | [退出群组]             |
| /set_group_special_title | [设置群组专属头衔]     |
| /set_friend_add_request  | [处理加好友请求]       |
| /set_group_add_request   | [处理加群请求/邀请]    |
| /get_login_info          | [获取登录号信息]       |
| /get_stranger_info       | [获取陌生人信息]       |
| /get_friend_list         | [获取好友列表]         |
| /get_group_info          | [获取群信息]           |
| /get_group_list          | [获取群列表]           |
| /get_group_member_info   | [获取群成员信息]       |
| /get_group_member_list   | [获取群成员列表]       |
| /get_group_honor_info    | [获取群荣誉信息]       |
| /can_send_image          | [检查是否可以发送图片] |
| /can_send_record         | [检查是否可以发送语音] |
| /get_version_info        | [获取版本信息]         |
| /set_restart             | [重启go-cqhttp]        |
| /.handle_quick_operation | [对事件执行快速操作]   |


[发送私聊消息]: /api/README.md#%E5%8F%91%E9%80%81%E7%A7%81%E8%81%8A%E6%B6%88%E6%81%AF
[发送群消息]: /api/README.md#%E5%8F%91%E9%80%81%E7%BE%A4%E6%B6%88%E6%81%AF
[发送消息]: /api/README.md#%E5%8F%91%E9%80%81%E6%B6%88%E6%81%AF
[撤回信息]: /api/README.md#%E6%92%A4%E5%9B%9E%E6%B6%88%E6%81%AF
[群组踢人]: /api/README.md#%E7%BE%A4%E7%BB%84%E8%B8%A2%E4%BA%BA
[群组单人禁言]: /api/README.md#%E7%BE%A4%E7%BB%84%E5%8D%95%E4%BA%BA%E7%A6%81%E8%A8%80
[群组全员禁言]: /api/README.md#%E7%BE%A4%E7%BB%84%E5%85%A8%E5%91%98%E7%A6%81%E8%A8%80
[群组设置管理员]: /api/README.md#%E7%BE%A4%E7%BB%84%E8%AE%BE%E7%BD%AE%E7%AE%A1%E7%90%86%E5%91%98
[设置群名片（群备注）]: /api/README.md#%E8%AE%BE%E7%BD%AE%E7%BE%A4%E5%90%8D%E7%89%87-%E7%BE%A4%E5%A4%87%E6%B3%A8
[设置群名]: /api/README.md#%E8%AE%BE%E7%BD%AE%E7%BE%A4%E5%90%8D
[退出群组]: /api/README.md#%E9%80%80%E5%87%BA%E7%BE%A4%E7%BB%84
[设置群组专属头衔]: /api/README.md#%E8%AE%BE%E7%BD%AE%E7%BE%A4%E7%BB%84%E4%B8%93%E5%B1%9E%E5%A4%B4%E8%A1%94
[处理加好友请求]: /api/README.md#%E5%A4%84%E7%90%86%E5%8A%A0%E5%A5%BD%E5%8F%8B%E8%AF%B7%E6%B1%82
[处理加群请求/邀请]: /api/README.md#%E5%A4%84%E7%90%86%E5%8A%A0%E7%BE%A4%E8%AF%B7%E6%B1%82-%E9%82%80%E8%AF%B7
[获取登录号信息]: /api/README.md#%E8%8E%B7%E5%8F%96%E7%99%BB%E5%BD%95%E5%8F%B7%E4%BF%A1%E6%81%AF
[获取陌生人信息]: /api/README.md#%E8%8E%B7%E5%8F%96%E9%99%8C%E7%94%9F%E4%BA%BA%E4%BF%A1%E6%81%AF
[获取好友列表]: /api/README.md#%E8%8E%B7%E5%8F%96%E5%A5%BD%E5%8F%8B%E5%88%97%E8%A1%A8
[获取群信息]: /api/README.md#%E8%8E%B7%E5%8F%96%E7%BE%A4%E4%BF%A1%E6%81%AF
[获取群列表]: /api/README.md#%E8%8E%B7%E5%8F%96%E7%BE%A4%E5%88%97%E8%A1%A8
[获取群成员信息]: /api/README.md#%E8%8E%B7%E5%8F%96%E7%BE%A4%E6%88%90%E5%91%98%E4%BF%A1%E6%81%AF
[获取群成员列表]: /api/README.md#%E8%8E%B7%E5%8F%96%E7%BE%A4%E6%88%90%E5%91%98%E5%88%97%E8%A1%A8
[获取群荣誉信息]: /api/README.md#%E8%8E%B7%E5%8F%96%E7%BE%A4%E8%8D%A3%E8%AA%89%E4%BF%A1%E6%81%AF
[检查是否可以发送图片]: /api/README.md#%E6%A3%80%E6%9F%A5%E6%98%AF%E5%90%A6%E5%8F%AF%E4%BB%A5%E5%8F%91%E9%80%81%E5%9B%BE%E7%89%87
[检查是否可以发送语音]: /api/README.md#%E6%A3%80%E6%9F%A5%E6%98%AF%E5%90%A6%E5%8F%AF%E4%BB%A5%E5%8F%91%E9%80%81%E8%AF%AD%E9%9F%B3
[获取版本信息]: /api/README.md#%E8%8E%B7%E5%8F%96%E7%89%88%E6%9C%AC%E4%BF%A1%E6%81%AF
[重启go-cqhttp]: /api/README.md#%E9%87%8D%E5%90%AF-onebot-%E5%AE%9E%E7%8E%B0
[对事件执行快速操作]: /api/README.md#%E5%AF%B9%E4%BA%8B%E4%BB%B6%E6%89%A7%E8%A1%8C%E5%BF%AB%E9%80%9F%E6%93%8D%E4%BD%9C-%E9%9A%90%E8%97%8Fapi

##### 拓展 API 及与 OneBot 标准有略微差异的 API
| 拓展 API                    | 功能                   |
| --------------------------- | ---------------------- |
| /set_group_portrait         | [设置群头像]           |
| /get_image                  | [获取图片信息]         |
| /get_msg                    | [获取消息]             |
| /get_forward_msg            | [获取合并转发内容]     |
| /send_group_forward_msg     | [发送合并转发(群)]     |
| /.get_word_slices           | [获取中文分词]         |
| /.ocr_image                 | [图片OCR]              |
| /get_group_system_msg       | [获取群系统消息]       |
| /get_group_file_system_info | [获取群文件系统信息]   |
| /get_group_root_files       | [获取群根目录文件列表] |
| /get_group_files_by_folder  | [获取群子目录文件列表] |
| /get_group_file_url         | [获取群文件资源链接]   |
| /get_status                 | [获取状态]             |

[设置群头像]: /api/README.md#%E8%AE%BE%E7%BD%AE%E7%BE%A4%E5%A4%B4%E5%83%8F
[获取图片信息]: /api/README.md#%E8%8E%B7%E5%8F%96%E5%9B%BE%E7%89%87%E4%BF%A1%E6%81%AF
[获取消息]: /api/README.md#%E8%8E%B7%E5%8F%96%E6%B6%88%E6%81%AF
[获取合并转发内容]: /api/README.md#%E8%8E%B7%E5%8F%96%E5%90%88%E5%B9%B6%E8%BD%AC%E5%8F%91%E5%86%85%E5%AE%B9
[发送合并转发(群)]: /api/README.md#%E5%8F%91%E9%80%81%E5%90%88%E5%B9%B6%E8%BD%AC%E5%8F%91-%E7%BE%A4
[获取中文分词]: /api/README.md#%E8%8E%B7%E5%8F%96%E4%B8%AD%E6%96%87%E5%88%86%E8%AF%8D-%E9%9A%90%E8%97%8Fapi
[图片OCR]: /api/README.md#%E5%9B%BE%E7%89%87ocr-%E9%9A%90%E8%97%8Fapi
[获取群系统消息]: /api/README.md#%E8%8E%B7%E5%8F%96%E7%BE%A4%E7%B3%BB%E7%BB%9F%E6%B6%88%E6%81%AF
[获取群文件系统信息]: /api/README.md#%E8%8E%B7%E5%8F%96%E7%BE%A4%E6%96%87%E4%BB%B6%E7%B3%BB%E7%BB%9F%E4%BF%A1%E6%81%AF
[获取群根目录文件列表]: /api/README.md#%E8%8E%B7%E5%8F%96%E7%BE%A4%E6%A0%B9%E7%9B%AE%E5%BD%95%E6%96%87%E4%BB%B6%E5%88%97%E8%A1%A8
[获取群子目录文件列表]: /api/README.md#%E8%8E%B7%E5%8F%96%E7%BE%A4%E5%AD%90%E7%9B%AE%E5%BD%95%E6%96%87%E4%BB%B6%E5%88%97%E8%A1%A8
[获取群文件资源链接]: /api/README.md#%E8%8E%B7%E5%8F%96%E7%BE%A4%E6%96%87%E4%BB%B6%E8%B5%84%E6%BA%90%E9%93%BE%E6%8E%A5
[获取状态]: /api/README.md#%E8%8E%B7%E5%8F%96%E7%8A%B6%E6%80%81

## 已实现 Event 

##### 符合 OneBot 标准的 Event （部分 Event 比 OneBot 标准多上报几个字段，不影响使用）
| 事件类型 | Event            |
| -------- | ---------------- |
| 消息事件 | [私聊信息]       |
| 消息事件 | [群消息]         |
| 通知事件 | [群文件上传]     |
| 通知事件 | [群管理员变动]   |
| 通知事件 | [群成员减少]     |
| 通知事件 | [群成员增加]     |
| 通知事件 | [群禁言]         |
| 通知事件 | [好友添加]       |
| 通知事件 | [群消息撤回]     |
| 通知事件 | [好友消息撤回]   |
| 通知事件 | [群内戳一戳]     |
| 通知事件 | [群红包运气王提示]   |
| 通知事件 | [群成员荣誉变更提示] |
| 请求事件 | [加好友请求]     |
| 请求事件 | [加群请求/邀请]  |

[私聊信息]: /event/README.md#%E7%A7%81%E8%81%8A%E6%B6%88%E6%81%AF
[群消息]: /event/README.md#%E7%BE%A4%E6%B6%88%E6%81%AF
[群文件上传]: /event/README.md#%E7%BE%A4%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0
[群管理员变动]: /event/README.md#%E7%BE%A4%E7%AE%A1%E7%90%86%E5%91%98%E5%8F%98%E5%8A%A8
[群成员减少]: /event/README.md#%E7%BE%A4%E6%88%90%E5%91%98%E5%87%8F%E5%B0%91
[群成员增加]: /event/README.md#%E7%BE%A4%E6%88%90%E5%91%98%E5%A2%9E%E5%8A%A0
[群禁言]: /event/README.md#%E7%BE%A4%E7%A6%81%E8%A8%80
[好友添加]: /event/README.md#%E5%A5%BD%E5%8F%8B%E6%B7%BB%E5%8A%A0
[群消息撤回]: /event/README.md#%E7%BE%A4%E6%B6%88%E6%81%AF%E6%92%A4%E5%9B%9E
[好友消息撤回]: /event/README.md#%E5%A5%BD%E5%8F%8B%E6%B6%88%E6%81%AF%E6%92%A4%E5%9B%9E
[群内戳一戳]: /event/README.md#%E7%BE%A4%E5%86%85%E6%88%B3%E4%B8%80%E6%88%B3
[群红包运气王提示]: /event/README.md#%E7%BE%A4%E7%BA%A2%E5%8C%85%E8%BF%90%E6%B0%94%E7%8E%8B%E6%8F%90%E7%A4%BA
[群成员荣誉变更提示]: /event/README.md##%E7%BE%A4%E6%88%90%E5%91%98%E8%8D%A3%E8%AA%89%E5%8F%98%E6%9B%B4%E6%8F%90%E7%A4%BA
[加好友请求]: /event/README.md#%E5%8A%A0%E5%A5%BD%E5%8F%8B%E8%AF%B7%E6%B1%82
[加群请求/邀请]: /event/README.md#%E5%8A%A0%E7%BE%A4%E8%AF%B7%E6%B1%82-%E9%82%80%E8%AF%B7

##### 拓展 Event 
| 事件类型 | 拓展 Event       |
| -------- | ---------------- |
| 通知事件 | [好友戳一戳]     |
| 通知事件 | [群成员名片更新] |
| 通知事件 | [接收到离线文件] |

[好友戳一戳]: /event/README.md#%E5%A5%BD%E5%8F%8B%E6%88%B3%E4%B8%80%E6%88%B3
[群成员名片更新]: /event/README.md#%E7%BE%A4%E6%88%90%E5%91%98%E5%90%8D%E7%89%87%E6%9B%B4%E6%96%B0
[接收到离线文件]: /event/README.md#%E6%8E%A5%E6%94%B6%E5%88%B0%E7%A6%BB%E7%BA%BF%E6%96%87%E4%BB%B6
