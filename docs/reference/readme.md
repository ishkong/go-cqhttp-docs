# 参考

## 通信

要使用 go-cqhttp, 用户需要启动 go-cqhttp, 此时 go-cqhttp 模拟 QQ 的客户端与 QQ 服务器进行通讯, 用户可以使用多种方式与 go-cqhttp 进行通信, 然后间接实现 QQ 操作.

| 通信方式         | 描述                                                                                 |
|--------------|------------------------------------------------------------------------------------|
| 正向 HTTP      | 客户端通过 HTTP 的方式向 go-cqhttp 发送请求, 这种通信方式仅用来执行 "主动操作", 例如发送消息, 并不可以实现接收消息             |
| 反向 HTTP      | 客户端作为 HTTP 服务端, go-cqhttp 会主动向客户端发送 HTTP 请求, 这种通信方式用来实现 "被动操作", 例如接收消息, 并不能够实现发送消息 |
| 正向 WebSocket | 服务端会作为 WebSocket 服务端, 客户端连接, 然后与之通信, 由于 WebSocket 是双工的, 所以该方式既可以进行发送消息, 也可以进行接收消息  |
| 反向 WebSocket | 客户端需作为 WebSocket 服务端, go-cqhttp 会连接客户端, 然后与之通信, 通信的数据内容与正向 WebSocket 是一致的          |
关于上述通信方式, 在 go-cqhttp 的配置文件中均能够配置, 例如指定正向 HTTP 方式中, go-cqhttp 监听的地址与端口, 或者指定访问令牌

### 正向 HTTP

使用正向 HTTP 调用 API 时, 只需要向 `/API终结点` 发送请求即可, 传参时, 可以使用 GET 请求, 也可以使用 POST 请求, 关于请求的具体方式, 在文档的 API 部分中详细讲解

> 链接: [go-cqhttp 帮助中心: API](/api)

### 反向 HTTP

使用反向 HTTP 时, go-cqhttp 会将 "上报" 通过 POST 请求的方式主动发送给客户端, 关于请求体的详细内容, 在文档的 Event 部分中有详细讲解

| 请求头 | 描述 |
| --- | --- |
| X-Self-ID| 登陆的 QQ |
| X-Signature | 签名(Optional) |

> 链接: [go-cqhttp 帮助中心: Event](/event)

假设配置指定的上报 URL 为 http://127.0.0.1:8080/, 以私聊消息为例，事件上报的 POST 请求如下:

```http
POST / HTTP/1.1
Host: 127.0.0.1:8080
Content-Type: application/json
X-Self-ID: 10001000

{
    "time": 1515204254,
    "self_id": 10001000,
    "post_type": "message",
    "message_type": "private",
    "sub_type": "friend",
    "message_id": 12,
    "user_id": 12345678,
    "message": "你好～",
    "raw_message": "你好～",
    "font": 456,
    "sender": {
        "nickname": "小不点",
        "sex": "male",
        "age": 18
    }
}

```

### WebSocket

正向 WebSocket 和反向 WebSocket 操作无异, 关于数据格式, 也同样在 API 和 Event 部分有详细讲解

## 鉴权

在通信中, 为了保证安全, go-cqhttp 提供了 Access token 和签名来保证安全性.

### 访问口令

在 HTTP 和 WebSocket 通信中, 用户需要在请求头中加入 "Authorization" 头, 格式如下:

```http
GET /api HTTP/1.1
...
Authorization: Bearer access-token
```

例如, 当你在配置文件中指定 Access token 为 "1114514" 的时候, 那么任何通过 HTTP 和正向 WebSocket 连接到 go-cqhttp 的请求都需要添加这个头

```http
GET /api HTTP/1.1
...
Authorization: Bearer 114514
```

如果是反向 WebSocket, 那么 go-cqhttp 在连接到你的程序时, 也会在请求头中加入对应的访问口令

### 上报签名

如果配置中给定了 `secret` 即签名密钥, 那么在 go-cqhttp 发送上报信息到你的程序时, 都会在请求头中加入对应 HMAC 签名, 即 `X-Signature` 头, 如:

```http
POST / HTTP/1.1
...
X-Signature: sha1=f9ddd4863ace61e64f462d41ca311e3d2c1176e2

```

下面是验证签名的 C# 示例代码

```cs
// HMACSHA1 的初始化
byte[] tokenBin = Encoding.UTF8.GetBytes(secret);    // 获取二进制数据
HMACSHA1 sha1 = new HMACSHA1(tokenBin);              // 初始化 HMACSHA1

// 验证签名与数据是否匹配
private bool Verify(string? signature, byte[] data)
{
    if (signature == null)
        return sha1 == null;
    if (sha1 == null)
        return false;

    if (signature.StartsWith("sha1="))
        signature = signature.Substring(5);

    byte[] hash = sha1.ComputeHash(data);
    string realSignature = string.Join(null, hash.Select(bt => Convert.ToString(bt, 16).PadLeft(2, '0')));
    return signature == realSignature;
}
```


