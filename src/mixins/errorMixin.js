'use strict'
import { mapState } from 'vuex'

export default {
  data() {
    return {
      visibility: false,
      message: ''
    }
  },
  computed: {
    ...mapState('auth', ['isLogged'])
  },
  watch: {
    isLogged: function (isLogged) {
      console.log(isLogged)
      this.loginPusher(isLogged)
    }
  },
  methods: {
    loginPusher: function (isLogged) {
      if (isLogged) {
        this.$router.push('/home')
      } else {
        this.visibility = true
        this.message = 'Usuario não encontrado'
      }
    }
  }
}
