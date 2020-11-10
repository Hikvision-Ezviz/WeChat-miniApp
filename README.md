# weichat-miniApp


+ ### 试用设备预览及设备能力体验 

  如果你没有开放平台账号或海康/萤石设备，可以体验我们提供的试用设备

1. 微信搜索“萤石云开放平台”
2. 进入主页后，点击试用设备，在试用设备列表中选择一个设备
3. 点击进入设备播放页，可以立即体验设备实时播放，云台控制、镜像翻转，语音播报，镜头遮蔽等功能（*需要设备能力支持*）

+ ### 设备直播体验

1. 在首页中点击“设备直播”，可以体验试用设备rtmp/flv地址播放

- ### 设备回放体验

1. 在首页中点击"设备回放"，可以体验试用设备rtmp地址回放

+ ### 播放我账号下的设备
1. 如果你有萤石账号，可以登录[萤石开放平台](http://open.ys7.com) 获取你的[AccessToken](https://open.ys7.com/doc/zh/book/index/user.html)
2. 在小程序中首页点击“试用设备” -> “自助设备”，根据提示填写设备序列号，AccessToken 后点击“完成”，进入你的设备页面
3. 点击“完成”进入设备播放页，可以立即体验设备实时播放，云台控制、镜像翻转，语音播报，镜头遮蔽等功能（*需要设备能力支持*）
4. 你可以通过小程序分享，“分享按钮”等将设备分享给微信社交平台，例如：群组，聊天等。

+ ### 从我的小程序跳转到设备播放页，免开发实现视频播放

1. 如果你已有小程序，可以通过微信支持的小程序跳转[wx.navigateToMiniProgram](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/miniprogram-navigate/wx.navigateToMiniProgram.html)直接跳转到设备播放页，免开发实现设备播放
2. 在你的小程序中配置AccessToken,设备信息
3. 跳转示例：
```javascript
wx.navigateToMiniProgram({
  appId: 'wxf2b3a0262975d8c2',
  path: 'pages/live/live?accessToken=' + accessToken + '&deviceSerial='+deviceSerial+'&channelNo=' + channelNo,
  success(res) {
    // 打开成功
  }
})
```
+ ### 从我的小程序跳转到设备回放页，免开发实现视频回放

1. 如果你已有小程序，可以通过微信支持的小程序跳转[wx.navigateToMiniProgram](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/miniprogram-navigate/wx.navigateToMiniProgram.html)直接跳转到设备回放页，免开发实现设备回放

2. 在你的小程序中配置AccessToken,设备信息

3. 跳转示例：

   ```javascript
   wx.navigateToMiniProgram({
     appId: 'wxf2b3a0262975d8c2',
     path: 'pages/playback/playback?accessToken=' + accessToken + '&deviceSerial='+ deviceSerial + '&channelNo=' + channelNo',
     success(res) {
       // 打开成功
     }
   })
   ```

+ ### 需要开发小程序

1. [根据微信实时音视频接入文档](https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html)，你的小程序需要通过类目审核。

2. 我们开放了官方小程序代码，详见demo目录，包括了实时视频预览，云台控制，直播，镜像翻转，语音播报等功能实现，可供开发参考。

+ ### 获取你的设备的二维码
1. 你可以在官网设备列表，查看每个设备对应的小程序二维码。

2. 我们还提供了接口，根据AccessToken，设备信息动态获取二维码。

3. 接口说明

   - 请求地址

     ```
     https://open.ys7.com/device/getWxaCode
     ```

   - 请求方式

     POST

   - 请求参数

     | 参数名          | 类型   | 描述                                                         | 是否必选 |
     | --------------- | ------ | ------------------------------------------------------------ | -------- |
     | wxa_accessToken | String | 访问令牌，获取你的[AccessToken](https://open.ys7.com/doc/zh/book/index/user.html) | Y        |
     | deviceSerial    | String | 设备序列号                                                   | Y        |
     | channelNo       | String | 通道号                                                       | Y        |

   - HTTP请求报文

     ```http
     POST /device/getWxaCode HTTP/1.1
     Host: open.ys7.com
     Content-Type: application/x-www-form-urlencoded
     
     wxa_accessToken=at.cfer88us2ikvps4gbvcvu56m7tzh6akq-9ny77vbref-1l5v45t-h27sypovf&channelNo=1&deviceSerial=203751922
     ```

   - 返回数据

     ```json
     {
       data: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAEBAQEBAQEBAQEBAQ……"
       msg: "成功"
       retcode: 0
     }
     ```
     
     [^注]: 返回字段data为base64二进制数据，可通过<img src='data:image/png;base64,'+ res.data  /> 生成图片。

- ### 获取设备回放rtmp地址

1. 我们提供接口获取设备回放rtmp地址。依赖[根据时间获取存储文件信息](https://open.ys7.com/doc/zh/book/index/device_select.html#device_select-api9)接口(https://open.ys7.com/api/lapp/video/by/time)返回字段startTime，endTime，获取回放时间片段。

2. 获取rtmp回放地址接口说明：

   - 请求地址

     ```
     https://open.ys7.com/api/lapp/v2/live/address/get
     ```

     [^注]: 需配置request域名白名单: https://open.ys7.com

   - 请求方式

     POST

   - 请求参数

     | 参数名       | 类型   | 示例                | 描述                                                         | 是否必选 |
     | ------------ | ------ | ------------------- | ------------------------------------------------------------ | -------- |
     | accessToken  | String |                     | 访问令牌，获取你的[AccessToken](https://open.ys7.com/doc/zh/book/index/user.html) | Y        |
     | deviceSerial | String | 203751922           | 设备序列号                                                   | Y        |
     | channelNo    | String | 1                   | 通道号                                                       | Y        |
     | protocol     | String | 3                   | 流播放协议，3-rtmp                                           | Y        |
     | type         | String | 2                   | rtmp协议地址类型，2-本地录像回放，3-云存储录像回放           | Y        |
     | startTime    | String | 2020-11-16 11:01:05 | 起始时间，[根据时间获取存储文件信息](https://open.ys7.com/doc/zh/book/index/device_select.html#device_select-api9)接口返回startTime字段 | Y        |
     | stopTime     | String | 2020-11-16 11:02:23 | 结束时间，[根据时间获取存储文件信息](https://open.ys7.com/doc/zh/book/index/device_select.html#device_select-api9)接口返回endTime字段 | Y        |
     | expireTime   | String | 86400               | 过期时间                                                     | N        |

   - HTTP请求报文

     ```http
     POST /api/lapp/v2/live/address/get HTTP/1.1
     Host: open.ys7.com
     Content-Type: application/x-www-form-urlencoded
     
     accessToken=at.cv704ono8vggs59c14mtre0u3q05q6fe-8dva1ulk3s-0fzbv4p-mnb5tefei&channelNo=1&deviceSerial=203751922&protocol=3&startTime=2020-11-16 11:01:05&stopTime=2020-11-16 11:02:23&type=2&expireTime=86400
     ```

   - 返回数据，返回字段url为rtmp回放地址。

     ```json
     {
         "msg": "Operation succeeded",
         "code": "200",
         "data": {
             "id": "244844909163069440",
             "url": "rtmp://rtmp01open.ys7.com:1935/v3/openpb/203751922_1_1?begin=20201116110105&end=20201116110223&expire=1604647605&id=244844909163069440&rec=local&t=c2b0a5ed5a7c49ae61976155c83c434a619286a0e6650c98c0bb58962ea161f3&ev=100",
             "expireTime": "2020-11-06 15:26:45"
         }
     }
     ```

   - 返回码

   | 返回码 | 返回消息              | 描述                |
   | ------ | --------------------- | ------------------- |
   | 200    | 操作成功              | 请求成功            |
   | 10001  | 参数错误              | 校对参数            |
   | 10002  | accessToken异常或过期 | 重新获取accessToken |
   | 20001  | 摄像头不存在          | 摄像头不存在        |
   | 20002  | 设备不存在            | 设备不存在          |
   | 20007  | 设备离线              | 设备离线            |
   | 20018  | 该用户不拥有该设备    | 该用户不拥有该设备  |
   | 49999  | 数据异常              | 接口调用异常        |
   | 50000  | 系统错误              | 系统错误            |
   | 60019  | 设备已加密            | 设备已加密          |

   