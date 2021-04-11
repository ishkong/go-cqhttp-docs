# CQcode

## QQ 表情

Type: `face`

```json
{
    "type": "face",
    "data": {
        "id": "123"
    }
}
```

```
[CQ:face,id=123]
```

参数 : 

| 参数名 | 收 | 发 | 可能的值 | 说明 |
| --- | --- | --- | --- | --- |
| `id` | ✓ | ✓ | 见 [QQ 表情 ID 表](https://github.com/richardchien/coolq-http-api/wiki/%E8%A1%A8%E6%83%85-CQ-%E7%A0%81-ID-%E8%A1%A8) | QQ 表情 ID |

## 语音

```json
{
    "type": "record",
    "data": {
        "file": "http://baidu.com/1.mp3"
    }
}
```

```
[CQ:record,file=http://baidu.com/1.mp3]
```

| 参数名 | 收 | 发 | 可能的值 | 说明 |
| --- | --- | --- | --- | --- |
| `file` | ✓ | ✓<sup>[1]</sup> | - | 语音文件名 |
| `magic` | ✓ | ✓ | `0` `1` | 发送时可选, 默认 `0`, 设置为 `1` 表示变声 |
| `url` | ✓ |  | - | 语音 URL |
| `cache` |  | ✓ | `0` `1` | 只在通过网络 URL 发送时有效, 表示是否使用已缓存的文件, 默认 `1` |
| `proxy` |  | ✓ | `0` `1` | 只在通过网络 URL 发送时有效, 表示是否通过代理下载文件 ( 需通过环境变量或配置文件配置代理 ) , 默认 `1` |
| `timeout` |  | ✓ | - | 只在通过网络 URL 发送时有效, 单位秒, 表示下载网络文件的超时时间 , 默认不超时|

[1] 发送时, `file` 参数除了支持使用收到的语音文件名直接发送外, 还支持其它形式, 参考 [图片](#图片)。

## 短视频

::: warning 注意
go-cqhttp-v0.9.38 起开始支持发送，需要依赖ffmpeg
:::

```json
{
    "type": "video",
    "data": {
        "file": "http://baidu.com/1.mp4"
    }
}
```

```
[CQ:video,file=http://baidu.com/1.mp4]
```

| 参数名   | 类型    | 可能的值 | 说明                                                       |
| ------- | ------ | ------ | ---------------------------------------------------------- |
| `file`  | string | -      | 视频地址, 支持http和file发送                                  |
| `cover` | string | -      | 视频封面, 支持http, file和base64发送, 格式必须为jpg             |
| `c`     | int    | `2` `3`| 通过网络下载视频时的线程数, 默认单线程. (在资源不支持并发时会自动处理) |

## @某人

```json
{
    "type": "at",
    "data": {
        "qq": "10001000",
        "name": "此栏无效，此人在群里"
    }
}
```

```
[CQ:at,qq=10001000]
[CQ:at,qq=123,name=不在群的QQ]
```

| 参数名 | 收 | 发 | 可能的值 | 说明 |
| --- | --- | --- | --- | --- |
| `qq` | ✓ | ✓ | QQ 号、`all` | @的 QQ 号, `all` 表示全体成员 |
| `name` | | ✓ | 字符串 | 当在群中找不到此QQ号的名称时才会生效 |

## 猜拳魔法表情

::: warning 注意
该 CQcode 暂未被 go-cqhttp 支持, 您可以提交 pr 以使该 CQcode 被支持
[提交 pr](https://github.com/Mrs4s/go-cqhttp/compare)
:::

```json
{
    "type": "rps",
    "data": {}
}
```

```
[CQ:rps]
```

## 掷骰子魔法表情

::: warning 注意
该 CQcode 暂未被 go-cqhttp 支持, 您可以提交 pr 以使该 CQcode 被支持
[提交 pr](https://github.com/Mrs4s/go-cqhttp/compare)
:::

```json
{
    "type": "dice",
    "data": {}
}
```

```
[CQ:dice]
```

## 窗口抖动（戳一戳） <Badge text="发"/>

::: warning 注意
该 CQcode 暂未被 go-cqhttp 支持, 您可以提交 pr 以使该 CQcode 被支持
[提交 pr](https://github.com/Mrs4s/go-cqhttp/compare)
:::

::: tip 提示
相当于戳一戳最基本类型的快捷方式
:::

```json
{
    "type": "shake",
    "data": {}
}
```

```
[CQ:shake]
```

## 匿名发消息 <Badge text="发"/>

::: warning 注意
该 CQcode 暂未被 go-cqhttp 支持, 您可以提交 pr 以使该 CQcode 被支持
[提交 pr](https://github.com/Mrs4s/go-cqhttp/compare)
:::

::: tip 提示
当收到匿名消息时, 需要通过 [消息事件的群消息](../event/message.md#群消息) 的 `anonymous` 字段判断
:::

```json
{
    "type": "anonymous",
    "data": {}
}
```

```
[CQ:anonymous]
```

| 参数名 | 收 | 发 | 可能的值 | 说明 |
| --- | --- | --- | --- | --- |
| `ignore` |  | ✓ | `0` `1` | 可选, 表示无法匿名时是否继续发送 |

## 链接分享

```json
{
    "type": "share",
    "data": {
        "url": "http://baidu.com",
        "title": "百度"
    }
}
```

```
[CQ:share,url=http://baidu.com,title=百度]
```

| 参数名 | 收 | 发 | 可能的值 | 说明 |
| --- | --- | --- | --- | --- |
| `url` | ✓ | ✓ | - | URL |
| `title` | ✓ | ✓ | - | 标题 |
| `content` | ✓ | ✓ | - | 发送时可选, 内容描述 |
| `image` | ✓ | ✓ | - | 发送时可选, 图片 URL |

## 推荐好友/群

::: warning 注意
该 CQcode 暂未被 go-cqhttp 支持, 您可以提交 pr 以使该 CQcode 被支持
[提交 pr](https://github.com/Mrs4s/go-cqhttp/compare)
:::

```
[CQ:contact,type=qq,id=10001000]
[CQ:contact,type=group,id=100100]
```

| 参数名 | 收 | 发 | 可能的值 | 说明 |
| --- | --- | --- | --- | --- |
| `type` | ✓ | ✓ | `qq`/`group` | 推荐好友/群 |
| `id` | ✓ | ✓ | - | 被推荐的 QQ （群）号 |

## 位置

::: warning 注意
该 CQcode 暂未被 go-cqhttp 支持, 您可以提交 pr 以使该 CQcode 被支持
[提交 pr](https://github.com/Mrs4s/go-cqhttp/compare)
:::

```json
{
    "type": "location",
    "data": {
        "lat": "39.8969426",
        "lon": "116.3109099"
    }
}
```

```
[CQ:location,lat=39.8969426,lon=116.3109099]
```

| 参数名 | 收 | 发 | 可能的值 | 说明 |
| --- | --- | --- | --- | --- |
| `lat` | ✓ | ✓ | - | 纬度 |
| `lon` | ✓ | ✓ | - | 经度 |
| `title` | ✓ | ✓ | - | 发送时可选, 标题 |
| `content` | ✓ | ✓ | - | 发送时可选, 内容描述 |

## 音乐分享 <Badge text="发"/>

```json
{
    "type": "music",
    "data": {
        "type": "163",
        "id": "28949129"
    }
}
```

```
[CQ:music,type=163,id=28949129]
```

| 参数名 | 收 | 发 | 可能的值 | 说明 |
| --- | --- | --- | --- | --- |
| `type` |  | ✓ | `qq` `163` `xm` | 分别表示使用 QQ 音乐、网易云音乐、虾米音乐 |
| `id` |  | ✓ | - | 歌曲 ID |

## 音乐自定义分享 <Badge text="发"/>

```json
{
    "type": "music",
    "data": {
        "type": "custom",
        "url": "http://baidu.com",
        "audio": "http://baidu.com/1.mp3",
        "title": "音乐标题"
    }
}
```

```
[CQ:music,type=custom,url=http://baidu.com,audio=http://baidu.com/1.mp3,title=音乐标题]
```

| 参数名 | 收 | 发 | 可能的值 | 说明 |
| --- | --- | --- | --- | --- |
| `type` |  | ✓ | `custom` | 表示音乐自定义分享 |
| `url` |  | ✓ | - | 点击后跳转目标 URL |
| `audio` |  | ✓ | - | 音乐 URL |
| `title` |  | ✓ | - | 标题 |
| `content` |  | ✓ | - | 发送时可选, 内容描述 |
| `image` |  | ✓ | - | 发送时可选, 图片 URL |

## 图片

Type : `image`

范围: **发送/接收**

参数:

| 参数名   | 可能的值         | 说明                                                            |
| ------- | --------------- | --------------------------------------------------------------- |
| `file`  | -               | 图片文件名                                                      |
| `type`  | `flash`, `show` | 图片类型, `flash` 表示闪照, `show` 表示秀图, 默认普通图片       |
| `url`   | -               | 图片 URL                                                        |
| `cache` | `0` `1`         | 只在通过网络 URL 发送时有效, 表示是否使用已缓存的文件, 默认 `1` |
| `id`    | -               | 发送秀图时的特效id, 默认为40000                                 |
| `c`     | `2` `3`         | 通过网络下载图片时的线程数, 默认单线程. (在资源不支持并发时会自动处理)|

可用的特效ID:

| id    | 类型 |
| ----- | ---- |
| 40000 | 普通 |
| 40001 | 幻影 |
| 40002 | 抖动 |
| 40003 | 生日 |
| 40004 | 爱你 |
| 40005 | 征友 |

示例: `[CQ:image,file=http://baidu.com/1.jpg,type=show,id=40004]`

::: warning 注意
图片最大不能超过30MB

PNG格式不会被压缩, JPG可能不会二次压缩, GIF非动图转成PNG

GIF动图原样发送(总帧数最大300张, 超过无法发出, 无论循不循环)
:::

## 回复

Type : `reply`

::: tip 提示
如果 `id` 和 `text` 同时存在, 将采用自定义reply并替换原有信息
如果 `id` 获取失败, 将回退到自定义reply
:::

范围: **发送/接收**

参数:

| 参数名 | 类型 | 说明                                  |
| ------ | ---- | ------------------------------------- |
| `id`   | int  | 回复时所引用的消息id, 必须为本群消息. |
| `text`   | string  | 自定义回复的信息 |
| `qq`   | int64  | 自定义回复时的自定义QQ, 如果使用自定义信息必须指定. |
| `time`   | int64  | 自定义回复时的时间, 格式为Unix时间 |
| `seq` | int64  | 起始消息序号, 可通过 `get_msg` 获得 |



示例: `[CQ:reply,id=123456]` 
\
自定义回复示例: `[CQ:reply,text=Hello World,qq=10086,time=3376656000,seq=5123]`

## 红包 <Badge text="收"/>

Type: `redbag`

参数:

| 参数名  | 类型   | 说明        |
| ------- | ------ | ----------- |
| `title` | string | 祝福语/口令 |

示例: `[CQ:redbag,title=恭喜发财]`

## 戳一戳 <Badge text="发"/>

::: warning 注意
发送戳一戳消息无法撤回, 返回的 `message id`  恒定为 `0`
:::

Type: `poke`

范围: **仅群聊**

参数:

| 参数名 | 类型  | 说明         |
| ------ | ----- | ------------ |
| `qq`   | int64 | 需要戳的成员 |

示例: `[CQ:poke,qq=123456]`

## 礼物 <Badge text="发"/>

::: warning 注意

仅支持免费礼物, 发送群礼物消息 无法撤回, 返回的 `message id`  恒定为 `0`

:::

Type: `gift`

范围: **仅群聊,接收的时候不是 CQ 码**

参数 :

| 参数名 | 类型  | 说明           |
| ------ | ----- | -------------- |
| `qq`   | int64 | 接收礼物的成员 |
| `id`   | int   | 礼物的类型     |

目前支持的礼物 ID :

| id   | 类型       |
| ---- | ---------- |
| 0    | 甜 Wink    |
| 1    | 快乐肥宅水 |
| 2    | 幸运手链   |
| 3    | 卡布奇诺   |
| 4    | 猫咪手表   |
| 5    | 绒绒手套   |
| 6    | 彩虹糖果   |
| 7    | 坚强       |
| 8    | 告白话筒   |
| 9    | 牵你的手   |
| 10   | 可爱猫咪   |
| 11   | 神秘面具   |
| 12   | 我超忙的   |
| 13   | 爱心口罩   |

示例: `[CQ:gift,qq=123456,id=8]`

## 合并转发 <Badge text="收"/>

Type: `forward`

参数:

| 参数名 | 类型   | 说明                                                         |
| ------ | ------ | ------------------------------------------------------------ |
| `id`   | string | 合并转发ID, 需要通过 `/get_forward_msg` API获取转发的具体内容 |

示例: `[CQ:forward,id=xxxx]`

## 合并转发消息节点 <Badge text="发"/>

Type: `node`

参数:

| 参数名    | 类型    | 说明           | 特殊说明                                                     |
| --------- | ------- | -------------- | ------------------------------------------------------------ |
| `id`      | int32   | 转发消息id     | 直接引用他人的消息合并转发,  实际查看顺序为原消息发送顺序 **与下面的自定义消息二选一** |
| `name`    | string  | 发送者显示名字 | 用于自定义消息 (自定义消息并合并转发, 实际查看顺序为自定义消息段顺序) |
| `uin`     | int64   | 发送者QQ号     | 用于自定义消息                                               |
| `content` | message | 具体消息       | 用于自定义消息 **不支持转发套娃**            |
| `seq`     | message | 具体消息       | 用于自定义消息                                                                         |

特殊说明: **需要使用单独的API `/send_group_forward_msg` 发送, 并且由于消息段较为复杂, 仅支持Array形式入参。 如果引用消息和自定义消息同时出现, 实际查看顺序将取消息段顺序.  另外按 [CQHTTP](https://git.io/JtxtN) 文档说明, `data` 应全为字符串, 但由于需要接收`message` 类型的消息, 所以 *仅限此Type的content字段* 支持Array套娃**

示例:

直接引用消息合并转发:

````json
[
    {
        "type": "node",
        "data": {
            "id": "123"
        }
    },
    {
        "type": "node",
        "data": {
            "id": "456"
        }
    }
]
````

自定义消息合并转发:

````json
[
    {
        "type": "node",
        "data": {
            "name": "消息发送者A",
            "uin": "10086",
            "content": [
                {
                    "type": "text",
                    "data": {"text": "测试消息1"}
                }
            ]
        }
    },
    {
        "type": "node",
        "data": {
            "name": "消息发送者B",
            "uin": "10087",
            "content": "[CQ:image,file=xxxxx]测试消息2"
        }
    }
]
````

引用自定义混合合并转发:

````json
[
    {
        "type": "node",
        "data": {
            "name": "自定义发送者",
            "uin": "10086",
            "content": "我是自定义消息",
            "time": "3376656000"
        }
    },
    {
        "type": "node",
        "data": {
            "id": "123"
        }
    }
]
````

## XML 消息

Type: `xml`

范围: **发送 / 接收**

参数:

| 参数名  | 类型   | 说明                                      |
| ------- | ------ | ----------------------------------------- |
| `data`  | string | xml内容, xml中的value部分, 记得实体化处理 |
| `resid` | int32  | 可以不填                                  |

示例: `[CQ:xml,data=xxxx]`

#### 一些 xml 样例

#### ps:重要 : xml 中的 value 部分, 记得 html 实体化处理后, 再打加入到 CQ 码中

#### QQ 音乐

```xml
<?xml version='1.0' encoding='UTF-8' standalone='yes' ?><msg serviceID="2" templateID="1" action="web" brief="&#91;分享&#93; 十年" sourceMsgId="0" url="https://i.y.qq.com/v8/playsong.html?_wv=1&amp;songid=4830342&amp;souce=qqshare&amp;source=qqshare&amp;ADTAG=qqshare" flag="0" adverSign="0" multiMsgFlag="0" ><item layout="2"><audio cover="http://imgcache.qq.com/music/photo/album_500/26/500_albumpic_89526_0.jpg" src="http://ws.stream.qqmusic.qq.com/C400003mAan70zUy5O.m4a?guid=1535153710&amp;vkey=D5315B8C0603653592AD4879A8A3742177F59D582A7A86546E24DD7F282C3ACF81526C76E293E57EA1E42CF19881C561275D919233333ADE&amp;uin=&amp;fromtag=3" /><title>十年</title><summary>陈奕迅</summary></item><source name="QQ音乐" icon="https://i.gtimg.cn/open/app_icon/01/07/98/56/1101079856_100_m.png" url="http://web.p.qq.com/qqmpmobile/aio/app.html?id=1101079856" action="app"  a_actionData="com.tencent.qqmusic" i_actionData="tencent1101079856://" appid="1101079856" /></msg>
```
#### 网易音乐
```xml
<?xml version='1.0' encoding='UTF-8' standalone='yes' ?><msg serviceID="2" templateID="1" action="web" brief="&#91;分享&#93; 十年" sourceMsgId="0" url="http://music.163.com/m/song/409650368" flag="0" adverSign="0" multiMsgFlag="0" ><item layout="2"><audio cover="http://p2.music.126.net/g-Qgb9ibk9Wp_0HWra0xQQ==/16636710440565853.jpg?param=90y90" src="https://music.163.com/song/media/outer/url?id=409650368.mp3" /><title>十年</title><summary>黄梦之</summary></item><source name="网易云音乐" icon="https://pic.rmb.bdstatic.com/911423bee2bef937975b29b265d737b3.png" url="http://web.p.qq.com/qqmpmobile/aio/app.html?id=1101079856" action="app" a_actionData="com.netease.cloudmusic" i_actionData="tencent100495085://" appid="100495085" /></msg>
```

#### 卡片消息 1
```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<msg serviceID="1">
<item><title>生死8秒！女司机高速急刹, 他一个操作救下一车性命</title></item>
<source name="官方认证消息" icon="https://qzs.qq.com/ac/qzone_v5/client/auth_icon.png" action="" appid="-1" />
</msg>
```

#### 卡片消息 2
```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<msg serviceID="1">
<item layout="4">
<title>test title</title>
<picture cover="http://url.cn/5CEwIUy"/>
</item>
</msg>
```

## JSON 消息

Type: `json`

范围: **发送/接收**

参数:

| 参数名  | 类型   | 说明                                            |
| ------- | ------ | ----------------------------------------------- |
| `data`  | string | json内容, json的所有字符串记得实体化处理        |
| `resid` | int32  | 默认不填为0, 走小程序通道, 填了走富文本通道发送 |

json中的字符串需要进行转义 : 

>","=> `&#44;`

>"&"=> `&amp;`

>"["=> `&#91;`

>"]"=> `&#93;`

否则无法正确得到解析

示例 json 的 CQ 码 : 
```test
[CQ:json,data={"app":"com.tencent.miniapp"&#44;"desc":""&#44;"view":"notification"&#44;"ver":"0.0.0.1"&#44;"prompt":"&#91;应用&#93;"&#44;"appID":""&#44;"sourceName":""&#44;"actionData":""&#44;"actionData_A":""&#44;"sourceUrl":""&#44;"meta":{"notification":{"appInfo":{"appName":"全国疫情数据统计"&#44;"appType":4&#44;"appid":1109659848&#44;"iconUrl":"http:\/\/gchat.qpic.cn\/gchatpic_new\/719328335\/-2010394141-6383A777BEB79B70B31CE250142D740F\/0"}&#44;"data":&#91;{"title":"确诊"&#44;"value":"80932"}&#44;{"title":"今日确诊"&#44;"value":"28"}&#44;{"title":"疑似"&#44;"value":"72"}&#44;{"title":"今日疑似"&#44;"value":"5"}&#44;{"title":"治愈"&#44;"value":"60197"}&#44;{"title":"今日治愈"&#44;"value":"1513"}&#44;{"title":"死亡"&#44;"value":"3140"}&#44;{"title":"今**亡"&#44;"value":"17"}&#93;&#44;"title":"中国加油, 武汉加油"&#44;"button":&#91;{"name":"病毒 : SARS-CoV-2, 其导致疾病命名 COVID-19"&#44;"action":""}&#44;{"name":"传染源 : 新冠肺炎的患者。无症状感染者也可能成为传染源。"&#44;"action":""}&#93;&#44;"emphasis_keyword":""}}&#44;"text":""&#44;"sourceAd":""}]
```


## cardimage <Badge text="发"/>
一种xml的图片消息（装逼大图）

::: tip PS
xml 接口的消息都存在风控风险, 请自行兼容发送失败后的处理 ( 可以失败后走普通图片模式 ) 
:::

Type: `cardimage`

参数:

| 参数名      | 类型   | 说明                                  |
| ----------- | ------ | ------------------------------------- |
| `file`      | string | 和image的file字段对齐, 支持也是一样的 |
| `minwidth`  | int64  | 默认不填为400, 最小width              |
| `minheight` | int64  | 默认不填为400, 最小height             |
| `maxwidth`  | int64  | 默认不填为500, 最大width              |
| `maxheight` | int64  | 默认不填为1000, 最大height            |
| `source`    | string | 分享来源的名称, 可以留空              |
| `icon`      | string | 分享来源的icon图标url, 可以留空       |


示例cardimage 的cq码 : 
```test
[CQ:cardimage,file=https://i.pixiv.cat/img-master/img/2020/03/25/00/00/08/80334602_p0_master1200.jpg]
```

## 文本转语音 <Badge text="发"/>

::: warning 注意
通过TX的TTS接口, 采用的音源与登录账号的性别有关
:::

Type: `tts`

范围: **仅群聊**

参数:

| 参数名 | 类型   | 说明 |
| ------ | ------ | ---- |
| `text` | string | 内容 |

示例: `[CQ:tts,text=这是一条测试消息]`
