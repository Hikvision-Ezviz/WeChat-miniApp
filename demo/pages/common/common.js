// 开放平台接口调用次数限制
// 默认每十分钟上限3000次 每天上限50万次

const APPKEY = '471c96355ebe4f93a6f44d9861093747';
const SECRET = 'a67ddfaf28ddd90675e10b30c452b524';
const OPEN_DOMAIN = 'https://open.ys7.com';

// pb平台
// const APPKEY = 'adb4c0c5449948e481ca8ea753bb63a7';
// const SECRET = '6068db42bfa8029afc7ca4d2bf50c781';
// const OPEN_DOMAIN = 'https://pbopen.ys7.com';

// test平台
// const APPKEY = 'b3653652ab11415195ad39f08b6e62f5';
// const SECRET = '31906d48d24df6a77c92087c620f9d4e';
// const OPEN_DOMAIN = 'https://test.ys7.com';

const ERROR_CODE = {
  '60205': '接口调用超时'
}

// 缓存的 accesstoken 过期时间小于1小时的，重新获取accesstoken
const EXPIRE_DURATION = 3600000;
// 缓存的 key 名称
const ACCESSTOKEN_STORAGENAME = `${OPEN_DOMAIN}/ACCESSTOKEN2`;

// 图片转 base64 接口URL
const IMAGE_TO_BASE64 = '/uploadImageToBase64'
// 获取 accesstoken 接口URL
const GET_ACCESSTOKEN = '/api/lapp/token/get';

// 请求头设置
const HEADER = {
  'content-type': 'application/x-www-form-urlencoded',
};

const hasOwnProperty = function (obj, name) {
  return Object.prototype.hasOwnProperty.call(obj, name);
}

// 人体、OCR 图片宽高限制
const BODY_WIDTH = {
  MIN: 288,
  MAX: 4096,
};
const BODY_HEIGHT = {
  MIN: 288,
  MAX: 2160
}

// 车辆图片宽高限制
const VEHICLE_WIDTH = {
  MIN: 800,
  MAX: 3900,
}
const VEHICLE_HEIGHT = {
  MIN: 600,
  MAX: 2300
}

const GENDER = {
  male: '男',
  female: '女',
};

const BANK_TYPE = {
  '0': '不能识别',
  '1': '借记卡',
  '2': '信用卡',
};

// 智能接口URL
const INTELLIGENCE = {
  // 人脸检测
  FACE_ANALYSIS_DETECT: '/api/lapp/intelligence/face/analysis/detect',
  // 人脸分析 与人脸检测接口一样，参数不同
  FACE_ANALYSIS_DETECT2: '/api/lapp/intelligence/face/analysis/detect',
  // 人脸对比
  FACE_ANALYSIS_COMPARE: '/api/lapp/intelligence/face/analysis/compare',
  // 人形检测
  HUMAN_ANALYSIS_DETECT: '/api/lapp/intelligence/human/analysis/detect',
  // 人体属性
  HUMAN_ANALYSIS_BODY: '/api/lapp/intelligence/human/analysis/body',

  // OCR 相关接口
  // 身份证
  OCR_IDCARD: '/api/lapp/intelligence/ocr/idCard',
  // 驾驶证
  OCR_DRIVERLICENSE: '/api/lapp/intelligence/ocr/driverLicense',
  // 银行卡
  OCR_BANKCARD: '/api/lapp/intelligence/ocr/bankCard',
  // 行驶证
  OCR_VEHICLELICENSE: '/api/lapp/intelligence/ocr/vehicleLicense',
  // 营业执照
  OCR_BUSINESSLICENSE: '/api/lapp/intelligence/ocr/businessLicense',
  // 通用票据
  OCR_RECEIPT: '/api/lapp/intelligence/ocr/receipt',
  // 通用文字
  OCR_GENERIC: '/api/lapp/intelligence/ocr/generic',

  // 车辆
  VEHICLE_ANALYSIS_PROPS: '/api/lapp/intelligence/vehicle/analysis/props',
  // 车牌
  OCR_LICENSEPLATE: '/api/lapp/intelligence/ocr/licensePlate',
};

