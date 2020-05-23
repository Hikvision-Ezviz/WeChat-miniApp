//index.js
//获取应用实例
const app = getApp();

Page({
  data: {
    list: [
      {
        id: 'keting',
        name: '客厅',
        label: [
          "画面翻转"
        ],
        path: '../live/live?videoId=keting',
      },
      {
        id: 'sbmc',
        name: '设备名称',
        label: [
          "云台控制、",
          "语音播报"
        ],
        path: '../live/live?videoId=keting',
      }
    ],
    disabled: true,
    deviceValue: '',
    tokenValue: '',
  },
  onLoad: function () {

  },
  deviceInput(event){
    console.log("event",event);
    const { value } = event.detail;
    const deviceReg =  /[A-Z0-9]{9}:[0-9]{1,2}/;
    if(deviceReg.test(value)){
      if(this.data.tokenValue.length === 64){
        this.setData({
          disabled: false,
        })
      }
    }else {
      this.setData({
        disabled: true,
      })
    }
  },
  deviceBlur(event){
    const { value } = event.detail;
    const deviceReg =  /[A-Z0-9]{9}:[0-9]{1,2}/;
    if(deviceReg.test(value)){
    this.setData({
      deviceValue: value
    })
  }else {
    wx.showToast({
      title: '设备序列号格式不正确',
      icon: 'none'
    })
  }
  },
  tokenBlur(event){
    const { value } = event.detail;
    const deviceReg =  /[A-Z0-9]{9}:[0-9]{1,2}/;
    if(value.length === 64){
    this.setData({
      tokenValue: value
    })
  }else {
    wx.showToast({
      title: 'accessToken格式不正确',
      icon: 'none'
    })
  }
  },
  tokenInput(event){
    console.log("evnent2",event);
    const { value } = event.detail;
    const { deviceValue } = this.data;
    const deviceReg =  /[A-Z0-9]{9}:[0-9]{1,2}/;
    if(value.length === 64){
      if(deviceReg.test(deviceValue)){
        this.setData({
          disabled: false,
        })
      }
    }else {
      this.setData({
        disabled: true,
      })
    }
  },
  goToLive(){
    if(this.data.disabled){
      return false;
    }
    const { deviceValue,tokenValue } = this.data;
    let deviceSerial = deviceValue.split(':')[0];
    let channelNo = deviceValue.split(':')[1];
    wx.navigateTo({
      url: '/pages/live/live?accessToken=' + tokenValue + '&deviceSerial='+ deviceSerial + '&channelNo=' + channelNo,
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () { },
});
