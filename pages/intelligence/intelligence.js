/**
 * 智能接口示例页面
 */

const app = getApp();

// 示例图片加载提示时长
const DEMO_TIMEOUT = 1000;

import {
  ImageShow
} from '../component/imageShow/imageShow';
import {
  ImageList
} from '../component/imageList/imageList';
import {
  SELECT_IMAGE,
  INTELLIGENCE_REQUEST,
  INTELLIGENCE_REQUEST_SUCCESS,
  DEMO_RESULT,
  uploadImageForGetBase64,
} from '../common/common';


Page({
  /**
   * 页面的初始数据
   */
  data: {
    isShowResult: false,
    words: [],
    currentMode: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(`当前智能接口示例 => ${options.mode}`);
    this.setData({
      currentMode: options.mode,
    });
    new ImageShow(app);
    new ImageList();
    this.__imageList_set_images_mode(options.mode);
    this.__imageList_first_imagesUrl_tap();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},

  // 图片列表点击事件
  __imageList_item_tap_callback: function (imageListItemUrl) {
    const currentMode = this.data.currentMode;
    this.setData({
      words: [],
    });
    const me = this;
    // 图片展示组件设置图片URL
    this.__imageShow_set_imageShowUrl(
      imageListItemUrl
    );
    wx.showToast({
      title: '正在分析...',
      icon: 'loading',
      mask: true,
      duration: 60000,
    });
    setTimeout(function () {
      INTELLIGENCE_REQUEST_SUCCESS(DEMO_RESULT[currentMode][imageListItemUrl], currentMode, me.intelligenceSuccess);
    }, DEMO_TIMEOUT)
  },


  // 图片选择回调
  selectImageCallback: function (url) {
    const currentMode = this.data.currentMode;
    this.setData({
      words: [],
    });
    const me = this;
    // 图片展示组件设置图片URL
    this.__imageShow_set_imageShowUrl(url);
    wx.showToast({
      title: '正在上传...',
      icon: 'loading',
      mask: true,
      duration: 60000,
    });

    // 上传图片获取图片base64字符串
    uploadImageForGetBase64(
      url,
      function (res) {
        wx.showToast({
          title: '正在分析...',
          icon: 'loading',
          mask: true,
          duration: 60000,
        });
        if (res.ratio) {
          me.__imageShow_set_serverRatio(res.ratio);
        }

        // 调用智能接口
        INTELLIGENCE_REQUEST(currentMode, {
            image: res.data,
          },
          me.intelligenceSuccess,
          me.intelligenceFail
        );
      },
      function (msg) {
        wx.hideToast();
        wx.showModal({
          title: '',
          content: msg || '图片上传失败，请重新上传',
          showCancel: false,
        });
      }
    );
  },

  // 智能接口成功回调
  intelligenceSuccess: function (data) {
    wx.hideToast();
    if (data.array.length > 0) {
      this.setData({
        isShowResult: true,
        words: data.array,
      });
    }
    if (data.locations.length > 0) {
      this.__imageShow_set_locations(data.locations);
    }
    if (data.prompt) {
      wx.showToast({
        title: data.prompt,
        icon: 'none',
        duration: 2000,
      });
    }
  },

  // 智能接口失败回调
  intelligenceFail: function (msg) {
    wx.hideToast();
    wx.showModal({
      title: '',
      content: msg,
      showCancel: false,
    });
  },

  // 选择图片
  selectImageTap() {
    const currentMode = this.data.currentMode;
    const me = this;
    SELECT_IMAGE(currentMode, me.selectImageCallback, me.selectImageCallback, app.platform);
  },
});