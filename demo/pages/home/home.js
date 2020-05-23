//index.js
//获取应用实例
const app = getApp();

Page({
  data: {
    list: [
      {
        id: 'experienceDevice',
        name: '试用设备',
        path: '../experienceDevice/experienceDevice',
        icon: './images/home_icon_try.png',
      },
      {
        id: 'deviceLive',
        name: '设备直播',
        path: '../preview/preview',
        icon: './images/home_icon_live.png',
      },
      {
        id: 'ai',
        name: 'AI识别',
        path: '../index/index',
        icon: './images/home_icon_ai.png',
      },
      {
        id: 'comingSoon',
        name: '敬请期待',
        path: '../comingSoon/comingSoon',
        icon: './images/home_icon_more.png',
        disabled: true
      },
    ],
  },
  onLoad: function () {

  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () { },
});