// 示例图片结果
const DEMO_RESULT = {
  // 人脸检测
  FACE_ANALYSIS_DETECT: {
    'https://img.ys7.com/group4/M00/64/89/CmFnglsHBCOAKM6FAACBkaR4BrY098.jpg': {
      "requestId": "9a837aab47974e908703a0c4e8f0e2bc",
      "data": {
        "faces": [{
          "faceToken": "FACE7cfea0a8Hfcd2I472cK86c0Hd6017d163ca5",
          "location": {
            "x": 153.0,
            "y": 60.0,
            "width": 54.0,
            "height": 60.0
          },
          "age": null,
          "gender": null,
          "glass": null
        }, {
          "faceToken": "FACEab078177H60deI4e72K9680Hc0f53f9d11d1",
          "location": {
            "x": 243.0,
            "y": 108.0,
            "width": 53.0,
            "height": 48.0
          },
          "age": null,
          "gender": null,
          "glass": null
        }, {
          "faceToken": "FACE090b32c7H48c6I4e0cKb837H128aa1ffb2ed",
          "location": {
            "x": 3.0,
            "y": 44.0,
            "width": 53.0,
            "height": 54.0
          },
          "age": null,
          "gender": null,
          "glass": null
        }, {
          "faceToken": "FACEef0f6b43H0d0dI4825Ka8cfH84d1d6a8b867",
          "location": {
            "x": 69.0,
            "y": 56.0,
            "width": 65.0,
            "height": 66.0
          },
          "age": null,
          "gender": null,
          "glass": null
        }]
      },
      "code": "200",
      "msg": "操作成功"
    },
    'https://img.ys7.com/group4/M00/15/FD/CmFngVsHBJSAVZbcAABqrgDb6No639.jpg': {
      "requestId": "2a041d362b77484ea0eaccc9b4a176bb",
      "data": {
        "faces": [{
          "faceToken": "FACE7143db21Hf2e6I4098K80d0H340a447ffdfe",
          "location": {
            "x": 38.0,
            "y": 60.0,
            "width": 68.0,
            "height": 72.0
          },
          "age": null,
          "gender": null,
          "glass": null
        }, {
          "faceToken": "FACEe9c2b2e1Hadd7I4585Kb961Hcbb451127492",
          "location": {
            "x": 233.0,
            "y": 144.0,
            "width": 62.0,
            "height": 63.0
          },
          "age": null,
          "gender": null,
          "glass": null
        }, {
          "faceToken": "FACE3a702e60H29e3I40edKbe90H7b179700c4b2",
          "location": {
            "x": 105.0,
            "y": 120.0,
            "width": 51.0,
            "height": 57.0
          },
          "age": null,
          "gender": null,
          "glass": null
        }, {
          "faceToken": "FACE3a9c840cHd28bI4cbeK9a67H3a09556575ad",
          "location": {
            "x": 168.0,
            "y": 147.0,
            "width": 62.0,
            "height": 63.0
          },
          "age": null,
          "gender": null,
          "glass": null
        }]
      },
      "code": "200",
      "msg": "操作成功"
    },
    'https://img.ys7.com/group4/M00/64/99/CmFnglsHBKuABbo9AABwuNFqHo8895.jpg': {
      "requestId": "2d243ab4186e46c5bb28c86c2e26f1ac",
      "data": {
        "faces": [{
          "faceToken": "FACE6feded2aHe8a1I46d8Kb97fH919a22d419fd",
          "location": {
            "x": 39.0,
            "y": 71.0,
            "width": 69.0,
            "height": 72.0
          },
          "age": null,
          "gender": null,
          "glass": null
        }, {
          "faceToken": "FACEbccaf8b5H35a1I4acdKb2eeHa92e2f8d36fa",
          "location": {
            "x": 125.0,
            "y": 135.0,
            "width": 57.0,
            "height": 60.0
          },
          "age": null,
          "gender": null,
          "glass": null
        }, {
          "faceToken": "FACE0c472867H8c15I45b2K949aH1c58b370ca48",
          "location": {
            "x": 198.0,
            "y": 87.0,
            "width": 51.0,
            "height": 54.0
          },
          "age": null,
          "gender": null,
          "glass": null
        }]
      },
      "code": "200",
      "msg": "操作成功"
    },
    'https://img.ys7.com/group4/M00/64/9C/CmFnglsHBMCANddtAABeg2jo78k164.jpg': {
      "requestId": "3dcf721295464583a64de6cf7a40083c",
      "data": {
        "faces": [{
          "faceToken": "FACEaa4fd20dHf300I4de6K8108H751f297634ff",
          "location": {
            "x": 74.0,
            "y": 93.0,
            "width": 48.0,
            "height": 57.0
          },
          "age": null,
          "gender": null,
          "glass": null
        }, {
          "faceToken": "FACE5b97a05aHe3a3I40b6K9083Ha528157e8588",
          "location": {
            "x": 162.0,
            "y": 78.0,
            "width": 42.0,
            "height": 45.0
          },
          "age": null,
          "gender": null,
          "glass": null
        }]
      },
      "code": "200",
      "msg": "操作成功"
    },
    'https://img.ys7.com/group4/M00/64/9E/CmFnglsHBMuAVe3EAAB1jMk0oCc269.jpg': {
      "requestId": "19ce92f50d8e40c49b20bc45695c4e2a",
      "data": {
        "faces": [{
          "faceToken": "FACE75fd44f9H1d75I47d9Ka31eH7c5c6c8f484e",
          "location": {
            "x": 63.0,
            "y": 122.0,
            "width": 51.0,
            "height": 53.0
          },
          "age": null,
          "gender": null,
          "glass": null
        }, {
          "faceToken": "FACE5fe3be25H6085I4dbeKa4c2H8a87c6e34e4b",
          "location": {
            "x": 144.0,
            "y": 92.0,
            "width": 62.0,
            "height": 66.0
          },
          "age": null,
          "gender": null,
          "glass": null
        }, {
          "faceToken": "FACEfe2eb221H5522I4051Kbe70Hb5fc10fe4858",
          "location": {
            "x": 15.0,
            "y": 183.0,
            "width": 45.0,
            "height": 47.0
          },
          "age": null,
          "gender": null,
          "glass": null
        }]
      },
      "code": "200",
      "msg": "操作成功"
    },
  },
  // 人脸分析
  FACE_ANALYSIS_DETECT2: {
    'https://img.ys7.com/group2/M00/59/DA/CmGCBVsJU_yAWvh-AAA9H_TChjY931.jpg': {"requestId":"e243f3bdb7094fd688e995a51365a141","data":{"faces":[{"faceToken":"FACE73b33caeH85e5I4c3aKbc2cH7e68d6588083","location":{"x":102.0,"y":77.0,"width":75.0,"height":75.0},"age":{"range":5,"value":32},"gender":{"confidence":0.78083,"value":"female"},"glass":{"confidence":0.989712,"has":false}}]},"code":"200","msg":"操作成功"},
    'https://img.ys7.com/group2/M00/5A/AE/CmGCBVsJV_GANv70AABL7h6q9ME260.jpg': {"requestId":"e89bb30b7651470f8c4ea446ee613ba8","data":{"faces":[{"faceToken":"FACE206b37c9Had2eI42fcKa606H303518b78eaa","location":{"x":107.0,"y":56.0,"width":78.0,"height":69.0},"age":{"range":5,"value":26},"gender":{"confidence":0.999992,"value":"male"},"glass":{"confidence":0.999208,"has":false}}]},"code":"200","msg":"操作成功"},
    'https://img.ys7.com/group2/M00/5A/BF/CmGCBVsJWAOANF7FAABExOYMUwI703.jpg': { "requestId": "63f3e81567f14f988fc65e3d5688cc08", "data": { "faces": [{ "faceToken": "FACE3ebf394dHe2f9I4d40K9e0dHe044aef425dc", "location": { "x": 114.0, "y": 95.0, "width": 90.0, "height": 90.0 }, "age": { "range": 5, "value": 6 }, "gender": { "confidence": 0.999996, "value": "male" }, "glass": { "confidence": 0.999881, "has": false } }] }, "code": "200", "msg": "操作成功" },
    'https://img.ys7.com/group2/M00/5A/D7/CmGCBFsJWBWACKkHAAA8EA0SEQ4665.jpg': { "requestId": "cea23a03557e42de8d8a4d07fc9ebb07", "data": { "faces": [{ "faceToken": "FACE45f853aeHe2abI4c88Kb870Hff699fc2d8ee", "location": { "x": 107.0, "y": 68.0, "width": 65.0, "height": 69.0 }, "age": { "range": 5, "value": 26 }, "gender": { "confidence": 0.996198, "value": "female" }, "glass": { "confidence": 0.991118, "has": false } }] }, "code": "200", "msg": "操作成功" },
  },
  // 人脸对比
  FACE_ANALYSIS_COMPARE: [],
  // 人形检测
  HUMAN_ANALYSIS_DETECT: {
    'https://img.ys7.com/group4/M00/55/56/CmFnglsGw_2AVMYaAASq4yGTAKE202.jpg': {
      "requestId": "f52a77493d0948a6a85bc84c35386d63",
      "data": {
        "locations": [{
          "x": 453.0,
          "y": 59.0,
          "width": 187.0,
          "height": 371.0
        }],
        "exists": true
      },
      "code": "200",
      "msg": "操作成功"
    },
    'https://img.ys7.com/group4/M00/56/B3/CmFnglsGxsKAcQ1xAAHJeNxA0Jk205.jpg': {
      "requestId": "10c93a225cb242479cd89783ce7ff4a9",
      "data": {
        "locations": [{
          "x": 275.0,
          "y": 246.0,
          "width": 98.0,
          "height": 322.0
        }],
        "exists": true
      },
      "code": "200",
      "msg": "操作成功"
    },
    'https://img.ys7.com/group1/M00/22/02/CmFnMFsKOYuALPgfAANDxNHZEOI808.jpg': {"requestId":"42483537c8b242828cf5ffa21db1a550","data":{"locations":[{"x":685.0,"y":400.0,"width":137.0,"height":277.0},{"x":479.0,"y":193.0,"width":244.0,"height":467.0}],"exists":true},"code":"200","msg":"操作成功"},
  },
  // 人体属性
  HUMAN_ANALYSIS_BODY: {
    'https://img.ys7.com/group4/M00/09/A1/CmFngVsGy0SASlZeAANzWDzg6FY25.jpeg': {
      "requestId": "e866599f55304a3da088c2e6a3d1c97f",
      "data": [{
        "jacetColor": {
          "val": "mixture",
          "des": "混色"
        },
        "ride": {
          "val": "no",
          "des": "不骑车"
        },
        "hat": {
          "val": "no",
          "des": "不戴帽子"
        },
        "bag": {
          "val": "no",
          "des": "不背包"
        },
        "trousersType": {
          "val": "shortTrousers",
          "des": "短裤"
        },
        "trousersColor": {
          "val": "blue",
          "des": "蓝"
        },
        "hairStyle": {
          "val": "shortHair",
          "des": "短发"
        },
        "things": {
          "val": "no",
          "des": "不拎东西"
        },
        "gender": {
          "val": "male",
          "des": "男"
        },
        "rect": {
          "x": 522.0007,
          "y": 161.9998,
          "width": 232.0,
          "height": 598.0001
        }
      }],
      "code": "200",
      "msg": "操作成功"
    },
    'https://img.ys7.com/group1/M00/07/8B/CmFnMFsJXWeAZSrPAAZuhvybidI675.jpg': {"requestId":"b8dc394d07394fc9a400ec8d9d26e0de","data":[{"jacetColor":{"val":"white","des":"白"},"ride":{"val":"no","des":"不骑车"},"hat":{"val":"no","des":"不戴帽子"},"bag":{"val":"yes","des":"背包"},"trousersType":{"val":"longTrousers","des":"长裤"},"trousersColor":{"val":"black","des":"黑"},"hairStyle":{"val":"shortHair","des":"短发"},"things":{"val":"no","des":"不拎东西"},"gender":{"val":"male","des":"男"},"rect":{"x":1068.0,"y":393.99976,"width":192.0,"height":372.00024}},{"jacetColor":{"val":"black","des":"黑"},"ride":{"val":"no","des":"不骑车"},"hat":{"val":"yes","des":"戴帽子"},"bag":{"val":"no","des":"不背包"},"trousersType":{"val":"longTrousers","des":"长裤"},"trousersColor":{"val":"black","des":"黑"},"hairStyle":{"val":"unknown","des":"未知"},"things":{"val":"no","des":"不拎东西"},"gender":{"val":"male","des":"男"},"rect":{"x":74.00064,"y":405.99994,"width":150.00064,"height":360.0001}},{"jacetColor":{"val":"black","des":"黑"},"ride":{"val":"no","des":"不骑车"},"hat":{"val":"no","des":"不戴帽子"},"bag":{"val":"no","des":"不背包"},"trousersType":{"val":"longTrousers","des":"长裤"},"trousersColor":{"val":"black","des":"黑"},"hairStyle":{"val":"unknown","des":"未知"},"things":{"val":"no","des":"不拎东西"},"gender":{"val":"female","des":"女"},"rect":{"x":300.0,"y":470.0,"width":116.0,"height":231.99995}},{"jacetColor":{"val":"black","des":"黑"},"ride":{"val":"no","des":"不骑车"},"hat":{"val":"no","des":"不戴帽子"},"bag":{"val":"yes","des":"背包"},"trousersType":{"val":"longTrousers","des":"长裤"},"trousersColor":{"val":"unknown","des":"未知"},"hairStyle":{"val":"shortHair","des":"短发"},"things":{"val":"no","des":"不拎东西"},"gender":{"val":"male","des":"男"},"rect":{"x":868.0,"y":403.99988,"width":150.00064,"height":362.0001}},{"jacetColor":{"val":"mixture","des":"混色"},"ride":{"val":"no","des":"不骑车"},"hat":{"val":"no","des":"不戴帽子"},"bag":{"val":"no","des":"不背包"},"trousersType":{"val":"longTrousers","des":"长裤"},"trousersColor":{"val":"black","des":"黑"},"hairStyle":{"val":"shortHair","des":"短发"},"things":{"val":"yes","des":"拎东西"},"gender":{"val":"male","des":"男"},"rect":{"x":596.0,"y":438.00034,"width":113.99936,"height":231.99995}},{"jacetColor":{"val":"black","des":"黑"},"ride":{"val":"no","des":"不骑车"},"hat":{"val":"no","des":"不戴帽子"},"bag":{"val":"unknown","des":"未知"},"trousersType":{"val":"longTrousers","des":"长裤"},"trousersColor":{"val":"black","des":"黑"},"hairStyle":{"val":"shortHair","des":"短发"},"things":{"val":"no","des":"不拎东西"},"gender":{"val":"male","des":"男"},"rect":{"x":213.99936,"y":438.00034,"width":56.0,"height":190.00017}},{"jacetColor":{"val":"black","des":"黑"},"ride":{"val":"yes","des":"骑车"},"hat":{"val":"unknown","des":"未知"},"bag":{"val":"no","des":"不背包"},"trousersType":{"val":"unknown","des":"未知"},"trousersColor":{"val":"unknown","des":"未知"},"hairStyle":{"val":"unknown","des":"未知"},"things":{"val":"unknown","des":"未知"},"gender":{"val":"male","des":"男"},"rect":{"x":262.00064,"y":457.99982,"width":61.99936,"height":157.99976}},{"jacetColor":{"val":"black","des":"黑"},"ride":{"val":"no","des":"不骑车"},"hat":{"val":"no","des":"不戴帽子"},"bag":{"val":"no","des":"不背包"},"trousersType":{"val":"longTrousers","des":"长裤"},"trousersColor":{"val":"black","des":"黑"},"hairStyle":{"val":"shortHair","des":"短发"},"things":{"val":"no","des":"不拎东西"},"gender":{"val":"male","des":"男"},"rect":{"x":790.0006,"y":412.0,"width":74.00064,"height":192.0002}},{"jacetColor":{"val":"black","des":"黑"},"ride":{"val":"no","des":"不骑车"},"hat":{"val":"no","des":"不戴帽子"},"bag":{"val":"no","des":"不背包"},"trousersType":{"val":"longTrousers","des":"长裤"},"trousersColor":{"val":"black","des":"黑"},"hairStyle":{"val":"shortHair","des":"短发"},"things":{"val":"no","des":"不拎东西"},"gender":{"val":"male","des":"男"},"rect":{"x":412.0,"y":558.00037,"width":74.00064,"height":149.99965}},{"jacetColor":{"val":"black","des":"黑"},"ride":{"val":"no","des":"不骑车"},"hat":{"val":"yes","des":"戴帽子"},"bag":{"val":"no","des":"不背包"},"trousersType":{"val":"longTrousers","des":"长裤"},"trousersColor":{"val":"black","des":"黑"},"hairStyle":{"val":"unknown","des":"未知"},"things":{"val":"no","des":"不拎东西"},"gender":{"val":"male","des":"男"},"rect":{"x":825.9994,"y":436.0003,"width":74.00064,"height":190.00017}},{"jacetColor":{"val":"black","des":"黑"},"ride":{"val":"no","des":"不骑车"},"hat":{"val":"no","des":"不戴帽子"},"bag":{"val":"no","des":"不背包"},"trousersType":{"val":"longTrousers","des":"长裤"},"trousersColor":{"val":"black","des":"黑"},"hairStyle":{"val":"shortHair","des":"短发"},"things":{"val":"no","des":"不拎东西"},"gender":{"val":"male","des":"男"},"rect":{"x":668.0,"y":432.00027,"width":56.0,"height":149.99965}}],"code":"200","msg":"操作成功"},
    'https://img.ys7.com/group2/M00/03/F7/CmGCBVsGy_OARQyzAAMxk1ZPX_432.jpeg': {
      "requestId": "bc48eaaee60f4c60b2822bf9d3a12696",
      "data": [{
        "jacetColor": {
          "val": "blue",
          "des": "蓝"
        },
        "ride": {
          "val": "no",
          "des": "不骑车"
        },
        "hat": {
          "val": "no",
          "des": "不戴帽子"
        },
        "bag": {
          "val": "no",
          "des": "不背包"
        },
        "trousersType": {
          "val": "shortTrousers",
          "des": "短裤"
        },
        "trousersColor": {
          "val": "blue",
          "des": "蓝"
        },
        "hairStyle": {
          "val": "shortHair",
          "des": "短发"
        },
        "things": {
          "val": "no",
          "des": "不拎东西"
        },
        "gender": {
          "val": "male",
          "des": "男"
        },
        "rect": {
          "x": 572.0,
          "y": 338.00034,
          "width": 120.0,
          "height": 314.00034
        }
      }],
      "code": "200",
      "msg": "操作成功"
    },
  },

  // OCR 相关接口
  // 身份证
  OCR_IDCARD: {
    '../images/idcard/1.jpg': {
      "requestId": "08c7761d93da4538a3577d0680f20d9c",
      "data": {
        "words": {
          "性别": "男",
          "姓名": "萤大宝",
          "住址": "浙江省杭州市滨江区阡陌路555号",
          "公民身份号码": "330122199801202323",
          "出生": "19980120",
          "民族": "汉"
        }
      },
      "code": "200",
      "msg": "操作成功"
    },
    '../images/idcard/2.jpg': {
      "requestId": "d450bcbc41fd472493117f51d39589b4",
      "data": {
        "words": {
          "性别": "男",
          "姓名": "萤小宝",
          "住址": "浙江省杭州市滨江区阡陌路555号",
          "公民身份号码": "330122199801202324",
          "出生": "19980120",
          "民族": "汉"
        }
      },
      "code": "200",
      "msg": "操作成功"
    },
  },
  // 驾驶证
  OCR_DRIVERLICENSE: {
    '../images/driverlicense/1.jpg': {
      "requestId": "cc5f7af9da734324a2e56f210ae57d72",
      "data": {
        "words": {
          "初次领证日期": "19790525",
          "性别": "男",
          "姓名": "萤小宝",
          "有效起始日期": "19790525",
          "证号": "332527197905250002",
          "住址": "浙江省杭州市滨江区阡陌路555号",
          "有效期限": "6年",
          "准驾车型": "C1",
          "国籍": "中国",
          "出生日期": "19790525"
        }
      },
      "code": "200",
      "msg": "操作成功"
    },
    '../images/driverlicense/2.jpg': {
      "requestId": "01aab7895831474aad871f71e7947526",
      "data": {
        "words": {
          "初次领证日期": "19790525",
          "性别": "男",
          "姓名": "萤大宝",
          "有效起始日期": "19790525",
          "证号": "332527197905250002",
          "住址": "浙江省杭州市滨江区阡陌路555号",
          "有效期限": "6年",
          "准驾车型": "C1",
          "国籍": "中国",
          "出生日期": "19790525"
        }
      },
      "code": "200",
      "msg": "操作成功"
    },
  },
  // 银行卡
  OCR_BANKCARD: {
    '../images/bank/1.jpg': {
      "requestId": "e5018c451f8c4c70ae383dc52ba66caa",
      "data": {
        "name": "中国建设银行",
        "number": "5201 1088 9999 9999",
        "type": 1
      },
      "code": "200",
      "msg": "操作成功"
    },
    '../images/bank/2.jpg': {
      "requestId": "256c5d5b20164a5a856c86902de94516",
      "data": {
        "name": "招商银行",
        "number": "6214 8358 6666 6666",
        "type": 1
      },
      "code": "200",
      "msg": "操作成功"
    },
  },
  // 行驶证
  OCR_VEHICLELICENSE: {
    '../images/vehiclelicense/1.jpg': {
      "requestId": "0703eccbccd8403f83e1ac2ee511c9e9",
      "data": {
        "words": {
          "号牌号码": "浙A12005",
          "发动机号码": "EW084211",
          "注册日期": "20140606",
          "住址": "浙江省杭州市滨江区阡陌路555号",
          "发证日期": "20140606",
          "车辆识别代号": "LJDKAA243E123450",
          "所有人": "萤小宝",
          "品牌型号": "起亚牌YQ27204A",
          "车辆类型": "小型轿车",
          "使用性质": "非营运"
        }
      },
      "code": "200",
      "msg": "操作成功"
    },
    '../images/vehiclelicense/2.jpg': {
      "requestId": "8ea94046aca248ac868a1cded3ea493f",
      "data": {
        "words": {
          "号牌号码": "浙A12004",
          "发动机号码": "EW084211",
          "注册日期": "20140606",
          "住址": "浙江省杭州市滨江区阡陌路555号",
          "发证日期": "20140606",
          "车辆识别代号": "LJDKAA243E123459",
          "所有人": "萤一宝",
          "品牌型号": "起亚牌YQ27204A",
          "车辆类型": "小型轿车",
          "使用性质": "非营运"
        }
      },
      "code": "200",
      "msg": "操作成功"
    },
  },
  // 营业执照
  OCR_BUSINESSLICENSE: {
    'https://img.ys7.com/group3/M00/02/FF/CmFnEVsG3iWAMgXNAAJB0F_CToA054.jpg': {
      "requestId": "acfa7644fa554b11a5151fd95dce7f27",
      "data": {
        "words": {
          "证件编号": "440304531381847",
          "单位名称": "浙江省钱塘江号技术股份有限公司",
          "社会信用代码": "440304531381847",
          "地址": "无",
          "成立日期": "2009年03月24日",
          "有效期": "无",
          "法人": "萤大石"
        }
      },
      "code": "200",
      "msg": "操作成功"
    },
    'https://img.ys7.com/group1/M00/9F/D6/CmFnMFsG3lSAPCuVAAJA0gD-Lu8831.jpg': {
      "requestId": "d099e5fcb2984cdba2b0706a96e6697a",
      "data": {
        "words": {
          "证件编号": "440306313810847",
          "单位名称": "浙江省钱塘江一号技术股份有限公司",
          "社会信用代码": "440304531381847",
          "地址": "无",
          "成立日期": "2009年03月24日",
          "有效期": "无",
          "法人": "萤小石"
        }
      },
      "code": "200",
      "msg": "操作成功"
    },
  },
  // 通用票据
  OCR_RECEIPT: {},
  // 通用文字
  OCR_GENERIC: {
    '../images/generic/1.jpg': {
      "requestId": "bc410eb35cc54c2baa6768efea4e9102",
      "data": {
        "words": ["燕子去了,有再来的时候;杨柳枯了,有再青的时候;", "桃花谢了,有再开的时候。但是,聪明的,你告诉我", "我们的日子为什么一去不复返呢?", "是有人偷了他", "们罢:那是谁?又藏在何处呢?是他们自己逃走了:现", "在又到了哪里呢?"]
      },
      "code": "200",
      "msg": "操作成功"
    },
    '../images/generic/2.jpg': {
      "requestId": "1c72bc16244645079ff29d359e338408",
      "data": {
        "words": ["我不知道他们给了我多少日子;但我的手确乎是渐渐空", "虚了。在默默里算着,八千多日子已经从我手中溜去;", "象针尖上一滴水滴在大海里,我的日子滴在时间的流里", ",没有声音也没有影子。我不禁头涔涔而泪潸潸了"]
      },
      "code": "200",
      "msg": "操作成功"
    },
  },

  // 车辆
  VEHICLE_ANALYSIS_PROPS: {
    'https://img.ys7.com/group3/M00/00/10/CmFnEFsGtc-AD69FAAK5bIrOlVc130.jpg': {
      "requestId": "85554682707f4b6087f5e9538101e74c",
      "data": [{
        "plateNumber": "浙AN257Y",
        "vehicleColor": {
          "val": "white",
          "des": "白"
        },
        "vehicleType": {
          "val": "vehicle",
          "des": "轿车"
        },
        "vehicleLogo": "奥迪",
        "vehicleSublogo": "奥迪-A6L",
        "vehicleModel": "奥迪-A6L-2016技术型",
        "rect": {
          "x": 338.00006,
          "y": 231.99983,
          "width": 671.99976,
          "height": 623.9995
        }
      }],
      "code": "200",
      "msg": "操作成功"
    },
    'https://img.ys7.com/group4/M00/00/75/CmFngVsGthKAMd94AANnAJkaebk609.jpg': {
      "requestId": "09578a45ce9b421eb5ec0a2e390a6a40",
      "data": [{
        "plateNumber": "浙A8723J",
        "vehicleColor": {
          "val": "red",
          "des": "红"
        },
        "vehicleType": {
          "val": "vehicle",
          "des": "轿车"
        },
        "vehicleLogo": "马自达",
        "vehicleSublogo": "马自达-Mazda3",
        "vehicleModel": "马自达-Mazda3-2014进口",
        "rect": {
          "x": 544.0003,
          "y": 337.9997,
          "width": 319.9997,
          "height": 256.00034
        }
      }],
      "code": "200",
      "msg": "操作成功"
    },
  },
  // 车牌
  OCR_LICENSEPLATE: {
    '../images/licenseplate/1.jpg': {
      "requestId": "94f91ab8e9be4dafa7fe76b936118920",
      "data": {
        "number": "浙A12301"
      },
      "code": "200",
      "msg": "操作成功"
    },
    '../images/licenseplate/2.jpg': {
      "requestId": "f0bcee1222e8496d85569de3e5a3feff",
      "data": {
        "number": "浙A12302"
      },
      "code": "200",
      "msg": "操作成功"
    },
  },
};

