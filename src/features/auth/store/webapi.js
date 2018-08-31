import axios from 'axios'

const loginUser = async function (credential) {
  let config = {
    method: 'post',
    url: 'http://localhost:8181/api/v1/pharmacy/login',
    data: {
      email: credential.email,
      password: credential.password
    }
    }
  return axios.request(config)
}

export default {
    loginUser
}