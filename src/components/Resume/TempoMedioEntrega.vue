<template>
  <b-col class="resume">
    <div class="box-icon">
    </div>
    <span>Tempo médio de entrega</span>
  </b-col>
</template>

<script>

export default {
  name: 'MedioEntrega',
  data() {
    return {}
  }
}
</script>

<style scoped>
  .resume{
    display: inline-flex;
    align-items: center;
  }
  .discard{
    display: none;
  }
  .box-icon{
    background: orange;
    margin-right: 5px;
  }
</style>
