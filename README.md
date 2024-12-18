<<<<<<< HEAD
# MJ专业绘画中文版-Midjourney AI超强绘画 原生态系统 完美还原官方操作

**中文** 

代理 Midjourney 的 Discord 频道，通过 API 绘图，支持图片、一键换脸。

🦄 对接Midjourney-proxy接口！

⭐ 如果觉得项目不错，请一定帮忙点个 `Star`，万分感谢！

## 演示站

- 演示地址：**https://midjourney.bxmj.top**
- 帐号: **mj-LBdAYTc6XE**    密码：**123456**

## 系统授权

- Q Q咨询：**124628086**
- 微信咨询: **lzgzs168**
---
 <div> 
 <img src="https://gitee.com/ignition-network/gomaxai/raw/master/images/wechat.png" alt="icon"/ height="200" width="200">

## 主要功能
- [x] 支持 Imagine 指令和相关动作 [V1/V2.../U1/U2.../R]
- [x] Imagine 时支持添加图片 base64，作为垫图
- [x] 支持 Blend (图片混合)、Describe (图生文) 指令、Shorten (提示词分析) 指令
- [x] 支持任务实时进度
- [x] 支持中文 prompt 翻译，需配置百度翻译、GPT 翻译
- [x] prompt 敏感词预检测，支持覆盖调整
- [x] user-token 连接 wss，可以获取错误信息和完整功能
- [x] 支持 Shorten(prompt分析) 指令
- [x] 支持焦点移动：Pan ⬅️➡⬆️⬇️
- [x] 支持局部重绘：Vary (Region) 🖌
- [x] 支持所有的关联按钮动作
- [x] 支持图片变焦，自定义变焦 Zoom 🔍
- [x] 支持获取图片的 seed 值
- [x] 支持账号指定生成速度模式 RELAX | FAST | TURBO 
- [x] 支持多账号配置，每个账号可设置对应的任务队列，支持账号选择模式 BestWaitIdle | Random | Weight | Polling
- [x] 账号池持久化，动态维护
- [x] 支持获取账号 /info、/settings 信息
- [x] 账号 settings 设置
- [x] 支持 niji・journey Bot 和 Midjourney Bot
- [x] zlib-stream 安全压缩传输 <https://discord.com/developers/docs/topics/gateway>
- [x] 内嵌MJ管理后台页面，支持多语言 <https://github.com/trueai-org/midjourney-proxy-webui>
- [x] 支持MJ账号的增删改查功能
- [x] 支持MJ账号的详细信息查询和账号同步操作
- [x] 支持MJ账号的并发队列设置
- [x] 支持MJ的账号settings设置
- [x] 支持MJ的任务查询
- [x] 提供功能齐全的绘图测试页面
- [x] 兼容支持市面上主流绘图客户端和 API 调用
- [x] 任务增加父级任务信息等
- [x] 🎛️ Remix 模式和 Remix 模式自动提交
- [x] 内置图片保存到本地、内置 CDN 加速
- [x] 绘图时当未读消息过多时，自动模拟读未读消息
- [x] 图生文之再生图 PicReader、Picread 指令支持，以及批量再生图指令支持（无需 fast 模式）
- [x] 支持 BOOKMARK 等指令
- [x] 支持指定实例绘图，支持过滤指定速度的账号绘图，支持过滤 `remix` 模式账号绘图等，详情参考 Swagger `accountFilter` 字段
- [x] 逆向根据 job id 或 图片生成系统任务信息
- [x] 支持账号排序、并行数、队列数、最大队列数、任务执行间隔等配置
- [x] 支持客户端路径指定模式，默认地址例子 https://{BASE_URL}/mj/submit/imagine, /mj-turbo/mj 是 turbo mode, /mj-relax/mj 是 relax mode, /mj-fast/mj 是 fast mode, /mj 不指定模式
- [x] CloudFlare 手动真人验证，触发后自动锁定账号，通过 GUI 直接验证或通过邮件通知验证
- [x] CloudFlare 自动真人验证，配置验证服务器地址（自动验证器仅支持 Windows 部署）
- [x] 支持工作时间段配置，连续 24 小时不间断绘图可能会触发警告，建议休息 8~10 小时，示例：`09:10-23:55, 13:00-08:10`
- [x] 内置 IP 限流、IP 段限流、黑名单、白名单、自动黑名单等功能
- [x] 单日绘图上限支持，超出上限后不在进行新的绘图任务，仍可以进行变化、重绘等操作
- [x] 开启注册、开启访客
- [x] 可视化配置功能
- [x] 支持 Swagger 文档独立开启
- [x] 配置机器人 Token 可选配置，不配置机器人也可以使用
- [x] 优化指令和状态进度显示
- [x] 摸鱼时间配置，账号增加咸鱼模式/放松模式，避免高频作业（此模式下不可创建新的绘图，仍可以执行其他命令，可以配置为多个时间段等策略）
- [x] 账号垂直分类支持，账号支持词条配置，每个账号只做某一类作品，例如：只做风景、只做人物
- [x] 允许共享频道或子频道绘画，即便账号被封，也可以继续之前的绘画，将被封的账号频道作为正常账号的子频道即可，保存永久邀请链接，和子频道链接，支持批量修改。
- [x] 多数据库支持本地数据库、MongoDB 等，如果你的任务数据超过 10万条，则建议使用 MongoDB 存储任务（默认保留 100万条记录），支持数据自动迁移。
- [x] 支持 `mjplus` 或其他服务一键迁移到本服务，支持迁移账号、任务等
- [x] 内置违禁词管理，支持多词条分组
- [x] Prompt 中非官方链接自动转为官方链接，允许国内或自定义参考链接，以避免触发验证等问题。
- [x] 支持快速模式时长用完时，自动切换到慢速模式，可自定义开启，当购买快速时长或到期续订时将会自动恢复。
- [x] 支持图片存储到阿里云 OSS，支持自定义 CDN，支持自定义样式，支持缩略图（推荐使用 OSS，与源站分离，加载更快）
- [x] 支持 Shorten 分析 Prompt 之再生图指令
- [x] 支持图片换脸，请遵守相关法律法规，不得用于违法用途
- [x] 支持视频换脸，请遵守相关法律法规，不得用于违法用途
- [x] 支持自动切换到慢速模式、支持自动切快速模式、支持自动设置慢速
- [x] 私信 ID 免配置，服务启动时自动获取私信 ID

## 预览截图

> 截图非实时更新，实际请以演示站及最新版本的为准

<h1 align="center">登录界面</h1>
 <img src="https://gitee.com/ignition-network/midjourney-pro/raw/master/images/1.png" alt="icon"/>
<h1 align="center">主界面</h1>
 <img src="https://gitee.com/ignition-network/midjourney-pro/raw/master/images/2.png" alt="icon"/>
<h1 align="center">绘画首页</h1>
 <img src="https://gitee.com/ignition-network/midjourney-pro/raw/master/images/3.png" alt="icon"/>
<h1 align="center">出图界面</h1>
 <img src="https://gitee.com/ignition-network/midjourney-pro/raw/master/images/4.png" alt="icon"/>
<h1 align="center">操作命令</h1>
 <img src="https://gitee.com/ignition-network/midjourney-pro/raw/master/images/5.png" alt="icon"/>
<h1 align="center">参考图</h1>
 <img src="https://gitee.com/ignition-network/midjourney-pro/raw/master/images/6.png" alt="icon"/>
<h1 align="center">局部重绘</h1>
 <img src="https://gitee.com/ignition-network/midjourney-pro/raw/master/images/7.jpg" alt="icon"/>
> 更多界面请查看演示站
