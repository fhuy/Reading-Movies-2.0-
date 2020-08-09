// components/epsoide/epsoide.js
Component({
  properties: {
    index:{
      type: Number,
      // value:'...',
    },
    date: {
      type: String 
    }
  },

  /**
   * 页面的初始数据
   */
  data: {
    months:[
      '一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月',
      '十二月'
    ],
    year:Number,
    month:String,
  },

  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function () { 
      let monIndex = new Date().getMonth()
      this.setData({
        month: this.data.months[monIndex],
        year: new Date().getFullYear()
      })

    },
    moved: function () { },
    detached: function () { },
  },

  pageLifetimes: {
    // 组件所在页面的生命周期函数
    show: function () { 
    },
    hide: function () { },
    resize: function () { },
  }
})