
import webapi from './webapi'
import localStorage from '@/helpers/localStorage'

const handleLoginCheck = async function ({ commit }) {
  let localCredentials = localStorage.getCredentials()
  if (localCredentials.status === 200) {
    commit('LOGIN_USER')
  } else {
    commit('LOGOUT_USER')
  }
}

const loginUser = async function ({ commit }, credential) {
  try {
    let result = await webapi.loginUser(credential)
    localStorage.setCredentials(result)
    commit('LOGIN_USER')
  } catch (error) {
    commit('LOGOUT_USER')
  }
}

export default {
  loginUser,
  handleLoginCheck
}