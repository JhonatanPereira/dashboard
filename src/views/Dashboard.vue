<template>
  <div id="er" class="animated fadeIn">
    <b-container class="container-fluid">
      <b-row>
        <b-col>Novos pedidos</b-col>
        <b-col>Em analise</b-col>
        <b-col>Entrega</b-col>
        <b-col>Finalizado</b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import rodape from '@/containers/Footer'
export default {
  name: 'dashboard',
  data () {
    return {
        
    }
  },
  components: {
    rodape
  }
}
</script>

<style scoped>
  #er{
  }
</style>