// 图片数据类型  0 图片URL  1 图片base64字符串  
// 小程序本地接口拿到的图片URL为临时地址，必须使用后台服务转为base64，再调用智能接口
// 目前小程序没有临时地址转base64的方法，后续如果有可以省去调后端接口转base64这一步骤
const DATA_TYPE = {
  URL: 0,
  BASE64: 1,
};

// 默认仅返回是否有人，可选属性列表
// number-返回具体人数，rect-返回检测的人形坐标数据，只能二选一
const HUMAN_OPERATION = {
  NUMBER: 'number',
  RECT: 'rect',
};

// 本地记录的 ACCESS_TOKEN 全局变量
let ACCESS_TOKEN;
// 获取本地 access_token 记录
const localData = wx.getStorageSync(ACCESSTOKEN_STORAGENAME);
// 本地缓存数据是否可用(存在并且过期时间大于当前时间超过1小时)
const isLocalDataOk =
  localData && localData.expireTime - Date.now() > EXPIRE_DURATION;
if (isLocalDataOk) {
  ACCESS_TOKEN = localData.accessToken;
} else {
  // 发起请求获取ACCESSTOKEN
  getAccessToken();
}

// 发起请求获取ACCESSTOKEN 并写入缓存
function getAccessToken() {
  wx.request({
    url: `${OPEN_DOMAIN}${GET_ACCESSTOKEN}`,
    method: 'POST',
    header: HEADER,
    data: {
      appKey: APPKEY,
      appSecret: SECRET,
    },
    success: res => {
      if (res.data.code === '200') {
        ACCESS_TOKEN = res.data.data.accessToken;
        // 写入缓存
        wx.setStorageSync(ACCESSTOKEN_STORAGENAME, res.data.data);
      } else {
        wx.showModal({
          title: '',
          content: '获取accesstoken失败',
          showCancel: false,
        });
      }
    },
  });
}


