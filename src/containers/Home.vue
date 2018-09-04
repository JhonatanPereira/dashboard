<template>
    <div class="app">
    <AppHeader fixed>
      <SidebarToggler class="d-lg-none" display="md" mobile />
      <SidebarToggler class="d-md-down-none" display="lg" />
      <!-- <b-link class="navbar-brand" to="#">
        <img class="navbar-brand-full" src="img/brand/logo.svg" width="89" height="25" alt="CoreUI Logo">
        <img class="navbar-brand-minimized" src="img/brand/sygnet.svg" width="30" height="30" alt="CoreUI Logo">
      </b-link> -->
      <b-navbar-nav class="d-md-down-none">
        <b-nav-item class="px-3" to="/panel">Painel</b-nav-item>
        <b-nav-item class="px-3" to="/delivery" exact>Entregas</b-nav-item>
        <b-nav-item class="px-3">Perfil</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item class="d-md-down-none">
          <i class="icon-bell"></i>
          <b-badge pill variant="danger">5</b-badge>
        </b-nav-item>
        <DefaultHeaderDropdownAccnt/>
      </b-navbar-nav>
    </AppHeader>
    <div class="app-body">
      <AppSidebar fixed>
        <Menu></Menu>
        <SidebarFooter/>
        <SidebarMinimizer/>
      </AppSidebar>
      <main class="main">
        <router-view></router-view>
        <rodape/>
      </main>
    </div>
    </div>
</template>

<script>
import Menu from './Nav'
import { Header as AppHeader, SidebarToggler, Sidebar as AppSidebar, SidebarFooter, SidebarForm, SidebarHeader, SidebarMinimizer, SidebarNav, Aside as AppAside, AsideToggler, Footer as TheFooter, Breadcrumb } from '@coreui/vue'
import DefaultHeaderDropdownAccnt from './DefaultHeaderDropdown'
import Rodape from './Footer'

export default {
  name: "Home",
  components: {
    AppHeader,
    AppSidebar,
    AppAside,
    TheFooter,
    DefaultHeaderDropdownAccnt,
    SidebarForm,
    SidebarFooter,
    SidebarToggler,
    SidebarHeader,
    SidebarNav,
    SidebarMinimizer,
    Menu,
    Rodape
  },
  data() {
    return {
    }
  }
}
</script>

<style scoped>

</style>
