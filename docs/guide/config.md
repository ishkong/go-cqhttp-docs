# 配置

go-cqhttp 包含 `config.yml` 和 `device.json` 两个配置文件, 其中 `config.yml` 为运行配置 `device.json` 为虚拟设备信息。

## 从原CQHTTP导入配置

go-cqhttp 支持导入CQHTTP的配置文件, 具体步骤为: 

1. 找到CQHTTP原配置文件 `{CQ工作目录}/app/io.github.richardchien.coolqhttpapi/config/{qq号}.json`
2. 将文件复制到go-cqhttp根目录并重命名为 `cqhttp.json`
3. 重启go-cqhttp后将自动导入配置

## 配置信息

默认生成的配置文件如下所示: 

```yaml
# go-cqhttp 默认配置文件

account: # 账号相关
  uin: 1233456 # QQ账号
  password: '' # 密码为空时使用扫码登录
  encrypt: false  # 是否开启密码加密
  status: 0      # 在线状态 请参考 https://github.com/Mrs4s/go-cqhttp/blob/dev/docs/config.md#在线状态
  relogin: # 重连设置
    delay: 3   # 首次重连延迟, 单位秒
    interval: 3   # 重连间隔
    max-times: 0  # 最大重连次数, 0为无限制

  # 是否使用服务器下发的新地址进行重连
  # 注意, 此设置可能导致在海外服务器上连接情况更差
  use-sso-address: true

heartbeat:
  # 心跳频率, 单位秒
  # -1 为关闭心跳
  interval: 5

message:
  # 上报数据类型
  # 可选: string,array
  post-format: string
  # 是否忽略无效的CQ码, 如果为假将原样发送
  ignore-invalid-cqcode: false
  # 是否强制分片发送消息
  # 分片发送将会带来更快的速度
  # 但是兼容性会有些问题
  force-fragment: false
  # 是否将url分片发送
  fix-url: false
  # 下载图片等请求网络代理
  proxy-rewrite: ''
  # 是否上报自身消息
  report-self-message: false
  # 移除服务端的Reply附带的At
  remove-reply-at: false
  # 为Reply附加更多信息
  extra-reply-data: false

output:
  # 日志等级 trace,debug,info,warn,error
  log-level: warn
  # 是否启用 DEBUG
  debug: false # 开启调试模式

# 默认中间件锚点
default-middlewares: &default
  # 访问密钥, 强烈推荐在公网的服务器设置
  access-token: ''
  # 事件过滤器文件目录
  filter: ''
  # API限速设置
  # 该设置为全局生效
  # 原 cqhttp 虽然启用了 rate_limit 后缀, 但是基本没插件适配
  # 目前该限速设置为令牌桶算法, 请参考:
  # https://baike.baidu.com/item/%E4%BB%A4%E7%89%8C%E6%A1%B6%E7%AE%97%E6%B3%95/6597000?fr=aladdin
  rate-limit:
    enabled: false # 是否启用限速
    frequency: 1  # 令牌回复频率, 单位秒
    bucket: 1     # 令牌桶大小

database: # 数据库相关设置
  leveldb:
    # 是否启用内置leveldb数据库
    # 启用将会增加10-20MB的内存占用和一定的磁盘空间
    # 关闭将无法使用 撤回 回复 get_msg 等上下文相关功能
    enable: true

# 连接服务列表
servers:
  # 添加方式，同一连接方式可添加多个，具体配置说明请查看文档
  #- http: # http 通信
  #- ws:   # 正向 Websocket
  #- ws-reverse: # 反向 Websocket
  #- pprof: #性能分析服务器
```

## 在线状态

| 状态 | 值 |
| -----|----|
| 在线  |  0 |
| 离开 | 1 |
| 隐身 | 2 |
| 忙 | 3 |
| 听歌中 | 4 |
| 星座运势 | 5 |
| 今日天气 | 6 |
| 遇见春天 | 7 |
| Timi中 | 8 |
| 吃鸡中 | 9 |
| 恋爱中 | 10 |
| 汪汪汪 | 11 |
| 干饭中 | 12 |
| 学习中 | 13 |
| 熬夜中 | 14 |
| 打球中 | 15 |
| 信号弱 | 16 |
| 在线学习 | 17 |
| 游戏中 | 18 |
| 度假中 | 19 |
| 追剧中 | 20 |
| 健身中 | 21 |

::: tip 提示
开启密码加密后程序将在每次启动时要求输入解密密钥, 密钥错误会导致登录时提示密码错误.

解密后密码将储存在内存中, 用于自动重连等功能. 所以此加密并不能防止内存读取.

解密密钥在使用完成后并不会留存在内存中, 所以可用相对简单的字符串作为密钥

分片发送为原酷Q发送长消息的老方案, 发送速度更优/兼容性更好, 但在有发言频率限制的群里, 可能无法发送。关闭后将优先使用新方案, 能发送更长的消息, 但发送速度更慢, 在部分老客户端将无法解析.
:::

::: warning 注意
关闭心跳服务可能引起断线, 请谨慎关闭
:::

## 设备信息

默认生成的设备信息如下所示: 

```json5
{
  "protocol": 0,
  "display": "xxx",
  "product": "xxx",
  "device": "xxx",
  "board": "xxx",
  "model": "xxx",
  "finger_print": "xxx",
  "boot_id": "xxx",
  "proc_version": "xxx",
  "imei": "xxx",
  "brand": "xxx",
  "bootloader": "xxx",
  "base_band": "",
  "version": {
    "incremental": "xxx",
    "release": "xxx",
    "codename": "xxx",
    "sdk": 0 // 随机
  },
  "sim_info": "xxx",
  "os_type": "xxx",
  "mac_address": "xxx",
  "ip_address": [
    // ...
  ],
  "wifi_bssid": "xxx",
  "wifi_ssid": "xxx",
  "imsi_md5": "xxx",
  "android_id": "xxx",
  "apn": "xxx",
  "vendor_name": "xxx",
  "vendor_os_name": "xxx"
}
```

在大部分情况下 我们只需要关心 `protocol` 字段: 

| 值  | 类型          | 限制                                                             |
| --- | ------------- | ---------------------------------------------------------------- |
| 0   | iPad          | 无                                                               |
| 1   | Android Phone | 无                                                               |
| 2   | Android Watch | 无法接收 `notify` 事件、无法接收口令红包、无法接收撤回消息            |
| 3   | MacOS         | 无                                                               |

::: warning 注意
根据协议的不同, 各类消息有所限制
:::

## 自定义服务器IP

::: tip 提示
某些海外服务器使用默认地址可能会存在链路问题, 此功能可以指定 go-cqhttp 连接哪些地址以达到最优化.
:::

将文件 `address.txt` 创建到 `go-cqhttp` 工作目录, 并键入 `IP:PORT` 以换行符为分割即可.

示例:
```
1.1.1.1:53
1.1.2.2:8899
```