const INTELLIGENCE_REQUEST_HANDLER = function (res, mode, success, fail) {
  if (res.statusCode !== 200) {
    fail && fail('网络错误');
    return;
  }
  if (res.data.code !== '200') {
    switch (res.data.code) {
      case '60206':
        fail && fail('demo使用频繁，请稍后再试');
        break;
      default:
        fail && fail(res.data.msg);
        break;
    }

    return;
  }
  INTELLIGENCE_REQUEST_SUCCESS(res.data, mode, success);
}

const INTELLIGENCE_REQUEST_SUCCESS = function (data, mode, success) {
  let tempArray = [];
  let locations = [];
  let prompt = '';
  switch (mode) {
    // 人脸检测
    case 'FACE_ANALYSIS_DETECT':
      if (data.data.faces.length > 0) {
        for (let i of data.data.faces) {
          locations.push(i.location)
        }
      } else {
        prompt = '未检测到人脸';
      }
      break;
    // 人脸分析
    case 'FACE_ANALYSIS_DETECT2':
      const face = data.data.faces[0];
      tempArray.push(`性别: ${GENDER[face.gender.value]}`, `年龄: ${face.age.value}`, `眼镜: ${face.glass.has ? '有' : '无'}`,);
      break;
      // 人形检测
    case 'HUMAN_ANALYSIS_DETECT':
      if (data.data.exists) {
        locations = data.data.locations;
      } else {
        prompt = '未检测到人形';
      }
      break;
      // 车牌
    case 'OCR_LICENSEPLATE':
      tempArray.push(`车牌号: ${data.data.number}`);
      break;
    case 'OCR_BANKCARD':
      const name = data.data.name;
      const number = data.data.number;
      const type = data.data.type;
      const typeTxt = BANK_TYPE[type] || '不能识别';
      tempArray.push(`发卡行: ${name}`, `卡号: ${number}`, `银行卡类型: ${typeTxt}`);
      break;
    case 'OCR_DRIVERLICENSE':
    case 'OCR_VEHICLELICENSE':
    case 'OCR_IDCARD':
    case 'OCR_BUSINESSLICENSE':
      const words = data.data.words;
      for (var i in words) {
        tempArray.push(`${i}: ${words[i]}`);
      }
      break;
    case 'HUMAN_ANALYSIS_BODY':
      if (data.data.length > 0) {
        const human = data.data[0];
        const jacetColor = human.jacetColor.des;
        const ride = human.ride.des;
        const hat = human.hat.des;
        const bag = human.bag.des;
        const trousersType = human.trousersType.des;
        const trousersColor = human.trousersColor.des;
        const hairStyle = human.hairStyle.des;
        const gender = human.gender.des;
        tempArray.push(`上衣颜色: ${jacetColor}`, `是否骑车: ${ride}`, `是否背包: ${bag}`, `下装类型: ${trousersType}`, `下装颜色: ${trousersColor}`, `发型: ${hairStyle}`, `性别: ${gender}`);
        locations.push(human.rect);
      } else {
        tempArray.push('无结果');
      }
      break;
    case 'OCR_GENERIC':
    case 'OCR_RECEIPT':
      tempArray = data.data.words;
      break;
    case 'VEHICLE_ANALYSIS_PROPS':
      if (data.data.length > 0) {
        const vehicle = data.data[0];
        const vehicleColor = vehicle.vehicleColor.des;
        const vehicleType = vehicle.vehicleType.des;
        const vehicleSublogo = vehicle.vehicleSublogo;
        const vehicleModel = vehicle.vehicleModel;
        tempArray.push(`颜色: ${vehicleColor}`, `车型: ${vehicleType}`, `品牌: ${vehicleSublogo}`, `年款: ${vehicleModel}`);
      } else {
        tempArray.push('找不到车辆');
      }
      break;
    default:
      break;
  }
  success && success({
    array: tempArray,
    locations: locations,
    prompt: prompt,
  });
}

