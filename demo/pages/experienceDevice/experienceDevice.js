//index.js
//获取应用实例
const app = getApp();
var accessToken = '';
const appKey = '此处填写您的appKey';
const appSecret = '此处填写您的appSerect';
Page({
  data: {
    list: [
      {
        id: 'sbmc',
        name: '测试设备AA',
        deviceSerial: '此处填写您的设备序列号',
        label: [
          "云台控制、",
          "语音播报"
        ],
        path: '',
        link: '/pages/live/live?accessToken=' + accessToken + '&deviceSerial=203751922&channelNo=1'
      },
    ],
    accessToken: accessToken,
  },
  onLoad: function () {
    this.getAccessToken();
  },
  // 获取token
  getAccessToken(device){
    const { list } = this.data;
    wx.request({
      url: 'https://open.ys7.com/api/lapp/token/get',
      method: 'POST',
      data: {
        appKey: appKey,
        appSecret: appSecret,
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success:(res) => {
        console.log(res.data)
        if(res.data.code == 200 && res.data.data){
          this.setData({
            accessToken: res.data.data.accessToken
          },()=>{
            // this.getDevicePoster('C21022143');
            this.getDevicePoster('203751922');
            this.getDeviceInfo('203751922','1');
          })
        }
      },
      fail: (err)=>{
        console.log(err);
      }
    })
  },
  getDeviceInfo(deviceSerial,channelNo){
    const { accessToken,list  } = this.data;
    var _this = this;
    var index = list.findIndex((value, index, arr) => {
      return value.deviceSerial === deviceSerial ;
    })
    wx.request({
      url: 'https://open.ys7.com/api/lapp/device/info',
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
          var result = res.data.data;
          list[index].name = result.deviceName
          list[index].link =  '/pages/live/live?accessToken=' + accessToken + '&deviceSerial=203751922&channelNo=1'
          _this.setData({
            list: list,
            })
          }
        }
      })
  },
  // 获取设备封面
  getDevicePoster(device){
    var list = this.data.list;
    var accessToken = this.data.accessToken;
    var _this = this;
    var index = list.findIndex((value, index, arr) => {
      return value.deviceSerial === device;
    })
    wx.request({
      url: 'https://open.ys7.com/api/lapp/device/capture', //仅为示例，并非真实的接口地址
      method: 'POST',
      data: {
        accessToken: accessToken,
        deviceSerial: device,
        channelNo: "1",
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success(res) {
        console.log(res.data)
        if(res.data.code == 200 && res.data.data){
          list[index]["path"] = res.data.data.picUrl;
          _this.setData({
            list:list
          })
        }
      }
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () { },
});
