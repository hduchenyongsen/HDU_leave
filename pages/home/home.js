// pages/home/home.js
var util = require('../../utils/util.js');

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

  turnto_out: function (event) {
    var that=this;
    wx.navigateTo({
      url: '../out/out?namedata=' + that.data.name + '&numberdata=' + that.data.schoolnumber + '&reason_leave=' + that.data.reason_leave + '&counselor=' + that.data.counselor
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    var time = util.currentTime(new Date())
    this.setData({
      time: time,
      name:options.namedata,
      schoolnumber:options.numberdata,
      reason_leave:options.reason_leave,
      counselor:options.counselor
    })

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