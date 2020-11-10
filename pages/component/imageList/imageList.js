/**
 * 图片列表展示组件  ImageList
 */
import {
  FACE_IMAGES1
} from './faceImage1';

// 示例图片
const IMAGE = {
  // 人脸检测
  FACE_ANALYSIS_DETECT: ['https://img.ys7.com/group4/M00/64/89/CmFnglsHBCOAKM6FAACBkaR4BrY098.jpg', 'https://img.ys7.com/group4/M00/15/FD/CmFngVsHBJSAVZbcAABqrgDb6No639.jpg', 'https://img.ys7.com/group4/M00/64/99/CmFnglsHBKuABbo9AABwuNFqHo8895.jpg', 'https://img.ys7.com/group4/M00/64/9C/CmFnglsHBMCANddtAABeg2jo78k164.jpg', 'https://img.ys7.com/group4/M00/64/9E/CmFnglsHBMuAVe3EAAB1jMk0oCc269.jpg'],
  // 人脸分析
  FACE_ANALYSIS_DETECT2: ['https://img.ys7.com/group2/M00/59/DA/CmGCBVsJU_yAWvh-AAA9H_TChjY931.jpg','https://img.ys7.com/group2/M00/5A/AE/CmGCBVsJV_GANv70AABL7h6q9ME260.jpg','https://img.ys7.com/group2/M00/5A/BF/CmGCBVsJWAOANF7FAABExOYMUwI703.jpg', 'https://img.ys7.com/group2/M00/5A/D7/CmGCBFsJWBWACKkHAAA8EA0SEQ4665.jpg'],
  // 人形检测
  HUMAN_ANALYSIS_DETECT: ['https://img.ys7.com/group4/M00/55/56/CmFnglsGw_2AVMYaAASq4yGTAKE202.jpg', 'https://img.ys7.com/group4/M00/56/B3/CmFnglsGxsKAcQ1xAAHJeNxA0Jk205.jpg', 'https://img.ys7.com/group1/M00/22/02/CmFnMFsKOYuALPgfAANDxNHZEOI808.jpg'],
  // 人体属性
  HUMAN_ANALYSIS_BODY: ['https://img.ys7.com/group4/M00/09/A1/CmFngVsGy0SASlZeAANzWDzg6FY25.jpeg', 'https://img.ys7.com/group1/M00/07/8B/CmFnMFsJXWeAZSrPAAZuhvybidI675.jpg', 'https://img.ys7.com/group2/M00/03/F7/CmGCBVsGy_OARQyzAAMxk1ZPX_432.jpeg'],

  // OCR 相关接口
  // 身份证
  OCR_IDCARD: ['../images/idcard/1.jpg', '../images/idcard/2.jpg'],
  // 驾驶证
  OCR_DRIVERLICENSE: ['../images/driverlicense/1.jpg', '../images/driverlicense/2.jpg'],
  // 银行卡
  OCR_BANKCARD: ['../images/bank/1.jpg', '../images/bank/2.jpg'],
  // 行驶证
  OCR_VEHICLELICENSE: ['../images/vehiclelicense/1.jpg', '../images/vehiclelicense/2.jpg'],
  // 营业执照
  OCR_BUSINESSLICENSE: ['https://img.ys7.com/group3/M00/02/FF/CmFnEVsG3iWAMgXNAAJB0F_CToA054.jpg', 'https://img.ys7.com/group1/M00/9F/D6/CmFnMFsG3lSAPCuVAAJA0gD-Lu8831.jpg'],
  // 通用票据
  OCR_RECEIPT: [],
  // 通用文字
  OCR_GENERIC: ['../images/generic/1.jpg', '../images/generic/2.jpg'],

  // 车辆
  VEHICLE_ANALYSIS_PROPS: ['https://img.ys7.com/group3/M00/00/10/CmFnEFsGtc-AD69FAAK5bIrOlVc130.jpg', 'https://img.ys7.com/group4/M00/00/75/CmFngVsGthKAMd94AANnAJkaebk609.jpg'],
  // 车牌
  OCR_LICENSEPLATE: ['../images/licenseplate/1.jpg', '../images/licenseplate/2.jpg'],
};

// 组件数据
const _DATA = {
  '__imageList.images': [],
  '__imageList.imagesUrl': [],
};

// 组件事件
const _EVENT = {
  __imageList_item_tap: function (e) {
    this.__imageList_item_tap_callback &&
      this.__imageList_item_tap_callback(e.currentTarget.dataset.url);
  },
};

// 组件方法
const _METHOD = {
  __imageList_first_tap: function () {
    this.__imageList_item_tap_callback &&
      this.__imageList_item_tap_callback(this.data.__imageList.images[0]);
  },
  __imageList_first_imagesUrl_tap: function () {
    if (this.data.__imageList.imagesUrl.length > 0) {
      this.__imageList_item_tap_callback &&
        this.__imageList_item_tap_callback(this.data.__imageList.imagesUrl[0]);
    }
  },
  __imageList_second_tap: function () {
    this.__imageList_item_tap_callback &&
      this.__imageList_item_tap_callback(this.data.__imageList.images[1]);
  },
  __imageList_clear_images: function () {
    this.setData({
      '__imageList.images': [],
    });
  },
  __imageList_set_images: function (images) {
    this.setData({
      '__imageList.images': images,
    });
  },
  __imageList_set_images_mode: function (mode) {
    this.setData({
      '__imageList.imagesUrl': IMAGE[mode] || [],
    });
  },
  __imageList_set_images_1: function () {
    this.setData({
      '__imageList.images': FACE_IMAGES1,
    });
  },
};

class ImageList {
  constructor() {
    const pages = getCurrentPages();
    const curPage = pages[pages.length - 1];
    this._page = curPage;

    // 将事件方法挂载到页面对象上
    Object.assign(curPage, _EVENT, _METHOD);

    // 数据初始化
    curPage.setData(_DATA);

    curPage.imageList = this;
    return this;
  }
}

export {
  ImageList
};