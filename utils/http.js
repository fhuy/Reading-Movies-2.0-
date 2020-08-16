import { config } from '../config.js'
const tips = {
  1: '抱歉，出现错误',
  401: 'appKey有误',
  404: 'Not Found',
  1007: '请求不存在',
  3000: '期刊不存在'
}

class HTTP {
  constructor() {
    this.baseRestUrl = config.api_blink_url
  }

  request(params) {
    // return new Promise((resolve, reject) => {
      console.log('看看params', params)
      let url = this.baseRestUrl + params.url;
      if (!params.method) {
        params.method = 'GET';
      }
      wx.request({
        url: url,
        data: params.data,
        method: params.method,
        // success: (res) => resolve(res),
        header: {
          'content-type': 'application/json',
          'appkey':config.appkey
        },
        success: (res) => {
          console.log('返回数据', res)
          console.log('返回params', params)
          let code = res.statusCode.toString();
          let startCode = code.charAt(0);
          // if(code.startsWith('2'))   tip
          if (startCode === '2') {
            // console.log('params.success(res.data)', params.success(res.data))
            params.success && params.success(res.data);
          } else {
            // let error_code = res.statusCode;
            let error_code = res.data.error_code;
            this._show_error(error_code);
            // params.error && params.error(res);
          }
        },
        fail: (err) => {
          this._show_error(1);
          // params.fail && params.fail(err)
        }
      })
    // })
  }

  _show_error(error_code) {
    if(!error_code) {
      error_code = 1
    }
    wx.showToast({
      title: tips[error_code],
      icon: 'none',
      duration: 2000
    })
  }
}

export { HTTP };