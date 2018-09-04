
const LOGIN_USER = function (state, obj) {
    state.isLogged = true
  }
  
  const LOGOUT_USER = function (state, obj) {
    state.isLogged = false
  }

  export default {
    LOGOUT_USER,
    LOGIN_USER
  }
  