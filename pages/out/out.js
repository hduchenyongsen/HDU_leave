// pages/out/out.js
var util = require('../../utils/util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
      number:12,
      time:"",
      name: "刘学胜",
      schoolnumber: '172060110',
      reason_leave:"出去配眼镜，眼镜度数太小，看不清",
      date:"",
      counselor: "宋昱锋",
      url_sign: "../../image/172060110.jpg"
  },

  Countdown: function () {
    var that=this;
    var time = util.formatTime(new Date())
    this.setData({
      time: "当前时间：" + time
    })
    var timer = setTimeout(function () {
      that.Countdown();
    }, 1000);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    var current_date=util.current_date(new Date())
    this.setData({
      name: options.namedata,
      schoolnumber: options.numberdata,
      date:current_date,
      reason_leave: options.reason_leave,
      counselor:options.counselor,
      url_sign: "../../image/" + options.numberdata + ".jpg"
    })
    that.Countdown()
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