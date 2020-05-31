// pages/codes/codes.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url: "https://pan.baidu.com/s/11k4dR7z2oy4HWt-EoTdWfQ 提取码：opez"
  },

  onClick: function (e) {
    var that = this;
    wx.setClipboardData({
      //准备复制的数据
      data: that.data.url,
      success: function (res) {
        wx.showToast({
          title: '复制成功',
        });
      }
    });
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