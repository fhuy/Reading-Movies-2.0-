import { classBehavior } from '../classic-beh'

let mMgr = wx.getBackgroundAudioManager()

Component({
  behaviors: [classBehavior],
  properties: {
    src: String,
    title: String
  },

  /**
   * 页面的初始数据
   */
  data: {
    status: false,
    playingUrl: 'images/player@playing.png',
    pauseUrl: 'images/player@waitting.png'
  },

  methods: {
    onPlay: function (event) {
      if(!this.data.playing) {
        this.setData({
          playing: true
        })
        if(mMgr.src === this.properties.src) {
          mMgr.play()
        }
        else {
          mMgr.src = this.properties.title 
        }
      } else {
        this.setData({
          playing: false
        })
        mMgr.pause()
      }
    },

    _recoverPlaying: function() {
      if(mMgr.paused) {
        thia.setData({
          playing: false
        })
        return
      }
      if(mMgr.src === this.properties.src) {
        if(!mMgr.pause) {
          this.setData({
            playing: true
          })
        }
      }
    },

    _monitorSwitch: function() {
      mMgr.onPlay(() => {
        this._recoverPlaying()
      })
      mMgr.onPause(() => {
        this._recoverPlaying()
      })
      mMgr.onStop(() => {
        this._recoverPlaying()
      })
      mMgr.onEnded(() => {
        this._recoverPlaying()
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
});