// 智能接口调用
const INTELLIGENCE_REQUEST = function (mode, opt, success, fail) {
  if (!INTELLIGENCE[mode]) {
    throw new Error('找不到对应的接口');
  }
  const data = {
    accessToken: ACCESS_TOKEN,
    dataType: opt.useUrl ? DATA_TYPE.URL : DATA_TYPE.BASE64,
    image: opt.image,
  };
  // 身份证使用人脸那一面
  if (mode === 'OCR_IDCARD') {
    data.front = true;
  }
  // 人形检测设置
  if (mode === 'HUMAN_ANALYSIS_DETECT') {
    data.operation = 'rect';
  }

  // 人脸检测
  if (mode === 'FACE_ANALYSIS_DETECT2') {
    data.operation = 'gender,age,glass';
  }

  wx.request({
    url: `${OPEN_DOMAIN}${INTELLIGENCE[mode]}`,
    data: data,
    header: HEADER,
    method: 'POST',
    dataType: 'json',
    success: res => {
      INTELLIGENCE_REQUEST_HANDLER(res, mode, success, fail);
    },
    fail: () => {
      fail && fail('网络错误');
    },
  });
}

const INTELLIGENCEMETHOD = {
  // 人脸对比
  FACE_ANALYSIS_COMPARE: function (data1, data2, success, fail) {
    const data = {
      accessToken: ACCESS_TOKEN,
      dataType: DATA_TYPE.BASE64,
      imageParam1: data1,
      imageParam2: data2,
    };
    wx.request({
      url: `${OPEN_DOMAIN}${INTELLIGENCE.FACE_ANALYSIS_COMPARE}`,
      data: data,
      header: HEADER,
      method: 'POST',
      dataType: 'json',
      success: res => {
        if (res.statusCode !== 200) {
          fail && fail('网络错误');
          return;
        }
        if (res.data.code !== '200') {
          fail && fail(res.data.msg);
          return;
        }
        success && success(res.data);
      },
      fail: () => {
        fail && fail('网络错误');
      },
    });
  },
}


