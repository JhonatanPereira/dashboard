<template>
  <b-col class="resume">
    <div class="box-icon">
    </div>
    <span>Pedidos perdidos</span>
  </b-col>
</template>

<script scoped>
export default {
  name: 'PedidosPerdidos',
  data () {
    return {}
  }
}
</script>

<style scoped>
  .resume{
    display: inline-flex;
    align-items: center;
  }
  .box-icon{
    background: orangered;
    margin-right: 5px;
  }
</style>
