<template>
  <b-col class="resume">
    <div class="box-icon">
    </div>
    <span>Pedidos entregues com sucesso</span>
  </b-col>
</template>

<script scoped>
export default {
  name: "PedidosEntregues",
  data() {
    return {};
  }
};
</script>

<style>
  .resume{
    display: inline-flex;
    align-items: center;
  }
  .box-icon{
    background: green;
    margin-right: 5px;
  }
</style>