// 上传图片文件，返回图片base64字符串
function uploadImageForGetBase64(url, success, fail) {
  wx.uploadFile({
    url: `${OPEN_DOMAIN}${IMAGE_TO_BASE64}`,
    filePath: url,
    name: 'file',
    success: res => {
      if (res.statusCode !== 200) {
        if(res.statusCode === 413){
          fail && fail('图片太大，请重新上传');
          return;
        }
        fail && fail('图片上传失败，请重新上传');
        return;
      }
      let response;
      try {
        response = JSON.parse(res.data);
      } catch (e) {
        fail && fail();
      }
      if (response.retcode === 0) {
        success && success(response);
      } else {
        fail && fail();
      }
    },
    fail: e => {
      fail && fail();
    },
  });
}

// 选择图片
function SELECT_IMAGE(currentMode, success, fail, platform) {
  // 获取图片
  wx.chooseImage({
    count: 1,
    sizeType: ['original'], // 取原图
    success: res => {
      const size = res.tempFiles[0].size;
      const userPic = res.tempFiles[0].path;
      wx.getImageInfo({
        src: userPic,
        success: function (res) {
          const {
            width,
            height
          } = res;
          if (width < BODY_WIDTH.MIN || height < BODY_HEIGHT.MIN) {
            wx.showModal({
              title: '',
              content: '图片分辨率太小，无法识别，请重新选择',
              showCancel: false,
            });
            return;
          }
          // // 图片如果大于2MB，提示图片过大
          // if (size / 1024 / 1024 >= 2) {
          //   if (platform !== 'ios') {
          //     // useCanvase(userPic, width, height, success)
          //     wx.showModal({
          //       title: '',
          //       content: '图片太大，请重新上传',
          //       showCancel: false,
          //     });
          //     return;
          //   }
          //   wx.showModal({
          //     title: '',
          //     content: '图片太大，请重新上传',
          //     showCancel: false,
          //   });
          //   // ios 使用canvas压缩
          //   // useCanvase(userPic, width, height, success)
          //   return;
          // }
          success(userPic);
        }
      })
    }
  })

}

