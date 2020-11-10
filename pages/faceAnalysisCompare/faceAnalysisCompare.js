/**
 * 人脸检测
 * 调用接口，展示图片中的人脸位置
 */

const app = getApp();

import { ImageList } from '../component/imageList/imageList';
import {
  INTELLIGENCEMETHOD,
  uploadImageForGetBase64,
} from '../common/common';

Page({
  /**
   * 页面的初始数据
   */
  data: {
    showModal: false,
    imageUrl1: '',
    imageUrl2: '',
    currentSelect: 1,
    words: [],
    score: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    new ImageList();
    this.__imageList_set_images_1();
    this.__imageList_first_tap();
    this.__imageList_second_tap();
    this.startCompare();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {},

  // 图片列表点击事件
  // 左右图片轮回设置
  __imageList_item_tap_callback: function(url) {
    if (this.data.currentSelect === 1) {
      this.setData({
        currentSelect: 2,
        imageUrl1: 'data:image/jpg;base64,' + url,
      });
    } else {
      this.setData({
        currentSelect: 1,
        imageUrl2: 'data:image/jpg;base64,' + url,
      });
    }
  },
  // 人脸比对
  compare: function(data1, data2) {
    const me = this;
    INTELLIGENCEMETHOD.FACE_ANALYSIS_COMPARE(
      data1,
      data2,
      function(res) {
        wx.hideToast();
        const score = (res.data.score * 100).toFixed(0);
        const words = [`相似度: ${score}%`]
        me.setData({
          words: words,
          score: score,
        });
        me.showDialogBtn();
      },
      function(msg) {
        wx.hideToast();
        wx.showModal({
          content: msg,
          showCancel: false,
        });
      }
    );

    wx.showToast({
      title: '正在分析...',
      icon: 'loading',
      mask: true,
      duration: 60000,
    });
  },

  // 开始比对
  startCompare() {
    if (this.data.imageUrl1 === '' || this.data.imageUrl2 === '') {
      wx.showToast({
        title: '请先选择图片',
        icon: 'none',
        duration: 2000,
      });
      return;
    }
    const me = this;

    wx.showToast({
      title: '正在上传...',
      icon: 'loading',
      mask: true,
      duration: 60000,
    });

    let i = 0;
    let imageBase641;
    let imageBase642;
    function goCompare() {
      i++;
      if (i === 2) {
        me.compare(imageBase641, imageBase642);
      }
    }
    if (this.data.imageUrl1.indexOf('data:image/jpg;base64,') === 0) {
      imageBase641 = this.data.imageUrl1.replace('data:image/jpg;base64,', '');
      goCompare();
    } else {
      // 上传图片获取图片base64字符串
      uploadImageForGetBase64(
        this.data.imageUrl1,
        function(res) {
          if (res.ratio) {
            if(typeof me.__imageShow_set_serverRatio === 'function'){
              me.__imageShow_set_serverRatio(res.ratio);
            }
          }
          imageBase641 = res.data;
          goCompare();
        },
        function(msg) {
          wx.hideToast();
          wx.showModal({
            title: '',
            content: msg || '图片上传失败，请重新上传',
            showCancel: false,
          });
        }
      );
    }

    if (this.data.imageUrl2.indexOf('data:image/jpg;base64,') === 0) {
      imageBase642 = this.data.imageUrl2.replace('data:image/jpg;base64,', '');
      goCompare();
    } else {
      // 上传图片获取图片base64字符串
      uploadImageForGetBase64(
        this.data.imageUrl2,
        function(res) {
          imageBase642 = res.data;
          goCompare();
        },
        function(msg) {
          wx.hideToast();
          wx.showModal({
            title: '',
            content: msg || '图片上传失败，请重新上传',
            showCancel: false,
          });
        }
      );
    }
  },

  // 选择图片
  selectImageTap(e) {
    const id = e.currentTarget.dataset.id;
    const me = this;
    // 获取图片
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      success: res => {
        if (id === '1') {
          me.setData({
            imageUrl1: res.tempFilePaths[0],
          });
        } else {
          me.setData({
            imageUrl2: res.tempFilePaths[0],
          });
        }
      },
      fail: () => {},
    });
  },


  /**

   * 弹窗

   */

  showDialogBtn: function () {

    this.setData({

      showModal: true

    })

  },

  /**

   * 弹出框蒙层截断touchmove事件

   */

  preventTouchMove: function () {

  },

  /**

   * 隐藏模态对话框

   */

  hideModal: function () {

    this.setData({

      showModal: false

    });

  },

  /**

   * 对话框取消按钮点击事件

   */

  onCancel: function () {

    this.hideModal();

  },

  /**

   * 对话框确认按钮点击事件

   */

  onConfirm: function () {

    this.hideModal();

  }


});
