//index.js
//获取应用实例
const app = getApp();
let livePlayerContext;
Page({
  data: {
    videoSrc: 'rtmp://rtmp01open.ys7.com/openlive/f01018a141094b7fa138b9d0b856507b',
    defaultVideoSrc: 'rtmp://rtmp01open.ys7.com/openlive/f01018a141094b7fa138b9d0b856507b',
    playVideo: false,
    openSound: true,
    fullScreen: false,
    showVideoControls: true,
    objectFit: false,
    objectFitValue: 'fillCrop',
    focusInput: false,
  },
  onLoad: function () {
    livePlayerContext = wx.createLivePlayerContext('previewPlayer');
    this.setData({
      playVideo: true,
    })
  },
  onShow (options) {
    console.log("show")
    // Do something when show.
    this.checkNetWork();
  },
  checkNetWork(){
    const _this = this;
    wx.getNetworkType({
      success (res) {
        const networkType = res.networkType
        console.log(res.networkType);
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
  tapScan: function(){
    wx.scanCode({
      success: (res) => {
        console.log(res);
        const { result } = res;
        const reg = /^(rtmp:|https:\/\/flv)/;
        if(!reg.test(result)){
          wx.showToast({
            title: '地址不可用',
            icon:'none',
          })
          return false;
        }
        this.setData({
          videoSrc: res.result,
          playVideo: true,
        })
      },
      fail: ()=>{
        this.checkNetWork();
      }
    })
  },
  onFocus(event){
    console.log("点击");
    this.setData({
      focusInput: true,
    })
  },
  cancelFocus(event){
    console.log("点击");
    this.setData({
      focusInput: false,
      // videoSrc: defaultVideoSrc
    })
  },
  videoSrcConfirm(event){
    const { value } = event.detail;
    const reg = /^(rtmp:|https:\/\/flv)/;
    if(!reg.test(value)){
      wx.showToast({
        title: '地址不可用',
        icon:'none',
      })
      return ;
    }
    this.setData({
      videoSrc: value,
      focusInput: false,
    })

  },
  videoSrcInput(event){
    const { value } = event.detail;
    const reg = /^(rtmp:|https:\/\/flv)/;
    if(!reg.test(value)){
      wx.showToast({
        title: '地址不可用',
        icon:'none',
      })
      return ;
    }
    this.checkNetWork();
    this.setData({
      videoSrc: value,
    })
  },
  handlePlay(e){
    console.log("handelPlay",this.data.playVideo)
    var playVideo = this.data.playVideo;
    this.checkNetWork()
    if(playVideo){
      livePlayerContext.stop({
        success: ()=>{
          this.setData({
            playVideo: false,
            showVideoControls: true,
          })
        },
        fail: (error)=>{
          console.log("停止播放失败")
        }
      })
    } else {
      livePlayerContext.play({
        success: ()=>{
          this.setData({
            playVideo: true,
            showVideoControls: false,
            videoLoadingStatus: 100,
          });
          this.autoHideControl();
        },
        fail: (error)=>{
          console.log("开始播放失败");
          this.checkNetWork()
          this.setData({
            videoNetWorkError: true,
            videoLoadingStatus: 100,
          })
        }
      })
    }
  },
  handleStop(){
    livePlayerContext.stop({
      success: ()=>{
        this.setData({
          playVideo: false,
          showVideoControls: true,
          videoLoadingStatus: 0,
        })
      },
      fail: (error)=>{
        console.log("停止播放失败")
      }
    })
  },
  handleToggleSound(){
    const { openSound } = this.data;
    this.setData({
      openSound: !openSound,
    })
  },
  setObjectFit(){
    this.setData({
      objectFit: true,
    })
  },
  cancelObjectFit(){
    this.setData({
      objectFit: false,
    })
  },
  changeObjectFitValue(){
    let { objectFitValue } = this.data
    this.setData({
      objectFitValue: objectFitValue === 'contain' ? 'fillCrop': 'contain',
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
  autoHideControl(){
      setTimeout(()=>{
          this.setData({
            showVideoControls: false,
          })
      },5000);
  },
  onVideoTap(e){
    console.log("点击视频");
    var showVideoControls = this.data.showVideoControls;
    this.setData({
      showVideoControls: !showVideoControls,
    });
    this.autoHideControl();
  },
  handleSound(e){
    var openSound = this.data.openSound;
    this.setData({
      openSound: !openSound,
    })
  },
  statechange(e) {
    console.log('live-player code:', e.detail.code,e.detail);
    const { code } = e.detail;
    let videoLoadingStatus =0;
    let videoNetWorkError = false;
    switch (code){
      case 2007: //启动loading
        videoLoadingStatus = 0;
        break;
      case 2001: //连接服务器
        videoLoadingStatus = 20;
        break;
      case 2002: //已经连接 RTMP 服务器,开始拉流
        videoLoadingStatus = 40;
        break;
      case 2008: // 解码器启动
        break;
      case 2009: //视频分辨率改动
        break;
      case 2004: // 视频播放开始
        videoLoadingStatus = 80;
        break;
      case 2003: //网络接收到首个视频数据包(IDR)
      videoLoadingStatus = 100;
      this.setData({
        playVideo: true,
      })
      break;
      case 2103: //网络断连, 已启动自动重连（本小程序不自动重连）
      break;
      case 3001:
      case 3002:
      case 3003:
      case 3005: // 播放失败
      videoLoadingStatus = 100;
      this.checkNetWork();
      this.handleStop();
      this.setData({
        // playVideo: false,
        videoNetWorkError: true,
        videoLoadingStatus: 100,
      });
      wx.showToast({
        title: '当前网络异常',
        icon: 'none'
      })
      break;
      case -2301: // 经多次重连抢救无效，更多重试请自行重启播放
        videoLoadingStatus = 100;
        this.setData({
          // playVideo: false,
          videoNetWorkError: true,
          videoLoadingStatus: 100,
        })
        break;
    }
    this.setData({
      videoLoadingStatus: videoLoadingStatus,
      videoNetWorkError: videoNetWorkError
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () { },
  error(e) {
    console.log('live-player',e);
    console.error('live-player error:', e.detail.errMsg)
    if(e.detail.errCode == 10001){
      wx.showToast({
        title: '视频直播对讲需要你手机授权微信录音或麦克风权限',
        icon:'none',
        duration:3000
      });
    }
  },
});
