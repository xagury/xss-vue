//动作的触发者

import * as types from './const'
import router from '../router'
let actions = {
 
  initCar({
    commit
  }) {
    //当数据更新后进行初始化
    let cars = getCars();
    commit(types.SYNC_UPDATE, cars)
  },
  addCar({
    commit
  }, good) {
    console.log(good)
    setTimeout(() => {
      let cars = getCars();
      let isHas = cars.some(item => {
        if (item.id === good.id) {
          item.num++
          return true
        }
      })
      if (!isHas) {
        good.num = 1
        cars.push(good)
      }
      localStorage.cars = JSON.stringify(cars)
      commit(types.SYNC_UPDATE, cars)
    }, 200)
  },
  reduceCar({
    commit
  }, good) {
    setTimeout(() => {
      let cars = getCars();
      cars = cars.filter((item) => {
        if (item.id === good.id) {
          item.num--
          if (item.num <= 0) {
            return false
          }
        }
        return true
      })
      localStorage.cars = JSON.stringify(cars)
      commit(types.SYNC_UPDATE, cars)
    }, 200)
  },

  initUser({
    commit
  }) {
    //当数据更新后进行初始化
    let users = getUsers();
    commit(types.REGISTER, users)
  },
  register({
    commit
  }, user) {
    let users = getUsers();
    users.push(user)
    localStorage.users = JSON.stringify(users)
    commit(types.REGISTER, users)
    router.push('./loginPsd')
  },
  initUsername({
    commit
  }) {
    //当数据更新后进行初始化
    let username = getUsername();
    commit(types.STORAGE_USERNAME, username)
  },
  login({
    commit
  }, user) {
    let users = getUsers();
    let username = getUsername();
    users.forEach((item, index) => {
      if (item.username === user.username && item.password === user.password) {
        username.push(user.username)
        localStorage.username = JSON.stringify(username)
        commit(types.STORAGE_USERNAME, username)
        router.push('./my')
      }
    })
    commit(types.LOGIN, users)
  },
  logout({commit},username){
    localStorage.username = ''
    commit(types.LOGOUT, username)
  }
}

export default actions

function getCars() {
  return JSON.parse(localStorage.cars ? localStorage.cars : '[]')
}

function getUsers() {
  return JSON.parse(localStorage.users ? localStorage.users : '[]')
}

function getUsername() {
  return JSON.parse(localStorage.username ? localStorage.username : '[]')
}
