//数据的修改者
import * as types from './const'
let mutations = {
 
  [types.SYNC_UPDATE]: (state, newcars) => {
    state.cars = newcars
  },
  [types.REGISTER]: (state, users) => {
    state.users = users
  },
  [types.LOGIN]: (state, users) => {
    state.users = users
  },
  [types.STORAGE_USERNAME]: (state, username) => {
    state.username = username
  },
  [types.LOGOUT]: (state, username) => {
    state.username = username
  }
}

export default mutations
