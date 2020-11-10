App({
  onLaunch: function () {
    // const me = this;
    // wx.getSystemInfo({success:function(res){
    //   me.platform = res.platform
    // }});
    const me = this;
    wx.getSystemInfo({
      success: function(res){
        me.windowWidth = res.windowWidth;
        console.log(`系统宽度 => ${me.windowWidth}`)
      }
    })
  },
  platform: '',
  windowWidth: '',
})