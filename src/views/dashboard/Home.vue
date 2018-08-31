<template>
    <Modal>
      <Header/>
    </Modal>
</template>

<script>
import Header from './header/Header'
import Menu from './menu/Menu'
import Modal from './modal/Modal'
import Footer from './footer/Footer'

export default {
  data() {
    return {
      name: 'home'
    }
  },
  components: {
    Header,
    Menu,
    Modal,
    Footer
  }

}
</script>

<style>
</style>

