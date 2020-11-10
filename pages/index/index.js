//index.js
//获取应用实例
const app = getApp();

Page({
  data: {
    list: [
      {
        id: 'face',
        name: '人脸识别',
        open: true,
        pages: [
          {
            name: '人脸检测',
            path: 'faceAnalysisDetect',
          },
          {
            name: '人脸比对',
            path: 'faceAnalysisCompare',
          },
          {
            name: '人脸分析',
            path: 'faceAnalysisDetect2',
          },
        ],
      },
      {
        id: 'man',
        name: '人形检测',
        open: false,
        pages: [
          {
            name: '人形检测',
            path: 'humanAnalysisDetect',
          },
        ],
      },
    ],
  },
  onLoad: function() {
    // wx.navigateTo({url: '../faceAnalysisCompare/faceAnalysisCompare'})
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {},
  kindToggle: function(e) {
    var id = e.currentTarget.id,
      list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open;
      } else {
        list[i].open = false;
      }
    }
    this.setData({
      list: list,
    });
  },
});
