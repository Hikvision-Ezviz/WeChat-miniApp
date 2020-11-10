/**
 * 人脸检测展示组件  ImageShow
 */

// 图片显示宽度为 200 若修改需要将css中的样式同步修改
const IMAGE_SHOW_WIDTH = 200;
// 示例图片宽度为 300 设置默认显示比率
const IMAGE_SHOW_RATIO = 200 / 300;

// 服务端压缩比
const SERVER_RATIO = 1;

let isNewLocations = false;
let isCalculated = false;

// 服务端压缩比
let serverRatio = 1;
// 缩放比
let imageShowRatio = 1;
// 横向贴边，向下移动距离
let padTop = 0;
// 纵向贴边，向右移动距离
let padLeft = 0;

// 位置信息临时存储
let locationsData = []

// 数据转换
function convertToStyle(location) {
  return {
    top: location.y * imageShowRatio * serverRatio + padTop + 'px',
    left: location.x * imageShowRatio * serverRatio + padLeft + 'px',
    width: location.width * imageShowRatio * serverRatio + 'px',
    height: location.height * imageShowRatio * serverRatio + 'px',
  };
}

// 组件数据
const _DATA = {
  '__imageShow.locations': [],
  '__imageShow.imageShowUrl': '',
};

// 组件事件
const _EVENT = {
  __imageShow_imageLoad: function (e) {

  }
};

// 组件方法
const _METHOD = {
  __imageShow_clear_locations: function () {
    this.setData({
      '__imageShow.locations': [],
    });
  },
  __imageShow_doSet_locations: function(l){
    const locations = [];
    for (let i of l) {
      locations.push(convertToStyle(i));
    }
    this.setData({
      '__imageShow.locations': locations,
    });
  },
  __imageShow_set_locations: function (l) {
    locationsData = l;
    console.log('设置位置信息')
    isNewLocations = true;
    if(isCalculated){
      console.log('已经计算好压缩比，执行设置篮框')
      this.__imageShow_doSet_locations(l);
    }
  },
  __imageShow_clear_imageShowUrl: function (imageShowUrl) {
    this.setData({
      '__imageShow.imageShowUrl': '',
    });
  },
  __imageShow_set_imageShowUrl: function (imageShowUrl) {
    console.log('设置新的图片URL');
    console.log('重置')
    isNewLocations = false;
    isCalculated = false;
    locationsData = [];
    serverRatio = 1;
    padTop = 0;
    padLeft = 0;
    this.setData({
      '__imageShow.imageShowUrl': imageShowUrl,
      '__imageShow.locations': [],
    });
    const me = this;
    wx.getImageInfo({
      src: imageShowUrl,
      success: function (res) {
        const originWidth = res.width;
        const originHeight = res.height;
        const windowWidth = me.imageShow.app.windowWidth;
        const showHeight = 260;
        console.log(`图片原始宽度 => ${originWidth}  图片原始高度 => ${originHeight}`)
        console.log(`图片显示区域宽度 => ${windowWidth}  图片显示区域高度 => ${showHeight}`)
        if (!windowWidth) {
          console.log('无法获取系统宽度');
        }

        if (originWidth / originHeight > windowWidth / showHeight) {
          imageShowRatio = windowWidth / originWidth;
          padTop = (showHeight - (originHeight / originWidth) * windowWidth) / 2;
          console.log(`图片的宽高比大于显示区域的宽高比,图片横向贴边.向下移动距离 => ${padTop} imageShowRatio => ${imageShowRatio}`);
        } else {
          imageShowRatio = showHeight / originHeight;
          padLeft = (windowWidth - (originWidth / originHeight) * showHeight) / 2;
          console.log(`图片的宽高比不大于显示区域的宽高比,图片纵向贴边.向右移动距离 => ${padLeft} imageShowRatio => ${imageShowRatio}`);
        }
        
        isCalculated = true;
        // 如果现在有数据，重新渲染一次
        if(isNewLocations){
          console.log('当前有位置信息，重新渲染')
          me.__imageShow_doSet_locations(locationsData)
        }
        
      },
      fail: function (e) {
        console.log(e);
      },
    });
  },
  // 手动设置显示比例
  __imageShow_set_imageShowRatio: function (ratio) {
    imageShowRatio = ratio;
  },
  // 设置服务端图片压缩比
  __imageShow_set_serverRatio: function (ratio) {
    serverRatio = ratio;
    console.log(`设置服务端压缩比 => ${serverRatio}`)
  },
};

class ImageShow {
  constructor(app) {
    this.app = app;
    const pages = getCurrentPages();
    const curPage = pages[pages.length - 1];
    this._page = curPage;

    // 将事件方法挂载到页面对象上
    Object.assign(curPage, _EVENT, _METHOD);

    // 数据初始化
    curPage.setData(_DATA);

    curPage.imageShow = this;
    return this;
  }
}

export {
  ImageShow
};