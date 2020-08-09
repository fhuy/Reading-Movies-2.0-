// components/navi/navi.js
Component({
  properties: {
    title: {
      type: String,
    },
    index: {
      type: Number
    }
  },
  data: {
    left: '/components/navi/images/triangle@left.png',
    disleft: '/components/navi/images/triangle.dis@left.png',
    right: '/components/navi/images/triangle@right.png',
    disright: '/components/navi/images/triangle.dis@right.png',
    unleft: false,
    unright: false 
  },
  observers: {
    'index'() {
      // console.log('监听', this.data.index)
      console.log('监听')
      console.log(this.data.index)
      // if(this.data.index === 1) {
      //   this.data.unright = true
      // }else if(this.data.index === 8) {
      //   this.data.unleft = true
      // }
    } 
  },
  pageLifetimes: {
    show: function() {
      // 页面被展示
      console.log('indexindex', this.data.index)
    },
    hide: function() {
      // 页面被隐藏
    },
    resize: function(size) {
      // 页面尺寸变化
    }
  },

  methods: {
    onLeft() {
      this.triggerEvent('left', {}, {})
    },
    onRight() {
      this.triggerEvent('right', {}, {})
    },
    periodical(index, type) {
      HTTP.request(params).then((data) => {
        this.setData({
          classic: data.data
        })
      })
    }
    // onNext() {

    // }
  }
})