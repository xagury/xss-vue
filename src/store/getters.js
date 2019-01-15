//数据的获取者

let getters = {
  loadingFlag: (state) => {
    return state.loadingFlag
  },
  total: (state) => {
    let total = {
      num: 0,
      price: 0
    }
    state.cars.forEach(item => {
      total.num += item.num
      total.price += item.num * item.price
    })
    return total
  },
  username: (state) => {
    return state.username[0]
  }
}

export default getters
