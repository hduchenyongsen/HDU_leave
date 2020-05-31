// pages/inform/inform.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"刘学胜",
    schoolnumber:"172060110",
    reason_leave:"出去配眼镜，眼镜度数太小，看不清",
    counselor:"宋昱锋"
  },

  turnto_home: function (event) {
    var that=this;
    wx.navigateTo({
      url: '../home/home?namedata='+that.data.name+'&numberdata='+that.data.schoolnumber+'&reason_leave='+that.data.reason_leave+'&counselor='+that.data.counselor
    })
  },

  turnto_codes: function (event) {
    var that = this;
    wx.navigateTo({
      url: '../codes/codes'
    })
  },

  change_name:function(e){
    this.setData({
      name: e.detail.value
    })
  },

  change_schoolnumber: function (e) {
    this.setData({
      schoolnumber: e.detail.value
    })
  },

  change_counselor: function (e) {
    this.setData({
      counselor: e.detail.value
    })
  },

  change_leave: function (e) {
    this.setData({
      reason_leave: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})