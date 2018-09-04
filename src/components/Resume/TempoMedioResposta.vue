<template>
  <b-col class="resume">
    <div class="box-icon">
    </div>
    <span>Tempo média de resposta</span>
  </b-col>
</template>

<script>

export default {
  name: 'MedioResposta',
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
  .discard{
    display: none;
  }
  .box-icon{
    background: skyblue;
    margin-right: 5px;
  }
</style>
