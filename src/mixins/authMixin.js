'use strict'

import { mapActions } from 'vuex'

export default {
  // data () {
  //   return {
  //     visibility: false,
  //     message: 'ola'
  //   }
  // },
  mounted () {
    this.handleLoginCheck()
  },
  // computed: {
  //   ...mapState('auth', ['isLogged'])
  // },
  // watch: {
  //   isLogged: function (isLogged) {
  //     this.loginPusher(isLogged)
  //   }
  // },
  methods: {
    ...mapActions('auth', ['handleLoginCheck']),
    // loginPusher: function (isLogged) {
    //   if (isLogged) {
    //     this.$router.push('/dashboard')
    //   } else {
    //    this.visibility = true
    //    this.message = 'Usuario não encontrado'
    //   }
    // }
  }
}
