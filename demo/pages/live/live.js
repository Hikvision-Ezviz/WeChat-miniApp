import { DateFormat } from '../common/utils';

//index.js
//获取应用实例
const app = getApp();
const recorderManager = wx.getRecorderManager();

const options = {
  duration: 60000, //指定录音的时长，单位 ms，最大为10分钟（600000），默认为1分钟（60000）
  sampleRate: 16000, //采样率
  numberOfChannels: 1, //录音通道数
  format: 'mp3', //音频格式，有效值 aac/mp3
}

var livePlayerContext;



Page({
  data: {
    scene: 1001,
    accessToken: '',
    deviceSerial: '',
    channelNo: '1',
    list: [
      {
        id: 'ptz',
        name: '云台控制',
        status: -1,
        normalPath: './images/ptz.png',
        disablePath: './images/ptz_disable.png',
        activePath:'./images/ptz.png',
      },
      {
        id: 'voice',
        name: '语音播报',
        status: -1,
        normalPath: './images/voice.png',
        disablePath: './images/voice_disable.png',
        // activePath: './images/voice_active.png',
        activePath: './images/voice.gif',
      },
      {
        id: 'mirror',
        name: '镜像翻转',
        status: -1,
        normalPath: './images/fanzhuan.png',
        disablePath: './images/fanzhuan_disable.png',
        activePath: './images/fanzhuan.png',
      },
      {
        id: 'cover',
        name: '镜头遮蔽',
        status: -1,
        normalPath: './images/yinsi.png',
        disablePath: './images/yinsi_disable.png',
        activePath: './images/yinsi_active.png',
      },
    ],
    videoSrc:"",
    videoHDSrc: "",
    panelStatus: 0, //0: 展示面板 1：进入云台 2-进入语音播报 3-进入镜像翻转 4-进入镜头遮蔽,
    ptzDisabled: true,
    voiceDiasbled: true,
    mirrorDisabled: true,
    mirrorInterval: false,
    coverDisabled: true,
    coverInterval: false,
    showVideoControls: true,
    autoHideTimer: undefined,
    videoLoadingStatus: 0,
    playVideo: false,
    videoNetWorkError: false,
    objectFit:'contain',
    openSound: true,
    isHD: false,
    showHDSelect: false,
    fullScreen: false,
    ptzStatus: 0, //0-初始化 1-top noraml 2-downnoraml 3-left normal 4-right normal  5-top noraml 6-down limit 7-left limit 8-right limit
    ptzLoading: false,
    ptzLimit: '',
    deviceOffline: false,
    deviceOfflineTime: new Date(),
    deviceName: '',
    currentPtzImg: './images/yuntai/normal.png',
    // 语音播报
    activeDefaultVoiceName: '',
    activeCustomVoiceName: '',
    defaultVoiceList: [], // 默认语音列表
    defaultVoiceTotal: 0, // 默认语音总数
    defaultVoicePage: 0,   // 默认语言当前页
    defaultVoiceListLoading: false,
    defaultVoiceNoMore: false,
    customVoiceList: [], // 默认语音列表
    customVoiceTotal: 0, // 默认语音总数
    customVoicePage: 0,   // 默认语言当前页
    customVoiceListLoading: false,
    customVoiceListNoMore: false,
    recoderTime:60,
    recoderTimer: undefined,
    sendingOnceVoice: false,
    dialogTitle: '',
    dialogContent: '',
    buttons: [{text: '知道了'}],
    dialogShow: false,
  },
  onLaunch(){
    console.log(onLaunch);
  },
  onShow (options) {
    console.log("show")
    // Do something when show.
    this.checkNetWork();
    this.getDeviceCoverInfo();
  },
  onHide () {
    // Do something when hide.
    console.log("hide")
    this.setData({
      panelStatus:0,
    })
  },
  onError (msg) {
    console.log(msg)
  },
  onLoad(query){
    var launchOptions = wx.getLaunchOptionsSync();
    const { accessToken, deviceSerial,channelNo,scene } = query;
    console.log("scene",scene)
    this.setData({
      scene: parseInt(scene,10) || launchOptions.scene,
      accessToken: accessToken,
      deviceSerial: deviceSerial,
      channelNo: channelNo || '1',
      panelStatus:0,
    });
    this.getPlayUrl();
    this.getDeviceInfo();
    this.getDeviceCoverInfo();
    this.setData({
      showOneButtonDialog: true
    })
    // 录音模块
    recorderManager.onStart(() => {
      console.log('recorder start');
    })
    recorderManager.onPause(() => {
      console.log('recorder pause');
      this.speakEnd();
    })
    recorderManager.onInterruptionBegin(this.speakEnd);

    recorderManager.onStop((res) => {
      console.log('recorder stop', res)
      const { recoderTime } = this.data;
      const { tempFilePath } = res;
      if(recoderTime >= 59) {
        this.setData({
          recoderTime: 60,
        })
        clearTimeout(this.data.recoderTimer);
        return false;
      }
      this.setData({
        sendingOnceVoice: true,
      })
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
            wx.showToast({
              title: '操作中，请稍后再试',
              icon:'none',
            })
          }else if(data.code =='20007') { // 设备正忙
            wx.showToast({
              title: '设备不在线',
              icon:'none',
            })
          }else if(data.code =='20008') { // 设备正忙
            wx.showToast({
              title: '设备响应超时',
              icon:'none',
            })
          }else {
            wx.showToast({
              title: data.msg,
              icon: 'none',
            })
          }
          this.setData({
            recoderTime: 60,
          })
          //do something
        },
        fail: (res)=>{
          wx.showToast({
            title: '网络异常',
            icon: 'none'
          })
        },
        complete: ()=>{
          this.setData({
            sendingOnceVoice: false,
          })
        }
      })
    })
    recorderManager.onFrameRecorded((res) => {
      const { frameBuffer } = res
      console.log('frameBuffer.byteLength', frameBuffer.byteLength)
    });
    //视频
    livePlayerContext = wx.createLivePlayerContext('livePlayer');
    console.log("livePlayerContext", livePlayerContext);
  },
  checkNetWork(){
    const _this = this;
    wx.getNetworkType({
      success (res) {
        const networkType = res.networkType
        if(!networkType || networkType === 'none'){
          wx.showToast({
            title: '当前网络异常',
            icon: 'none',
            duration: 2000,
          })
        }
      }
    })
  },
  getPlayUrl(){
    const { accessToken, deviceSerial, channelNo } = this.data;
    var _this = this;
    // wx.request({
    //   url: 'https://open.ys7.com/api/lapp/live/address/get', //仅为示例，并非真实的接口地址
    //   method: 'POST',
    //   data: {
    //     accessToken: accessToken,
    //     source: deviceSerial + ':' + channelNo,
    //   },
    //   header: {
    //     'content-type': 'application/x-www-form-urlencoded' // 默认值
    //   },
    //   success: (res) => {
    //     console.log(res.data);
    //     const { list } = this.data;
    //     if(res.data.code ==200 && res.data.data && res.data.data.length>0){
    //       var result = res.data.data[0];
    //       if(result.ret == 200){
    //         _this.setData({
    //           videoSrc: result.rtmp,
    //           videoHDSrc: result.rtmpHd,
    //         })
    //       }else {
    //         list[0].status = -1;
    //         list[1].status = -1;
    //         list[2].status = -1;
    //         list[3].status = -1;
    //         _this.setData({
    //           list:list,
    //           dialogTitle: '获取播放地址失败',
    //           dialogContent: result.desc,
    //           dialogShow: true,
    //           showVideoControls: false,
    //         })
    //       }
    //     }else {
    //       _this.openPlayUrl();
    //     }
    //   }
    // });
    wx.request({
      url: 'https://open.ys7.com/api/lapp/v2/live/address/get', //仅为示例，并非真实的接口地址
      method: 'POST',
      data: {
        accessToken: accessToken,
        deviceSerial: deviceSerial,
        channelNo: channelNo,
        expireTime: 86400,
        quality: 2,
        protocol: 3,
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success: (res) => {
        console.log(res.data);
        const { list } = this.data;
        if(res.data.code ==200 && res.data.data && res.data.data.url){
          var result = res.data;
          if(result.code == 200){
            _this.setData({
              videoSrc: result.data.url,
              // videoHDSrc: result.rtmpHd,
            })
          } else {
            list[0].status = -1;
            list[1].status = -1;
            list[2].status = -1;
            list[3].status = -1;
            _this.setData({
              list:list,
              dialogContent: result.msg,
              showVideoControls: false,
            })
          }
        } else if (res.data.code == "20001" ||res.data.code == "20002" || res.data.code == '20018'|| res.data.code == '10001'){ // 设备不存在 / 不属于用户
          this.setData({
            dialogTitle: '获取播放地址失败',
            dialogContent: '该用户不拥有该设备',
            dialogShow: true,
          })
        }else {
          console.log("获取播放地址失败")
          // _this.openPlayUrl();
        }
      }
    });
    wx.request({
      url: 'https://open.ys7.com/api/lapp/v2/live/address/get', //仅为示例，并非真实的接口地址
      method: 'POST',
      data: {
        accessToken: accessToken,
        deviceSerial: deviceSerial,
        channelNo: channelNo,
        expireTime: 86400,
        quality: 1,
        protocol: 3,
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success: (res) => {
        console.log(res.data);
        const { list } = this.data;
        if(res.data.code ==200 && res.data.data && res.data.data.url){
          var result = res.data;
          if(result.code == 200){
            _this.setData({
              //videoSrc: result.rtmp,
              videoHDSrc: result.data.url,
            })
          }else {
            list[0].status = -1;
            list[1].status = -1;
            list[2].status = -1;
            list[3].status = -1;
            _this.setData({
              list:list,
              dialogContent: result.msg,
              showVideoControls: false,
            })
          }
        }else {
          console.log("获取高清播放地址失败")
          // _this.openPlayUrl();
        }
      }
    })
  },
   /*
  * 获取设备基本信息
  */
 getDeviceCoverInfo(){
  const { accessToken, deviceSerial, channelNo } = this.data;
  var _this = this;
    wx.request({
      url: 'https://open.ys7.com/api/lapp/device/scene/switch/status',
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
          const result = res.data.data;
          let list = this.data.list;
          if(result.enable == 1){ // 当前镜头遮蔽中
            list[0].status = -1;
            list[1].status = -1;
            list[2].status = -1;
            list[3].status = 1;
            this.setData({
              videoNetWorkError: false,
              showVideoControls: false,
              panelStatus: 4,
              videoLoadingStatus: 100,
              list: list,
            })
            console.log("panelStatus",this.data.panelStatus)
          }
        }
      },
      error:(err)=>{
        console.log(err);
      },
    })
  },

  /*
  * 获取设备基本信息
  */
  getDeviceInfo(){
    const { accessToken, deviceSerial, channelNo ,showVideoControls, videoNetWorkError,videoLoadingStatus } = this.data;
    var _this = this;
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
          let list = this.data.list;
          var result = res.data.data;
          _this.setData({
            deviceName: result.deviceName,
            deviceOffline: result.status !== 1,
            videoNetWorkError: result.status !==1 ? false : videoNetWorkError,
            showVideoControls: result.status !==1 ? false : showVideoControls,
            deviceOfflineTime: DateFormat(new Date(result.updateTime),'yyyy-MM-dd hh:mm:ss'),
            deviceIsEncrypt: result.isEncrypt,
            videoLoadingStatus: (result.isEncrypt === 1 || result.status !== 1) ? 100 : videoLoadingStatus,
          });
          // 配置标题
          if(result.deviceName){
            wx.setNavigationBarTitle({
              title: result.deviceName,
            }) 
          }
          if(result.status != 1 ){ // 设备不在线
            list[0].status = -1;
            list[1].status = -1;
            list[2].status = -1;
            list[3].status = -1;
            _this.setData({
              list:list,
              showVideoControls: false
            })
          }else if(result.isEncrypt == 1 ){ // 设备被加密
            list[0].status = -1;
            list[1].status = -1;
            list[2].status = -1;
            list[3].status = -1;
            _this.setData({
              list:list,
              dialogTitle: '设备被加密',
              dialogContent: '设备已被加密，无法继续查看，请前往萤石云app解密。',
              dialogShow: true,
              showVideoControls: false,
            })
          } else {
            // 获取设备能力
            // _this.getDeviceCapacity();
            _this.getDeviceCoverInfo();
          }
        } else if (res.data.code == "20001" ||res.data.code == "20002" || res.data.code == '20018'){ // 设备不存在 / 不属于用户
          this.setData({
            dialogTitle: '获取播放地址失败',
            dialogContent: '该用户不拥有该设备',
            dialogShow: true,
          })
        }else if(res.data.code == 10029){
          wx.showToast({
            title: '个人版接口调用超限，请升级企业版',
            icon: 'none',
          })
        }else if(res.data.code == 10002){
          wx.showToast({
            title: res.data.msg,
            icon: 'none',
          })
          setTimeout(()=>{
            this.pageBack();
          },2000)
        }else {
          wx.showToast({
            title: res.data.msg,
            icon: 'none'
          })
        }
      }
    })
  },
  /*
  * 获取设备能力集
  */
 getDeviceCapacity(){
  const { accessToken,deviceSerial,channelNo,playVideo} = this.data;
  var _this = this;
  wx.request({
    url: 'https://open.ys7.com/api/lapp/device/capacity',
    method: 'POST',
    data: {
      accessToken,
      deviceSerial,
    },
    header: {
      'content-type': 'application/x-www-form-urlencoded' // 默认值
    },
    success:(res) =>{
      console.log(res.data);
      if(res.data.code ==200 && res.data.data){
        var result = res.data.data;
        let list = this.data.list;
        list[0].status = result.support_ptz == 0 ? -1 : 0;
        list[1].status = result.support_talk != 1 ? -1 : 0;
        list[2].status = result.ptz_top_bottom_mirror == 0 ? -1 : 0;
        list[3].status = result.support_privacy == 0 ? -1 : 0;
        if(!playVideo){ // 非视频播放成功状态下
          list[0].status = -1;
          list[2].status = -1;
        }
        _this.setData({
          list: list,
        })
      } else if (res.data.code == "20002" || res.data.code == '20018'){ // 设备不存在 / 不属于用户
        this.setData({
          dialogTitle: '设备被删除',
          dialogContent: '设备已从账号下删除，无法继续查看',
          dialogShow: true,
        })
      }
    }
  })
},
  fullScreen(){
    var _this = this;
    livePlayerContext.requestFullScreen({
      direction: 90,
      success: function(){
        _this.setData({
          fullScreen: true,
        })
      }
    });
    console.log("开启全屏");
  },
  unfullScreen() {
    var _this = this;
    livePlayerContext.exitFullScreen({
      success: function(){
        _this.setData({
          fullScreen: false,
        })
      }
    });
    console.log("开启全屏");
  },
  ToggleObjectFit(){
    var objectFit = this.data.objectFit;
    this.setData({
      objectFit: objectFit === 'contain' ? 'fillCrop': 'contain',
    })
  },
  fullscreenChange(event){
    console.log("监听到全屏变化", event)
  },
  getDefaultVoice: function () {
    const { accessToken } = this.data;
    var _this = this;
    console.info("默认语音： 第" + _this.data.defaultVoicePage + "页");
    var _this = this;
    _this.setData({
      defaultVoiceListLoading: true,
    })
    wx.request({
      url: 'https://open.ys7.com/api/lapp/voice/query', //仅为示例，并非真实的接口地址
      method: 'POST',
      data: {
        "accessToken": accessToken,
        "default": "true",
        "pageStart": _this.data.defaultVoicePage,
        "pageSize": 5,
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success(res) {
        console.log(res.data);
        var defaultVoiceList = _this.data.defaultVoiceList;
        defaultVoiceList = defaultVoiceList.concat(res.data.data);
        if(res.data.data && res.data.data.length>0){
          _this.setData({
            defaultVoiceList: defaultVoiceList,
            defaultVoicePage: _this.data.defaultVoicePage + 1,
          });
        }else {
          _this.setData({
            defaultVoiceNoMore: true,
          });
        }
        _this.setData({
          defaultVoiceListLoading: false,
        })
      },
      error(error){
        console.log(error);
        _this.setData({
          defaultVoiceListLoading: false,
        })
      }
    })
  },
  getCustomVoice: function () {
    const { accessToken } = this.data;
    var _this = this;
    console.info("用户自定义语音： 第" + _this.data.defaultVoicePage + "页");
    var _this = this;
    _this.setData({
      customVoiceListLoading: true,
    })
    wx.request({
      url: 'https://open.ys7.com/api/lapp/voice/query', //仅为示例，并非真实的接口地址
      method: 'POST',
      data: {
        "accessToken": accessToken,
        default:false,
        "pageStart": _this.data.defaultVoicePage,
        "pageSize": 5,
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success(res) {
        console.log(res.data);
        var customVoiceList = _this.data.customVoiceList;
        customVoiceList = customVoiceList.concat(res.data.data);
        if(res.data.data && res.data.data.length>0){
          _this.setData({
            customVoiceList: customVoiceList,
            customVoicePage: _this.data.customVoicePage + 1,
          });
        }else {
          _this.setData({
            customVoiceNoMore: true,
          });
        }
        _this.setData({
          customVoiceListLoading: false,
        })
      },
      error(error){
        console.log(error);
        _this.setData({
          customVoiceListLoading: false,
        })
      }
    })
  },
  // 滚动至低端事件
  defaultScrollLower: function () {
    var _this = this;
    console.info("defaultScrollLower 第" + _this.data.defaultVoicePage + "页");
    this.getDefaultVoice();
  },
  // 滚动至低端事件
  customScrollLower: function () {
    var _this = this;
    console.info("customScrollLower 第" + _this.data.defaultVoicePage + "页");
    this.getCustomVoice();
  },
  handlePlay(callback){
    console.log("handelPlay",this.data.playVideo,this.data.isHD);
      this.checkNetWork()
      livePlayerContext.play({
        success: ()=>{
          this.setData({
            // playVideo: true,
            showVideoControls: true,
            // videoLoadingStatus: 100,
            videoNetWorkError: false,
          });
          if(callback && typeof callback === "function"){
            callback();
          }
        },
        fail: (error)=>{
          this.checkNetWork();
          wx.showToast({
            title: '网络异常',
            icon:'none',
          })
          console.log("开始播放失败");
          this.setData({
            videoNetWorkError: true,
            showVideoControls: false,
            videoLoadingStatus: 100,
          })
        }
      })
  },
  handleStop(callback){
    console.log("stop");
    const { list } = this.data;
    livePlayerContext.stop({
      success: ()=>{
        list[0].status = -1;
        // list[1].status = -1;
        // list[2].status = -1;
        // list[3].status = -1;
        this.setData({
          playVideo: false,
          // showVideoControls: true,
          videoLoadingStatus: 0,
          list: list,
          panelStatus: 0,
        })
        if(callback && typeof callback === "function"){
          callback();
        }
      },
      fail: (error)=>{
        console.log("停止播放失败")
      }
    })
  },
  autoHideControl(){
    console.log("showHdSelect",this.data.showHDSelect);
      const _this = this;
      clearTimeout(this.data.autoHideTimer);
      this.data.autoHideTimer = setTimeout(()=>{
        const { showHDSelect } = _this.data;
        if(!showHDSelect){
          this.setData({
            showVideoControls: false,
          })
        }
      },5000);
  },
  handleSound(e){
    var openSound = this.data.openSound;
    this.setData({
      openSound: !openSound,
    })
  },
  handleHD(e){
    var showHDSelect = this.data.showHDSelect;
    console.log("handleHD",showHDSelect)
    this.setData({
      showHDSelect: !showHDSelect,
    });
  },
  changeVideoHD(e){
    var _this = this;
    this.setData({
      showHDSelect: false,
      isHD: true
    });
    this.handleStop(_this.handlePlay);
  },
  changeVideoNormal(e) {
      this.setData({
        showHDSelect: false,
        isHD: false
      })
      this.handleStop(this.handlePlay);
  },
  statechange(e) {
    console.log('live-player code:', e.detail.code,e.detail);
    const { code } = e.detail;
    let { videoLoadingStatus,list,panelStatus } = this.data;
    switch (code){
      case 2007: //启动loading
        videoLoadingStatus = 0;
        this.setData({
          playVideo: true,
          videoLoadingStatus: 0,
        })
        break;
      case 2001: //连接服务器
        videoLoadingStatus = 20 + Math.floor(Math.random()*10+1);
        break;
      case 2002: //已经连接 RTMP 服务器,开始拉流
        videoLoadingStatus = 40 + Math.floor(Math.random()*10+1);
        break;
      case 2008: // 解码器启动
        break;
      case 2009: //视频分辨率改动
        break;
      case 2004: // 视频播放开始
        videoLoadingStatus = 80 + Math.floor(Math.random()*10+1);
        break;
      case 2003: //网络接收到首个视频数据包(IDR)
      videoLoadingStatus = 100;
      this.setData({
        playVideo: true,
      })
      this.autoHideControl();
      this.getDeviceCapacity();
      break;
      case 2103: //网络断连, 已启动自动重连（本小程序不自动重连）
      // videoLoadingStatus = 100;
      // this.handleStop();
      // 获取设备状态
      // this.getDeviceInfo();
      break;
      case 3001:
      case 3002:
      case 3003:
      case 3005: // 播放失败
      videoLoadingStatus = 100;
      // this.getDeviceInfo();
      this.checkNetWork();
      this.handleStop(this.playError);
      list[2].status = -1;
      this.setData({
        // playVideo: false,
        showVideoControls: false,
        videoNetWorkError: true,
        videoLoadingStatus: 100,
        list: list,
      })
      break;
      case -2301: // 经多次重连抢救无效，更多重试请自行重启播放
        videoLoadingStatus = 100;
        this.setData({
          // playVideo: false,
          showVideoControls: false,
          videoNetWorkError: true,
          videoLoadingStatus: 100,
        })
        break;
    }
    this.setData({
      videoLoadingStatus: videoLoadingStatus
    })
  },
  playError(){
    this.setData({
      showVideoControls: false,
      videoNetWorkError: true,
      videoLoadingStatus: 100,
    });
    // this.getPlayUrl();
    this.getDeviceInfo();
    this.getDeviceCoverInfo();
  },
  error(e) {
    console.log('live-player',e);
    console.error('live-player error:', e.detail.errMsg)
    if(e.detail.errCode == 10001){
      wx.showToast({
        title: '视频直播对讲需要你手机授权微信录音或麦克风权限',
        icon:'none',
        duration:3000,
      })
    }
  },
  onVideoTap(e){
    console.log("点击视频");
    const { deviceOffline,showVideoControls,panelStatus,videoNetWorkError} = this.data;
    if(deviceOffline || panelStatus === 4 || videoNetWorkError){
      return false;
    }
    if(showVideoControls){
      this.setData({
        showVideoControls: false,
      });
      clearTimeout(this.data.autoHideTimer);
    }else {
      this.setData({
        showVideoControls: true,
      })
      this.autoHideControl();
    }
  },
  tapPanel: function(event) {
    const { accessToken, deviceSerial, channelNo } = this.data;
    var tValue = event.currentTarget.dataset.value;
    var list = this.data.list;
    var panelStatus = this.data.panelStatus;
    switch (tValue) {
      case 'ptz':
        if(list[0].status === -1){
          return false;
        }
        panelStatus = 1;
        // list[0].status = 1;
        // list[1].status = 0;
        // list[2].status = 0;
        // list[3].status = 0;
        break;
      case 'voice':
        if(list[1].status === -1) {
          return false;
        }
        panelStatus = 2;
        this.getDefaultVoice();
        this.getCustomVoice();
        break;
      case 'mirror':
        if(list[2].status === -1){
          return false;
        }
        if(panelStatus === 3){
          panelStatus = 0;
          // list[0].status = 0;
          // list[1].status = 0;
          list[2].status = 0;
          // list[3].status = 0;
          this.sceneMirror(2);
        }else{
          panelStatus = 3;
          // list[0].status = 0;
          // list[1].status = 0;
          // list[2].status = 1;
          // list[3].status = 0;
          this.sceneMirror(2);
        }
        break;
      case 'cover':
        if(list[3].status === -1){
          return false;
        }
        if (panelStatus === 4){ // 镜头遮蔽中
          // panelStatus = 0;
          // list[0].status = 0;
          // list[1].status = 0;
          // list[2].status = 0;
          // list[3].status = 0;
          // this.getDeviceCapacity();
          this.sceneCover(0);
        }else{
          // panelStatus = 4;
          // list[0].status = 0;
          // list[1].status = 0;
          // list[2].status = 0;
          // list[3].status = 1;
          this.sceneCover(1);
        }
        break;
      default:
        panelStatus = 0;
    }
    this.setData({
      panelStatus: panelStatus,
      list: list
    })
  },
  startRecord(e){
    recorderManager.start(options)
  },
  stopRecord(e){
    recorderManager.stop()
  },
  handleBackPanel(event){
    var tValue = event.currentTarget.dataset.value;
    this.setData({
      panelStatus:0,
    })
  },
  handlePtzTouchStart(event){
    // var { offsetLeft, offsetTop } = event.currentTarget;
    // var {clientX,clientY} = event.touches[0];
    var { ptzStatus,ptzLoading } = this.data;
    // var centerLeft = 104 + offsetLeft;
    // var centerTop = 104 + offsetTop;
    // var left = clientX - centerLeft;
    // var top = clientY - centerTop;
    wx.createSelectorQuery().select('#ptz-img-container').boundingClientRect( (rect) => {
      let { clientX,clientY} = event.touches[0];
      let rectLeft = rect.left;
      let rectTop = rect.top;

      var centerLeft = 104 + rectLeft;
      var centerTop = 104 + rectTop;
      var left = clientX - centerLeft;
      var top = clientY - centerTop;

      console.log("点击了页面方位：pageY",clientY);
      console.log("云盘位置：top",rect.top);
      if(ptzLoading){
        wx.showToast({
          title: '操作过于频繁，建议长按转动',
          icon: 'none'
        })
        return false;
      }
      if(Math.abs(left) > Math.abs(top)){
        if(left>0){
          this.handlePtzControl(3);
          ptzStatus = 4;
        }else {
          ptzStatus = 3;
          this.handlePtzControl(2);
        }
      } else {
        if (top > 0) {
          ptzStatus = 2;
          this.handlePtzControl(1);

        } else {
          ptzStatus = 1;
          this.handlePtzControl(0);
        }
      }
      this.setData({
        ptzStatus: ptzStatus,
      })

    }).exec();
  },
  handlePtzTouchEnd(event) {
    let { clientX, clientY } = event.changedTouches[0];
    const _this = this;
    wx.createSelectorQuery().select('#ptz-img-container').boundingClientRect( (rect) => {
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
    this.setData({
      ptzStatus: 0,
    })
  },
  handlePtzControl(position,type){
    const { accessToken, deviceSerial, channelNo,ptzLoading } = this.data;
    let ptzLimit = '';
    const ptzTopImgSuccess = './images/yuntai/top.png';
    const ptzTopImgFailed  = './images/yuntai/top_limit.png';
    const ptzDownImgSuccess = './images/yuntai/down.png';
    const ptzDownImgFailed  = './images/yuntai/down_limit.png';
    const ptzLeftImgSuccess = './images/yuntai/left.png';
    const ptzLeftImgFailed  = './images/yuntai/left_limit.png';
    const ptzRightImgSuccess = './images/yuntai/right.png';
    const ptzRightImgFailed  = './images/yuntai/right_limit.png';
    const ptzNormalImg =  './images/yuntai/normal.png';
    let ptzStatus = this.data.ptzStatus;
    let currentPtzImg = this.data.currentPtzImg;
    var url = 'https://open.ys7.com/api/lapp/device/ptz/start';
    if(type == 'stop'){
      url = 'https://open.ys7.com/api/lapp/device/ptz/stop'
    }
    if(ptzLoading && type === 'start'){
      wx.showToast({
        title: '操作过于频繁，建议长按转动',
        icon: 'none'
      })
      return false;
    }

    this.setData({
      ptzLoading: true,
    })
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
          wx.showToast({
            title: res.data.msg,
            icon: 'none',
          })
        }
        if(type == 'stop'){
          ptzStatus = 0;
          currentPtzImg = ptzNormalImg;
        }else{
          switch(position){
            case 0:
              ptzStatus = 1;
              currentPtzImg = code == 200 ? ptzTopImgSuccess : ptzTopImgFailed;
              ptzLimit = code == 200 ? '' : 'top';
              break;
            case 1:
              ptzStatus = 2;
              currentPtzImg = code == 200 ? ptzDownImgSuccess : ptzDownImgFailed;
              ptzLimit = code == 200 ? '' : 'down';
              break;
            case 2:
              ptzStatus = 3;
              currentPtzImg = code == 200 ? ptzLeftImgSuccess : ptzLeftImgFailed;
              ptzLimit = code == 200 ? '' : 'left';
              break;
            case 3:
              ptzStatus = 4;
              currentPtzImg = code == 200 ? ptzRightImgSuccess : ptzRightImgFailed;
              ptzLimit = code == 200 ? '' : 'right';
              break;
            default:
              ptzStatus = 0;
              currentPtzImg = ptzTopImgSuccess;
              ptzLimit = '';
            }
          }
          this.setData({
            ptzStatus: ptzStatus,
            currentPtzImg: currentPtzImg,
            ptzLoading: false,
            ptzLimit: ptzLimit,
          });
      },
      error:(err) =>{
        this.setData({
          ptzLoading: false,
        })
      }
    })
  },
  screenShoot(e){
    const { playVideo,videoLoadingStatus  } = this.data;
    if(!playVideo || videoLoadingStatus != 100){
      console.log("非播放状态下点击截图");
      return false;
    }
    console.log("开始截图")
    // livePlayerContext.snapshot('raw');
    let that = this
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.writePhotosAlbum']) {
          that.saveImg();
        } 
        else if (res.authSetting['scope.writePhotosAlbum'] === undefined) {
          wx.authorize({
            scope: 'scope.writePhotosAlbum',
            success() {
              that.saveImg();
            },
            fail() {
              that.authConfirm()
            }
          })
        } 
        else {
          that.authConfirm()
        }
      }
    })
   
  },
  saveImg(){
    livePlayerContext.snapshot('raw')
    .then(data =>{
      console.log("data",data);
          if (data) {
            console.log(data)
            wx.saveImageToPhotosAlbum({
              filePath: data.tempImagePath,
              success(res) { 
                console.log("保存成功",res)
                wx.showToast({
                  title: '截图已保存至手机相册',
                  icon: 'none',
                })
              }
            })
          }
    })
    .catch(err => {
      console.log("err",err);
    })
  },
  // 授权拒绝后，再次授权提示弹窗
