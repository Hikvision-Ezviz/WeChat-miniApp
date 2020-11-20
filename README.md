
# 1. 用户指南

萤石云开放平台小程序（以下简称：萤石云小程序）为您提供设备预览、回放及设备能力体验，您可以快速体验设备预览、设备回放功能。同时，小程序还开放了视频取流SDK。如果您没有萤石开放平台账号或海康/萤石设备，也可体验我们提供的试用设备。

### 1.1 微信搜索进入小程序

1、微信搜索“萤石云开放平台”小程序。

<img src="https://resource.ys7cloud.com/group2/M00/00/52/CtwQF1-2BnyASaHSAABzY9XhxEc143.jpg" alt="小程序-微信搜索" style="width: 375px" />



2、点击“萤石云开放平台”，进入萤石云小程序首页。

<img src="https://resource.ys7cloud.com/group2/M00/00/52/CtwQFl-2Bn-AdgB2AACMcnNu1WQ319.jpg" alt="小程序-首页" style="width: 375px" />

### 1.2 自助设备播放

如果您拥有萤石开放平台账号和萤石/海康设备，可自助进行您账号下设备直播和设备回放。（如果您还没有萤石/海康设备，您可以体验试用设备播放，参考1.3）

自助进行账号下设备直播和回放需将您的设备绑定到您的萤石开放平台账号下，这一步您可以参考[设备接入指南](https://open.ys7.com/bbs/article/34) 。

#### 1.2.1 自助设备直播

1、进入萤石云小程序首页，单击 **「设用设备」**，进入试用设备页，单击  **「自助设备」** 按钮。

<img src="https://resource.ys7cloud.com/group2/M00/00/52/CtwQFl-2Bm-AU8mhAAD-lUrc6i0033.jpg" alt="试用设备" style="width: 375px" />

2、根据提示填写您的账号信息和设备信息。您可登录[萤石开放平台官网](https://open.ys7.com/console/application.html) ，在 **「控制台」**-> **「我的账号」**-> **「应用信息」** 获取您的accessToken，再单击  **「设备列表」** 获取您的设备信息。或者您还可以通过 [HTTP接口](https://open.ys7.com/doc/zh/book/index/user.html) 获取您的accessToken。

- 设备序列号和通道号需按照指定格式填写。ipc设备，通道号默认为1。

<img src="https://resource.ys7cloud.com/group2/M00/00/52/CtwQF1-2BneABx1UAAC99IgUEZ8066.jpg" alt="自助设备" style="width: 375px" />

3、单击  **「完成」** 按钮进入设备播放页。即可体验设备实时播放，云台控制、镜像翻转，语音播报，镜头遮蔽等功能（*需要设备能力支持*）。

<img src="https://resource.ys7cloud.com/group2/M00/00/52/CtwQF1-2BnKAHKEUAAEzp94LrQk484.jpg" alt="小程序-试用设备预览" style="width: 375px" />

#### 1.2.2 自助设备回放

如果您拥有萤石账号和萤石/海康设备，可自助进行您账号下设备回放。

1、进入萤石云小程序首页，单击 **「设备回放」**，进入试用设备页，单击 **「自助设备」** 按钮。

<img src="https://resource.ys7cloud.com/group2/M00/00/52/CtwQFl-2Bm-AU8mhAAD-lUrc6i0033.jpg" alt="小程序-试用设备" style="width: 375px" />

2、根据提示填写您的账号信息和设备信息。您可登录[萤石开放平台官网](https://open.ys7.com/console/application.html) ，在 **「控制台」**-> **「我的账号」**-> **「应用信息」** 获取您的accessToken，再单击 **「设备列表」** 获取您的设备信息。或者您还可以通过 [HTTP接口](https://open.ys7.com/doc/zh/book/index/user.html) 获取您的accessToken。

- 设备序列号和通道号需按照指定格式填写。ipc设备，通道号默认为1。

<img src="https://resource.ys7cloud.com/group2/M00/00/52/CtwQF1-2BneABx1UAAC99IgUEZ8066.jpg" alt="自助设备" style="width: 375px" />

3、单击 **「完成」** 按钮进入设备回放页。设备默认播放距当前时间最近的回放视频片段，您可滑动时间轴选取当前日期内回放时间片段进行播放。

- 您可单击时间轴上方日期选择器切换至对应日期，播放对应日期内的回放片段。
- 设备默认播放本地SDK卡回放片段，如果您的设备开通了云存储服务，您可点击切换至云存储，播放云存储中的回放片段。

<img src="https://resource.ys7cloud.com/group2/M00/00/52/CtwQFl-2BnWAHjDZAAI2pIFpiiI909.jpg" alt="小程序-设备回放" style="width: 375px" />

4、我们提供两种方式开通云存储。

- 您可登录[萤石开放平台官网](https://open.ys7.com/) 单击上侧导航栏 **「控制台」** ，单击左侧导航栏 **「云存储」** ，在列表中对应设备单击 **「开通」**，开通对应设备云存储服务。

  ![image-20201116103639079](https://resource.ys7cloud.com/group2/M00/00/52/CtwQFl-2BnqAbLFbAAM2jAUZ6XA622.png)

- 您还可以通过我们开放的 [使用卡密给设备开通云存储](https://open.ys7.com/doc/zh/book/index/cloud.html) API 接口开通云存储服务。

### 1.3 试用设备播放

如果您没有萤石开放平台账号或萤石/海康设备，可体验我们提供的试用设备进行设备直播和设备回放。

#### 1.3.1 试用设备直播

1、进入萤石云小程序首页，单击 **「试用设备」** 按钮，进入试用设备页。

<img src="https://resource.ys7cloud.com/group2/M00/00/52/CtwQFl-2Bm-AU8mhAAD-lUrc6i0033.jpg" alt="小程序-试用设备" style="width: 375px" />

2、试用设备列表中任选一个设备，点击播放按钮，进入试用设备直播页，体验试用设备直播功能。

<img src="https://resource.ys7cloud.com/group2/M00/00/52/CtwQF1-2BoqAKHqIAAIuJmWMUjE855.jpg" alt="小程序-试用设备预览" style="width: 375px" />

#### 1.3.2 试用设备回放

1、进入萤石云小程序首页，单击 **「设备回放」**按钮，进入试用设备页。

<img src="https://resource.ys7cloud.com/group2/M00/00/52/CtwQFl-2Bm-AU8mhAAD-lUrc6i0033.jpg" alt="小程序-试用设备" style="width: 375px" />

2、试用设备列表中任选一个设备，点击播放按钮，进入试用设备回放页，体验试用设备回放功能。

<img src="https://resource.ys7cloud.com/group2/M00/00/52/CtwQF1-2BoSAREMEAAHQDRQ8o0w019.jpg" alt="小程序-设备回放" style="width: 375px" />

### 1.4  官网控制台扫描二维码进入小程序

1、您可登录[萤石开放平台官网](https://open.ys7.com/console/application.html) ，单击上侧导航栏 **「控制台」**，单击左侧导航栏 **「设备列表」** 获取您的设备小程序地址。

<img src="https://resource.ys7cloud.com/group2/M00/00/52/CtwQF1-2BmmAXGfaAAOcZzimZqw180.png" alt="image-20201109213347064"  />

2、鼠标移动设备列表中 **「播放地址」** 栏中的 **「小程序地址」** 获取对应设备的小程序二维码播放地址。离线设备将不生成设备小程序播放地址。

<img src="https://resource.ys7cloud.com/group2/M00/00/52/CtwQFl-2BmWAFlJNAARMa9YRido596.png" alt="image-20201109213530834"  />

3、打开手机微信，扫描二维码即可播放对应设备。

4、如果您不拥有萤石/海康设备，您还可单击设备列表中 **「设用设备」** 按钮，获取试用设备小程序二维码。

<img src="https://resource.ys7cloud.com/group2/M00/00/52/CtwQFl-2Bo2AE6O5AAJxAdPalgk568.png" alt="image-20201109214037180"  />

5、打开手机微信扫描 **「小程序播放」** 二维码，即可体验试用设备播放功能。

# 2. 开发指南

本文将帮助您学习如何在微信开发者工具中开发萤石云小程序。开发者通过API方式即可获取萤石云小程序提供的实时视频预览，云台控制，直播，镜像翻转，语音播报、视频回放等服务，不需要关心服务器或底层运维设施，可以专注于小程序的业务开发。

我们开放了官方小程序代码，详见[demo目录](https://github.com/Hikvision-Ezviz/WeChat-miniApp)，可供开发者参考。

### 2.1 准备工作

1、[注册微信小程序](https://developers.weixin.qq.com/miniprogram/introduction/#%E5%B0%8F%E7%A8%8B%E5%BA%8F%E6%B3%A8%E5%86%8C)，在创建自己的微信小程序之前，首先需要注册小程序账号，有如下账号类型，我们选择 **「小程序」** 类型。请用您的企业账号完成后续注册。

<img src="https://resource.ys7cloud.com/group1/M00/00/7E/CtwQEl-2HGWAIU35AACcJr3yRTw928.png" alt="image-20201110171743089" style="zoom:;" />

2、下载并安装[微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html?spm=a2c4g.11186623.2.16.3e017b0bovMDZT)。

3、萤石云小程序依赖微信实时音视频播放组件live-player，[根据微信实时音视频接入文档]()，您的小程序需要通过类目审核。您可登录 [微信公众平台](https://mp.weixin.qq.com/) ，在左侧单击 **「设置」**，查看您的服务类目是否为live-player组件支持的小程序服务类目。您可点击右侧 **「详情」** 进行服务类目添加。

![](https://resource.ys7cloud.com/group1/M00/00/7E/CtwQE1-2LUiAPaZuAADCATRw7bE241.png)

您可登录[微信公众平台](https://mp.weixin.qq.com/)，在左侧导航栏单击 **「开发」**，然后单击 **「接口设置」** ，自助开通该组件权限。

<img src="https://resource.ys7cloud.com/group2/M00/00/52/CtwQF1-2BkCANiO5AAEeZ82ePOU707.png" alt="image-20201110110042088"  />

4、在微信小程序中请求萤石开放平台API时，需预先设置通讯域名，小程序只可以和指定的域名进行网络通讯。您可以登录[微信公众平台](https://mp.weixin.qq.com/)，在左侧导航栏单击 **「开发」**，然后单击 **「开发设置」**，在 **「服务器域名」** 区域，单击 **「修改」**，进行配置。

<img src="https://resource.ys7cloud.com/group2/M00/00/52/CtwQF1-2BlCAN7VwAAD6W9QxxVY156.png" alt="image-20201110142009537"  />

5、开发小程序直播、回放功能需要萤石/海康设备支持，您需要登录[萤石开放平台官网](https://open.ys7.com/console/application.html) ，单击上侧导航栏 **「控制台」**，单击左侧 **「设备列表」**，再单击 **「添加设备」** 按钮，输入设备序列号和设备验证码，完成您账号下设备的添加。

- 海康设备可以参考[设备接入指南](https://open.ys7.com/bbs/article/34) 进行账号下设备添加。

<img src="https://resource.ys7cloud.com/group2/M00/00/52/CtwQFl-2BoeAYFwKAAMCQUYHIpg801.png" alt="image-20201110144754527"  />

如果您还未注册[萤石开放平台官网](https://open.ys7.com/console/application.html) 账号，需要先单击上侧导航栏 **「注册」**，根据提示步骤注册成为萤石开放平台开发者。注册成功后重新登录萤石开放平台官网 ，单击上侧导航栏 **「控制台」**，单击左侧 **「设备列表」**，再单击 **「添加设备」** 按钮，输入设备序列号和设备验证码，完成您账号下设备的添加。

- 萤石开放平台的 [控制台](https://open.ys7.com/console/resource.html) 为开发者提供了我的设备、账户资源、流量明细、账单明细、我的应用、账号信息、工单系统、云存储、数据分析、电话提醒服务等功能。登录账号后可在控制台中进行操作。

<img src="https://resource.ys7cloud.com/group2/M00/00/52/CtwQFl-2BlOAa2HOAAD2-g-Px3g618.png" alt="image-20201110145304172"  />

### 2.2 体验小程序开发

1、完成前期准备工作后，您可以单击 [这里](https://github.com/Hikvision-Ezviz/WeChat-miniApp) 下载小程序示例项目。

2、打开下载的微信开发者工具，微信扫描二维码登录您注册的小程序账号。单击 **「导入项目」** 按钮，单击目录右侧 **「下拉」** 选择下载的小程序示例项目，输入您的**AppID**后，单击 **「导入」** 按钮。

- **AppID**：输入微信小程序的App ID。
- 登录[微信公众平台](https://mp.weixin.qq.com/)，在**开发设置**页面查看App ID。

<img src="https://resource.ys7cloud.com/group2/M00/00/52/CtwQF1-2BleANZtYAABtDYhMPm0324.png" alt="image-20201110154157407"  />

3、进入小程序示例项目中，单击 **「模拟器」** 按钮，可模拟进行调试，也可以单击 **「真机调试」** 按钮，单击 **「编译并自动调试」**，登录您小程序账号的微信会自动打开您需要调试的小程序。

<img src="https://resource.ys7cloud.com/group2/M00/00/52/CtwQFl-2Bl2ASgZsAAIp7KpyE5A411.png" alt="image-20201110155332172"  />

### 2.3 实现基本功能

#### 2.3.1 页面跳转

微信提供 [wx.navigateTo(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.navigateTo.html) API，实现保留当前页面，跳转到应用内的某个页面。

```javascript
 goToLive(){
    const { accessToken, deviceSerial, channelNo } = this.data;
    let url = '/pages/live/live?accessToken=' + accessToken + '&deviceSerial='+ deviceSerial + '&channelNo=' + channelNo;
    wx.navigateTo({
      url: url,
    })
  },
```

微信还支持小程序跳转，通过 [wx.navigateToMiniProgram](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/miniprogram-navigate/wx.navigateToMiniProgram.html) API，直接跳转到萤石云小程序的直播或者回放页，免开发实现设备直播、设备回放。

- 视频播放依赖于您的账户信息和设备信息，因此需在您的小程序中配置accessToken和设备信息。

```javascript
// 从我的小程序跳转到设备播放页，免开发实现设备直播。
wx.navigateToMiniProgram({
  appId: 'wxf2b3a0262975d8c2',
  path: 'pages/live/live?accessToken=' + accessToken + '&deviceSerial='+deviceSerial+'&channelNo=' + channelNo,
  success(res) {
    // 打开成功
  }
})
```

```javascript
// 从我的小程序跳转到设备回放页，免开发实现设备回放。
wx.navigateToMiniProgram({
  appId: 'wxf2b3a0262975d8c2',
  path: 'pages/playback/playback?accessToken=' + accessToken + '&deviceSerial='+deviceSerial+'&channelNo=' + channelNo,
  success(res) {
    // 打开成功
  }
})
```

#### 2.3.2 获取小程序启动时参数

微信提供 [wx.getLaunchOptionsSync()](https://developers.weixin.qq.com/miniprogram/dev/api/base/app/life-cycle/wx.getLaunchOptionsSync.html) API，获取小程序启动时的参数。

- 适用场景：获取页面跳转时携带的参数信息。

```javascript
var launchOptions = wx.getLaunchOptionsSync();
const {  query, scene } = launchOptions;
const { accessToken, deviceSerial,channelNo } = query;
```

您也可以通过小程序生命周期回调函数获取携带的参数信息。

```javascript
onload (query) {
	const { accessToken, deviceSerial,channelNo } = query;
    // Do something when load.
}

onShow (options) {
    const { accessToken, deviceSerial,channelNo } = query;
    // Do something when show.
  },
```

#### 2.3.3 萤石开放 API 调用示例

我们使用微信提供的 [wx.request](https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html) 方法发起HTTPS网络请求。请确保您已配置request域名白名单: https://open.ys7.com。萤石开放 API 请求示例如下：

```javascript
 /*
  * 获取设备基本信息
  */
  getDeviceInfo () {
    const { accessToken, deviceSerial, channelNo  } = this.data;
    wx.request({
      url: 'https://open.ys7.com/api/lapp/device/info', //仅为示例，并非真实的接口地址
      method: 'POST',
      data: {
        accessToken,
        deviceSerial,
        channelNo,
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success:(res) =>{
        console.log(res.data);
        if(res.data.code ==200 && res.data.data){
          // Do something
        }else {
          // 微信提供的错误信息弹出框
          wx.showToast({
            title: res.data.msg,
            icon: 'none'
          })
        }
      }
    })
  },
```

#### 2.3.4 视频播放开发示例

我们使用微信提供的 [live-player](https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html) 组件进行视频播放，在 .wxml文件中引入该组件，我们为live-player组件指定id值，用于创建 [LivePlayerContext](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePlayerContext.html) 对象，以操作live-player组件。

live-player组件部分属性说明如下：

- bindstatechange：监听播放状态变化，通过e.detail.code获取当前播放状态值，部分状态码如下所示。

- mode属性默认为live(直播模式)，萤石云小程序live-player组件为实时通话模式(mode="RTC")，该模式时延更低。
- src：您的设备播放地址，目前仅支持flv，rtmp格式。萤石开放 API 仅提供 rtmp 播放协议地址。
- autoplay：true表示自动播放，false表示手动播放。

[cover-view组件](https://developers.weixin.qq.com/miniprogram/dev/component/cover-view.html) 可覆盖在live-player组件之上，用于展示“播放按钮”、"全屏按钮"等播放器辅助功能。通过hidden="{true}"进行隐藏，hidden="{false}"进行展示。

```html
<!-- .wxml 文件 -->

<live-player id="previewPlayer" binderror="error" bindstatechange="statechange" mode="RTC" src="{{videoSrc}}"  autoplay="true" >
</live-player>
<!-- 播放停止状态 -->
<cover-view class="video-loaing video-ready" hidden="{{videoLoadingStatus !== 0}}">
	<cover-image class="loading-gif" src="../live/images/live/landscape_play.png" catchtap="handlePlay">
    </cover-image>
</cover-view>
```

```javascript
// .js文件
let livePlayerContext;
Page({
    data: {
        videoSrc: '', // 视频播放地址
        videoLoadingStatus: 0, // 播放按钮展示状态
    },
    onLoad: function () {
        livePlayerContext = wx.createLivePlayerContext('previewPlayer');
        // 调用接口获取videoSrc视频播放地址
    },
    // 播放状态监听
    statechange(e) {
    const { code } = e.detail;
    switch (code){
      case 2007: //启动loading
        break;
      case 2001: //连接服务器 
        break;
      case 2002: //已经连接 RTMP 服务器,开始拉流 
   		break;
      case 2008: // 解码器启动
        console.log("case 2008: //解码器启动");
        break;
      case 2009: //视频分辨率改动
 		console.log("case 2009: //视频分辨率改动");
        this.handlePlay(); // 视频分辨率改动可能导致播放暂停，可调用handlePlay()重启播放
        break;
      case 2004: 
        console.log("case 2004: // 视频播放开始");
        break;
      case 2003: 
      	console.log("case 2003: //网络接收到首个视频数据包(IDR)");
      	break;
      case 2103: //网络断连, 已启动自动重连（本小程序不自动重连）
      	break;
      case 3001:
      case 3002:
      case 3003:
      case 3005: // RTMP 读/写失败，之后会发起网络重试
      	console.log("播放失败");
      	break;
      case 2105: // 当前视频播放出现卡顿
        break;
      case -2301: // 经多次重连抢救无效，更多重试请自行重启播放
        break;
    }
  },
    // 播放按钮
  	handlePlay(e){
      	livePlayerContext.play({
          success: ()=>{
              // Do some thing
          },
          fail: (error)=>{
              // Do some thing
          }
      	})
  	},
})
```

### 2.4 常用功能

#### 2.4.1 生成accessToken

萤石开放平台为您提供两种生成accessToken方式，您可以根据业务需求选择在萤石云开放平台官网获取或服务端生成。

**前提条件**

在生成accessToken前，您需要完成以下操作：

- [注册萤石开放平台官网账号](https://open.ys7.com/)
- [创建应用](https://open.ys7.com/console/application.html)
- [查询AppKey](https://open.ys7.com/console/application.html)

**控制台**

1、登录 [萤石云开放平台官网](https://open.ys7.com/) 。

2、单击上侧导航栏 **「控制台」**，单击左侧 **「我的账号」**，再单击 **「应用信息」**，即可在应用信息页面获取您的AccessToken。

**服务端**

您还可以在萤石云开放平台，单击上侧 **「支持中心」** [根据appKey和secret获取accessToken](https://open.ys7.com/doc/zh/book/index/user.html) 接口获取您的accessToken。

#### 2.4.2 获取直播rtmp地址

1. 我们提供接口获取设备回放rtmp地址。依赖 [根据时间获取存储文件信息](https://open.ys7.com/doc/zh/book/index/device_select.html#device_select-api9) 接口 (https://open.ys7.com/api/lapp/video/by/time)返回字段startTime，endTime，获取回放时间片段。

2. 获取rtmp回放地址接口说明：

   - 请求地址

     ```
     https://open.ys7.com/api/lapp/v2/live/address/get
     ```

     [^注]: 需配置request域名白名单: https://open.ys7.com

   - 请求方式

     POST

   - 请求参数

     | 参数名       | 类型   | 示例      | 描述                                                         | 是否必选 |
     | ------------ | ------ | --------- | ------------------------------------------------------------ | -------- |
     | accessToken  | String |           | 访问令牌，获取你的[AccessToken](https://open.ys7.com/doc/zh/book/index/user.html) | Y        |
     | deviceSerial | String | 203751922 | 设备序列号                                                   | Y        |
     | channelNo    | String | 1         | 通道号                                                       | Y        |
     | protocol     | String | 3         | 流播放协议，3-rtmp                                           | Y        |
     | quality      | String | 1         | 视频清晰度，1-高清，2-标清                                   | Y        |
     | expireTime   | String | 86400     | 过期时间                                                     | N        |

   - HTTP请求报文

     ```http
     POST /api/lapp/v2/live/address/get HTTP/1.1
     Host: open.ys7.com
     Content-Type: application/x-www-form-urlencoded
     
     accessToken=at.cv704ono8vggs59c14mtre0u3q05q6fe-8dva1ulk3s-0fzbv4p-mnb5tefei&channelNo=1&deviceSerial=203751922&protocol=3&quality=1&expireTime=86400
     ```

   - 返回数据，返回字段url为rtmp直播地址。

     ```json
     {
         "msg": "Operation succeeded",
         "code": "200",
         "data": {
             "id": "247116619786670080",
             "url": "rtmp://rtmp01open.ys7.com:1935/v3/openlive/203751922_1_2?expire=1605275593&id=247116619786670080&t=60ac6e4fd97e71e3e2fcceb792b042d8023cb73b6bd39c6ca769605a7d65dd2e&ev=100",
             "expireTime": "2020-11-13 21:53:13"
         }
     }
     ```

   - 响应码

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



#### 2.4.3 云台控制

我们提供远程云台控制服务，您可实时手动控制您的云台转向，播放对应方位的视频。

- 云台控制操作需您已获取直播rtmp地址，并开始播放您的视频。
- 目前萤石云小程序只支持设备上、下、左、右四个方位的转向。

1、云台控制功能需您的设备支持，您可通过萤石开放平台官网 **「支持中心」** [根据设备序列号查询设备能力集](https://open.ys7.com/doc/zh/book/index/device_select.html#device_select-api9) 接口获取您的设备能力集。

2、我们通过微信提供的 catchtouchstart 和 catchtouchend 监听手势移动开始和结束时的坐标值，通过 wx.createSelectorQuery().select('#ptz-img-container').boundingClientRect( (rect) => {}}).exec();方法计算云台控制组件的位置，两者计算出移动偏移量，对比top值和left值计算出偏移方位，从而调用API控制云台转向。

```html
<!-- .wxml 文件 -->
<view class="ptz-img-container" id="ptz-img-container" catchtouchstart="handlePtzTouchStart" catchtouchend="handlePtzTouchEnd">
	<image class="ptz-img" src="{{currentPtzImg}}"></image>
</view>
```

```javascript
// .js文件
Page({
    data: {
        currentPtzImg: ''
    },
    onLoad: function () {
        
    },
    // 计算移动起始方位
    handlePtzTouchStart(event){
       wx.createSelectorQuery().select('#ptz-img-container').boundingClientRect( (rect) 		=> {
          let { clientX,clientY} = event.touches[0]; // 移动起始坐标值
          let rectLeft = rect.left; // 计算云台控制组件的位置
          let rectTop = rect.top; // 计算云台控制组件的位置

          var centerLeft = 104 + rectLeft; // 组件实际坐标值
          var centerTop = 104 + rectTop;// 组件实际坐标值
          var left = clientX - centerLeft; // 移动偏移量
          var top = clientY - centerTop; // 移动偏移量

          if(Math.abs(left) > Math.abs(top)){
            if(left>0){
              this.handlePtzControl(3); // 向右
            }else {
              this.handlePtzControl(2); // 向左
            }
          } else {
            if (top > 0) {
              this.handlePtzControl(1); // 向下

            } else {
              this.handlePtzControl(0); // 向上
            }
          }

        }).exec();
  	},
  	// 计算移动结束时方位
    handlePtzTouchEnd(event) {
        let { clientX, clientY } = event.changedTouches[0];
        const _this = this;
        wx.createSelectorQuery().select('#ptz-img-container').boundingClientRect( (rect) 		=> {
          let rectLeft = rect.left;
          let rectTop = rect.top;

          var centerLeft = 104 + rectLeft;
          var centerTop = 104 + rectTop;
          var left = clientX - centerLeft;
          var top = clientY - centerTop;
          if (Math.abs(left) > Math.abs(top)) {
            if (left > 0) {
              _this.handlePtzControl(3,'stop');
            } else {
              _this.handlePtzControl(2, 'stop');
            }
          } else {
            if (top > 0) {
              _this.handlePtzControl(1, 'stop');
            } else {
              _this.handlePtzControl(0,'stop');
            }
          }
        }).exec();
  	},
    // 调用接口控制云台转向
    handlePtzControl(position,type){
        const { accessToken, deviceSerial, channelNo } = this.data;
        var url = 'https://open.ys7.com/api/lapp/device/ptz/start';
        if(type == 'stop'){
          url = 'https://open.ys7.com/api/lapp/device/ptz/stop'
        }
        wx.request({
          url: url, //仅为示例，并非真实的接口地址
          method: 'POST',
          data: {
            "accessToken": accessToken,
            "deviceSerial": deviceSerial,
            "channelNo": channelNo,
            "direction": position,
            speed:1,
          },
          header: {
            'content-type': 'application/x-www-form-urlencoded' // 默认值
          },
          success: (res) => {
            const code = res.data.code;
            if(code == 10029){
              wx.showToast({
                title: '个人版接口调用超限，请升级企业版',
                icon: 'none',
              })
            }else if(code != 200){
             
            }
            if(type == 'stop'){
              ptzStatus = 0;
              currentPtzImg = ptzNormalImg;
            }else{
              // code==200 Do something
          },
          error:(err) =>{
            
          }
        })
      },
})
```

3、[开始云台控制和结束云台控制接口](https://open.ys7.com/doc/zh/book/index/device_ptz.html#device_ptz-api1) 详见萤石开放平台官网 **「支持中心」**。

#### 2.4.4 语音播报

您可通过我们开放的接口获取您设备的语音快捷列表，并快速向您的设备发送语音播报指令，您还可以基于微信小程序进行语音录制和设备播放的二次开发。

1、您可以登录萤石云开放平台官网 **「支持中心」**[通过获取设备语音列表接口](https://open.ys7.com/doc/zh/book/index/device_voice.html#device_voice-api6) 获取您设备的语音列表。

2、通过[语音文件下发接口](https://open.ys7.com/doc/zh/book/index/device_voice.html#device_voice-api6) 向您的设备下发语音指令后，您的设备将自动播放该语音。

3、本地开发时，您可以自定义语音播放，语音一次性下发到设备，不保存到语音列表。

微信提供全局唯一的录音播放器 [RecorderManager](https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.html)，萤石开放平台小程序本地语音录制示例如下：

```html
<!-- .wxml 文件 -->
<button class="btn primary"  catchtouchstart="speakStart" catchtouchend="speakEnd">
    按住说话
</button>
```

```javascript
// .js文件
const recorderManager = wx.getRecorderManager();

const options = {
  duration: 60000, //指定录音的时长，单位 ms，最大为10分钟（600000），默认为1分钟（60000）
  sampleRate: 16000, //采样率
  numberOfChannels: 1, //录音通道数
  format: 'mp3', //音频格式，有效值 aac/mp3
}

Page({
    data: {
        
    },
    onLoad: function () {
        // 
        recorderManager.onStop((res) => {
          const { recoderTime } = this.data;
          const { tempFilePath } = res;

          wx.uploadFile({
            url: 'https://open.ys7.com/api/lapp/voice/sendonce', //仅为示例，非真实的接口地址
            filePath: tempFilePath, //tempFilePaths[0],
            name: 'voiceFile',
            formData: {
              accessToken: accessToken,
              deviceSerial: deviceSerial,
              channelNo: channelNo,
            },
            header: {
              'content-type': 'amultipart/form-data' // 默认值
            },
            success: (res)=> {
              let data = res.data;
              if(!data.code){
                data = JSON.parse(data);
              }
              if(data.code == 200) {
                console.log("发送成功");
              }else if(data.code =='111012') { // 设备正忙
               
              }else if(data.code =='20007') { // 设备正忙
               
              }else if(data.code =='20008') { // 设备正忙
                
              }else {
              //Do something
            },
            fail: (res)=>{
             //Do something
            },
            complete: ()=>{
              //Do something
            }
          })
        });
    },
	// 按住说话
    speakStart(event){
        recorderManager.start(options);
    },
    // 结束说话
    speakEnd(event) {
         recorderManager.stop();
    },
})
```

#### 2.4.5 镜像翻转

镜像翻转功能需您的设备支持，您可通过萤石开放平台官网 **「支持中心」** [根据设备序列号查询设备能力集](https://open.ys7.com/doc/zh/book/index/device_select.html#device_select-api9) 接口获取您的设备能力集。接口返回值：

- ptz_center_mirror—是否支持中心镜像`0`-不支持, `1`-支持。
- ptz_left_right_mirror—是否支持左右镜像 `0`-不支持, `1`-支持。
- ptz_top_bottom_mirror—是否支持上下镜像 `0`-不支持, `1`-支持。

调用 [镜像翻转](https://open.ys7.com/doc/zh/book/index/device_ptz.html#device_ptz-api3) 接口即可实现远程控制您设备镜头翻转。

#### 2.4.6 镜头遮蔽

镜像翻转功能需您的设备支持，您可通过萤石开放平台官网 **「支持中心」** [根据设备序列号查询设备能力集](https://open.ys7.com/doc/zh/book/index/device_select.html#device_select-api9) 接口获取您的设备能力集。接口返回值：

- support_privacy—是否支持隐私保护 `0`-不支持, `1`-支持。

调用 [设置镜头遮蔽开关](https://open.ys7.com/doc/zh/book/index/device_switch.html#device_switch-api7) 接口即可实现远程控制您设备镜头翻转。

#### 2.4.7 获取设备回放rtmp地址

我们提供接口获取设备回放rtmp地址。回放录像分为本地和云存储录像。

- 本地录像只需插入设备SDK卡。

- 云存储录像需要您开通云存储服务。（参见1.2.2 自助设备回放，步骤4）

1. 依赖[根据时间获取存储文件信息](https://open.ys7.com/doc/zh/book/index/device_select.html#device_select-api9)接口(https://open.ys7.com/api/lapp/video/by/time)返回字段startTime，endTime，获取回放时间片段。

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

   - 响应码

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

   