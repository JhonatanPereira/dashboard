<template>
  <div id="app">
    <div class="perfil">
      <b-img rounded="circle" blank width="120" height="120" blank-color="#777" alt="img" class="m-1" />
      <p><b>Nome da farmacia</b></p>
    </div>
    <div id="menu">
      <b-nav vertical class="text">
        <b-nav-item href="ola">Geral</b-nav-item>
        <b-nav-item>Histórico</b-nav-item>
        <b-nav-item>Métricas</b-nav-item>
        <b-nav-item>Fidelização</b-nav-item>
        <b-nav-item>Configurações</b-nav-item>
      </b-nav>
    </div>
  </div>   
</template>

<script>
export default {
  name: 'Sidebar',
  data () {
    return {

    }
  }
}
</script>

<style scoped>
  #app{
    text-align: center;
  }
  .nav-item{
    text-align: left;
  }
  .nav-link{
    color: black;
  }
  .sidebar .nav-link:hover{
    background-color: darkgrey;
  }
</style>