authConfirm(){
  let that = this
  wx.showModal({
    content: '您没打开保存图片权限，是否去设置打开？',
    confirmText: "确认",
    cancelText: "取消",
    success: function (res) {
      if (res.confirm) {
        wx.openSetting({
          success :(res) => {
            if (res.authSetting['scope.writePhotosAlbum']) {
              that.saveImg();
            }
            else {
              wx.showToast({
                title: '您没有授权，无法保存到相册',
                icon: 'none'
              })
            }
          }
        })
      } else {
        wx.showToast({
          title: '您没有授权，无法保存到相册',
          icon: 'none'
        })
      }
    }
  });
},
  // 镜头遮蔽
  sceneCover(enable) {
    var _this = this;
    let { deviceSerial, channelNo,accessToken,coverInterval,list,panelStatus,videoNetWorkError } = this.data;
    if(coverInterval){
      wx.showToast({
        title: '操作过于频繁',
        icon: 'none'
      })
      return false;
    }
    this.setData({
      coverInterval: true,
    })
    wx.request({
      url: 'https://open.ys7.com/api/lapp/device/scene/switch/set',
      method: 'POST',
      data: {
        accessToken: accessToken,
        deviceSerial: deviceSerial,
        channelNo: channelNo,
        enable: enable,
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success:(res) =>{
        console.log(res.data);
        if(res.data.code == 200){
          if(enable == 0){
            list[3].status = 0;
            panelStatus = 0;
            videoNetWorkError = false;
            this.getDeviceCapacity();
            this.handlePlay();
          }else {
            list[0].status = -1;
            list[1].status = -1;
            list[2].status = -1;
            panelStatus = 4;
            list[3].status = 1;
            // this.handleStop();
          }
          setTimeout(()=>{
            this.setData({
              coverInterval: false,
            });
          },5000)
          this.setData({
            videoNetWorkError: videoNetWorkError,
            list:list,
            panelStatus:panelStatus
          })
        }else {
          wx.showToast({
            title: res.data.msg,
            icon: 'none',
          })
          this.setData({
            coverInterval: false,
            panelStatus: panelStatus,
          });
        }
      },
      fail: (res)=>{
        wx.showToast({
          title: '网络异常',
          icon: 'none'
        })
        this.setData({
          coverInterval: false,
        });
      }
    });
  },
  // 镜象翻转
  sceneMirror(enable) {
    const { deviceSerial, channelNo,accessToken,mirrorInterval } = this.data;
    var _this = this;
    if(mirrorInterval) {
      wx.showToast({
        title: '操作过于频繁',
        icon: 'none'
      })
      return false;
    }
    this.setData({
      mirrorInterval: true,
    });
    wx.request({
      url: 'https://open.ys7.com/api/lapp/device/ptz/mirror', //仅为示例，并非真实的接口地址
      method: 'POST',
      data: {
        accessToken: accessToken,
        deviceSerial: deviceSerial,
        channelNo: channelNo,
        command: enable,
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success:(res) => {
        console.log(res.data);
        if(res.data.code == 200){
          setTimeout(()=>{
            this.setData({
              mirrorInterval: false,
            });
          },5000)
        }else {
          wx.showToast({
            title: res.data.msg,
            icon: 'none'
          })
          this.setData({
            mirrorInterval: false,
          });
        }
      },
      fail: (res)=>{
        wx.showToast({
          title: '网络异常',
          icon: 'none'
        })
        this.setData({
          mirrorInterval: false,
        });
      }
    })
  },
  playVoice(event){
    const { accessToken, deviceSerial, channelNo } = this.data;
    var { duration, voiceName,fileUrl } = event.currentTarget.dataset.value;
    var type = event.currentTarget.dataset.type;
    console.log("type",type)
    wx.request({
      url: 'https://open.ys7.com/api/lapp/voice/send', //仅为示例，并非真实的接口地址
      method: 'POST',
      data: {
        accessToken: accessToken,
        deviceSerial: deviceSerial,
        channelNo: channelNo,
        fileUrl: fileUrl,
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success:(res)=> {
        console.log(res.data);
        const { list } = this.data;
        if(res.data.code == 200){
          list[1].status = 1;
          this.setData({
            activeCustomVoiceName:  type === 'custom' ? voiceName : '',
            activeDefaultVoiceName: type === 'default' ? voiceName : '',
            list: list,
          });
          setTimeout(()=>{
            list[1].status = 0;
            this.setData({
              activeCustomVoiceName:  '',
              activeDefaultVoiceName: '',
              list: list,
            })
          },duration * 1000)
        }else if(res.data.code =='111012') { // 设备正忙
          wx.showToast({
            title: '操作中，请稍后再试',
            icon:'none',
          })
        }else if(res.data.code =='20007') { // 设备正忙
          wx.showToast({
            title: '设备不在线',
            icon:'none',
          })
        }else if(res.data.code =='20008') { // 设备正忙
          wx.showToast({
            title: '设备响应超时',
            icon:'none',
          })
        }else {
          wx.showToast({
            title: res.data.msg,
            icon:'none',
          })
        }
      },
      fail: (res)=>{
        wx.showToast({
          title: '网络异常',
          icon: 'none'
        })
      }
    })
  },
  speakStart(event){
    let recoderTime = this.data.recoderTime;
    this.setData({
      recoderTime: 59,
    })
    recorderManager.start(options);
    wx.showToast({
      icon: 'none',
      duration: 60000,
      image: './images/voice_talk4.png',
      title: '剩余' + recoderTime
    });

    this.data.recoderTimer = setInterval(()=>{
      // _this.setData({
      //   recoderTime: --recoderTime
      // },1000)
      if(recoderTime > 0){
        --recoderTime;
        wx.showToast({
          icon: 'none',
          duration: 60000,
          image: './images/voice_talk4.png',
          title: '剩余' + recoderTime
        });
        this.setData({
          recoderTime: recoderTime
        })
      }else {
        clearInterval(this.data.recoderTimer);
        this.speakEnd();
      }
      // console.log("recoderTime", recoderTime)
    },1000)
  },
  speakEnd(event) {
    wx.hideToast();
    let recoderTime = this.data.recoderTime;
    if(recoderTime >= 59){
      wx.showToast({
        title: '时间太短了',
        icon:'none',
      })
      recorderManager.stop();
      clearInterval(this.data.recoderTimer);
      return false;
    }else {
      wx.hideToast();
      recorderManager.stop();
      clearInterval(this.data.recoderTimer);
    }
  },
  tapDialogButton(e) {
    this.setData({
        dialogShow: false
    });
    this.pageBack();
  },
  pageBack() {
    const { scene } = this.data;
    console.log("scene",scene);
    // wx.showToast({
    //   title: `code ${scene}`,
    // })
    if([1007,1008,1036,1037,1038,1044].indexOf(scene) === -1){
      wx.navigateBack({
        delta: 1
      })
    } else {
      wx.reLaunch({
        url: '/pages/home/home',
      })
    }
  },
    /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function(res) {
    const { accessToken, deviceSerial, channelNo } = this.data;
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target);
      this.setData({
        panelStatus: 0,
      })
    }
    return {
      title: '小程序',
      path:  '/pages/live/live?accessToken=' + accessToken + '&deviceSerial='+ deviceSerial + '&channelNo=' + channelNo + '&scene=1007',
    }
  },
})
