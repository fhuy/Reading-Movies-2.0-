// components/classic/music/music.js
Component({
  properties: {
    img: {
      type:String
    },
    motto: {
      type:String
    }    
  },

  /**
   * 页面的初始数据
   */
  data: {
    status: false,
    playingUrl: "images/player@playing.png",
    pauseUrl: "images/player@waitting.png"
  },

  methods: {
    onPlay: function() {
      this.setData({
        status: !this.data.status
      })
    }
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