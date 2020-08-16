import { HTTP } from '../utils/http'

class ClassicModel extends HTTP {
  // constructor() {

  // }

  getLastest(sCallback) {
    this.request({
      url: 'classic/latest',
      success: (res) => {
        sCallback(res)
      }
    })
  }
}

export { ClassicModel }