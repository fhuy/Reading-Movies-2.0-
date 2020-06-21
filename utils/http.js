import { config } from '../config.js'

class HTTP {
  constructor() {
    this.baseRestUrl = config.api_blink_url
  }
  request(params) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: this.baseRestUrl+params.url+`?appkey=${config.appkey}`,
        success: (res) => resolve(res),
        fail: (res) => reject(res)
      })
    })
  }
}

export { HTTP };