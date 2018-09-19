<template>
  <div @click="openModal = !openModal">
    <v-card class="card">
      <v-container>
        <v-layout row wrap>
              <div class="headline">Pedido</div>
        </v-layout>
      </v-container>
    </v-card>
    <modal-request :openModal="openModal"></modal-request>
  </div>
</template>

<script>
import modalRequest from './modal/modalRequest'
export default {
  name: 'RequestCard',
  data () {
    return {
      openModal: false,
      count: 0
    }
  },
  components: {
    modalRequest
  }
}
</script>

<style scoped>
li {
  margin-bottom: 5px;
  text-decoration-style: none;
}
.card{
  margin-bottom: 10px;
  border-radius: 5px !important;
}
</style>