## 上报

上报, 或者叫做 "Event", 是 go-cqhttp 向客户端主动提供数据的方式, 例如当接收到消息, 群聊消息, 或私聊消息, 亦或是其他时间, 例如消息被撤回, 管理员被设置, 群聊精华消息, 好友添加请求, 诸如此类.

需要注意的是, 上报时, 会根据 go-cqhttp 的配置文件, 使用两种上报格式, `array` 或 `string`, 它们表示的实际上是 go-cqhttp 在上报数据时, 对于消息链, 使用的是数组格式, 还是字符串格式, 这个在后面的消息部分中会详细讲解

关于上报的具体说明以及各种上报类型的数据声明, 可以在文档的 Event 部分看到: [go-cqhttp 帮助中心: Event](/event)

### 快速操作

事件上报的后端可以在上报请求的响应中直接指定一些简单的操作，称为「快速操作」，如快速回复、快速禁言等。如果不需要使用这个特性，返回 HTTP 响应状态码 204，或保持响应正文内容为空；如果需要，则使用 JSON 作为响应正文，`Content-Type` 响应头任意（目前不会进行判断），但设置为 `application/json` 最好，以便减少不必要的升级成本，因为如果以后有需求，可能会加入判断。

> **注意**：无论是否需要使用快速操作，事件上报后端都应该在处理完毕后返回 HTTP 响应，否则 OneBot 将一直等待直到超时。

响应的 JSON 数据中，支持的操作随事件的不同而不同，会在事件列表中的「快速操作」标题下给出。需要指出的是，**响应数据中的每个字段都是可选的**，只有在字段存在（明确要求进行操作）时，才会触发相应的操作，否则将保持对机器人整体运行状态影响最小的行为（比如默认不回复消息、不处理请求）。

以私聊消息为例，事件上报后端若返回如下 JSON 作为响应正文：

```json
{
    "reply": "嗨～"
}
```

则会回复 `嗨～`。

如果你使用的是 WebSocket, 那么则需要使用隐藏的 API 来模拟快速操作的响应.

终结点: `.handle_quick_operation`

**参数**

| 字段名 | 数据类型 | 默认值 | 说明 |
| ----- | ------- | ----- | --- |
| `context` | object | - | 事件数据对象，可做精简，如去掉 `message` 等无用字段 |
| `operation` | object | - | 快速操作对象，例如 `{"ban": true, "reply": "请不要说脏话"}` |

::: tip 提示
该 API 无响应数据
:::

## 动作

动作, 英文 "Action" , 或者叫做 "API", 是客户端调用 go-cqhttp 实现一些操作的方式, 例如发送消息, 撤回消息, 同意好友请求等等.

向 go-cqhttp 发送动作的方式在上述的通信部分中已有讲解, 大概是支持这些格式: GET 请求中的 URL 参数, POST 请求中使用 JSON, POST 请求中使用表单, 以及 WebSocket 中使用 JSON.

关于具体如何使用 Action, 在文档的 API 部分可以看到: [go-cqhttp 帮助中心: API](/api)

## 消息

QQ 的消息实际上由一个个的 "部分" 构成, 例如 `@群主 在这良辰佳节, 要不群主女装给大家康康呗` 中首先是 at 群主的一个部分, 然后是一串文本. 我们称这样的消息叫做消息串.

消息串有两种表达方式, 一种是数组格式, 是一个 JSON 数组, 然后消息的每一个部分都是数组的一个元素, 另一种是纯文本格式, 通过特殊的编码将一个消息串存放到一个字符串中, 这种编码叫做 CQ 码.

### 数组格式消息

数组消息的每一个元素, 是各样的格式
```json
{
    "type": "消息类型",
    "data": {
        "数据参数名": "数据参数名"
    }
}
```

组装成数组, 就是这样:
```json
[
    {
        "type": "at",
        "data": {
            "qq": 123456
        }
    },
    {
        "type": "text",
        "data": {
            "text": "早上好啊"
        }
    }
]
```

在文本类型的消息串中, 普通消息是直接被表示出来的, 在 JSON 数组格式的消息串中, 表示一个文本消息内容, 格式如下:
```json
{
    "type": "text",
    "data": {
        "text": "文本值"
    }
}
```

### 字符串格式消息

字符串格式消息也就是使用 CQ 码将每一个消息的特殊内容部分编码为 CQ 码格式, 然后嵌入到字符串中, 例如这样:
```
[CQ:face,id=178]看看我刚拍的照片[CQ:image,file=123.jpg]
```

上面的消息包含: 一个 QQ 表情, 一串文本, 一个图片.

关于 CQ 码的详细介绍, 参阅: [go-cqhttp 帮助中心: CQ 码](/cqcode)

