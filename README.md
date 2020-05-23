# weichat-miniApp

微信小程序接入平台设备视频预览，直播，回放（敬请期待）及其示例demo

## 体验开放平台微信小程序视频播放

### 试用设备预览及设备能力体验 

如果你没有开放平台账号或海康/萤石设备，可以初体验我们提供的试用设备

1. 微信搜索“萤石云开放平台”
2. 进入主页后，点击试用设备，在试用设备列表中选择一个设备
3. 点击进入设备播放页，可以立即体验设备实时播放，云台控制、镜像翻转，语音播报，镜头遮蔽等功能（*需要设备能力支持*）

### 设备直播体验

1. 在首页中点击“设备直播”，可以体验试用设备rtmp/flv地址播放

### 播放我账号下的设备
1. 如果你有萤石账号，可以登录[萤石开放平台](http://open.ys7.com) 获取你的[AccessToken](https://open.ys7.com/doc/zh/book/index/user.html)
2. 在小程序中首页点击“试用设备” -> “自助设备”，根据提示填写设备序列号，AccessToken 后点击“完成”，进入你的设备页面
3. 点击“完成”进入设备播放页，可以立即体验设备实时播放，云台控制、镜像翻转，语音播报，镜头遮蔽等功能（*需要设备能力支持*）
4. 你可以通过小程序分享，“分享按钮”等将设备分享给微信社交平台，例如：群组，聊天等。

### 从你开发的小程序跳转到设备播放页，实现免开发视频播放

1. 如果你已有小程序，可以通过微信支持的小程序跳转[wx.navigateToMiniProgram](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/miniprogram-navigate/wx.navigateToMiniProgram.html)直接跳转到设备播放页，免开发实现设备播放
2. 在你的小程序中配置AccessToken,设备信息
3. 跳转示例：
```
wx.navigateToMiniProgram({
  appId: 'wxf2b3a0262975d8c2',
  path: 'pages/live/live?accessToken=' + accessToken + '&deviceSerial='+deviceSerial+'&channelNo=' + channelNo,
  success(res) {
    // 打开成功
  }
})
```
### 需要自己开发实现小程序
+ [根据微信实时音视频接入文档](https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html)，你的小程序需要通过类目审核。

+ 我们开放了官方小程序代码，详见demo目录，包括了实时视频预览，云台控制，直播，镜像翻转，语音播报等功能实现，可供开发参考。

### 获取你的设备的二维码（敬请期待）
1. *你可以在官网设备列表，查看每个设备对应的小程序二维码（敬请期待*
2. *我们提供了接口，根据AccessToken，设备信息动态获取二维码（敬请期待）*
