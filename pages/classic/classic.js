// pages/classic/classic.js
import { HTTP } from '../../utils/http'

let classic_HTTP = new HTTP();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    classic:null,
    title: "罗启瑞-《岁月神偷》"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let params = {
      url : 'classic/latest'     
    }
    classic_HTTP.request(params).then((data) => {
      this.setData({
        classic: data.data
      })
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

  },
  onNext: function() {
    if(this.data.classic.index === 1)
      return
    let params = {
      url: `classic/${this.data.classic.index}/previous`
    }
    console.log('之后url', params)
    classic_HTTP.request(params).then((data) => {
      this.setData({
        classic: data.data
      })
    })
  },
  onPrevious: function() {
    if(this.data.classic.index === 8)
      return
    let params = {
      url: `classic/${this.data.classic.index}/next`
    }
    console.log('先前url', params)
    classic_HTTP.request(params).then((data) => {
      this.setData({
        classic: data.data
      })
    })
  }
})