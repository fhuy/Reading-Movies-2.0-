Component({
  properties: {
    like: {
      type: Boolean
    },
    count: {
      type: Number
    }
  },
  data: {
    yesSrc: 'images/like.png',
    noSrc: 'images/like@dis.png'
  },
  methods: {
    onLike: function(e){
      let like = this.properties.like,
          count = this.properties.count;
      count = like? count - 1 : count + 1;
      this.setData({
        like: !like,
        count: count
      })
    }
  }
});