// function useCanvase(userPic, width, height, success) {
//   let ratio = BODY_WIDTH.MIN / width;
//   let destWidth = ratio * width;
//   let destHeight = ratio * height;
//   if (destHeight < BODY_HEIGHT.MIN) {
//     ratio = BODY_HEIGHT.MIN / height;
//     destWidth = ratio * width;
//     destHeight = ratio * height;
//   }
//   console.log('ratio => ', ratio, 'destWidth => ', destWidth, 'destHeight => ', destHeight)


//   const canvasID = 'canvas';
//   const canvas = wx.createCanvasContext(canvasID)
//   // 1. 绘制图片至canvas
//   canvas.drawImage(userPic, 0, 0, width, height)
//   // 绘制完成后执行回调，API 1.7.0
//   canvas.draw(false, () => {
//     wx.canvasToTempFilePath({
//       x: 0,
//       y: 0,
//       width: width,
//       height: height,
//       destWidth: destWidth,
//       destHeight: destHeight,
//       fileType: 'jpg',
//       canvasId: canvasID,
//       success: function (res) {
//         success(res.tempFilePath);
//         console.log(res.tempFilePath)
//       }
//     })
//   })
// }



export {
  SELECT_IMAGE,
  DEMO_RESULT,
  INTELLIGENCE_REQUEST,
  INTELLIGENCE_REQUEST_SUCCESS,
  INTELLIGENCEMETHOD,
  uploadImageForGetBase64,
};