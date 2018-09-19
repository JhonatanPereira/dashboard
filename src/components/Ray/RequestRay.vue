<template>
    <v-flex lg4>
      <h5>Novos Pedidos</h5>
      <vue-perfect-scrollbar class="scroll-area" :settings="scrollSettings">
          <request-card/>
          <request-card/>
          <request-card/>
          <request-card/>
          <request-card/>
          <request-card/>
          <request-card/>
          <request-card/>
          <request-card/>
      </vue-perfect-scrollbar>
    </v-flex>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import RequestCard from './cardRequest/RequestCard'

export default {
  name: 'RequestRay',
  components: {
    VuePerfectScrollbar,
    RequestCard
  },
  data () {
    return {
      scrollSettings: {
        maxScrollbarLength: 160
      },
    }
  },
};
</script>

<style scoped>

.scroll-area {
  position: relative;
  margin-left:0;
  margin-right: 50px;
  margin-top: 10px;
  height: 70vh;
  padding: 15px;
}
ul{
  text-decoration-style: none;
}
</style>
