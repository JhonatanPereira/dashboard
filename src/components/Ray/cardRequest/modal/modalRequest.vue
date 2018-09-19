<template>
  <v-dialog v-model="openModal" max-width="95%">
    <v-card>
      <v-card-title>
        <font-awesome-icon :icon="icon" size="4x" style="color: #AA6AD8; margin:0 15px" />
        <h3>Detalhes do Pedido</h3>
        <v-spacer></v-spacer>
        <v-menu bottom left>
          <v-btn slot="activator" id="close" icon fab @click="openModal = !openModal">
            <v-icon>add</v-icon>
          </v-btn>
        </v-menu>
      </v-card-title>
      <!--- component details Client !-->
      <details-client/>
      <!--- component table product !-->
      <table-product/>
      <v-card-title style="padding: 0 16px !important">
      <v-spacer>
        <pres-cription/>
      </v-spacer>
      <div id="resume">
        <table style="width: 200px; border-bottom: 1px solid; margin:10px 20px">
          <tr>
            <td>Entrega</td>
            <td>R$6,00</td>
          </tr>
          <tr>
            <td>Total parcial</td>
            <td>R$35,97</td>
          </tr>
          <tr>
            <td>Desconto</td>
            <td>R$-3,79</td>
          </tr>
        </table>
        <table style="width: 200px; margin:10px 20px">
          <tr>
            <td align="center">Total:</td>
            <td align="center">32,18</td>
          </tr>
        </table>
      </div>
      </v-card-title>
      <v-card-actions>
        <v-spacer/>
          <v-select :items="items" outline :label="label"></v-select>
        <v-btn style="border-radius: 5px; border: 2px solid #AA6AD8; color:#AA6AD8" outline big @click="openModal=false">Recusar pedido</v-btn>
        <v-btn style="background: #AA6AD8; color: white; border-radius: 5px" depressed big @click="openModal=false">Confirmar pedido</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import tableProduct from './tableProduct'
import detailsClient from './detailsClient'
import presCription from './presCription'
import { faFile } from '@fortawesome/free-regular-svg-icons'
export default {
  name: 'modalRequest',
  data () {
    return {
      icon: faFile,
      items: ['Victor', 'Leo', 'Maikinho'],
      label: 'Atendente'
    }
  },
  components: {
    tableProduct,
    detailsClient,
    presCription
  },
  props: {
    openModal: false
  }
}
</script>

<style>
#close {
  background: #E2C8F5;
  transform: rotate(45deg);
  width: 40px;
  height: 40px;
  margin-right: -15px;
  margin-top: -40px;
  color: white;
}
h3 {
  font-family: 'Montserrat', sans-serif;
  color: #AA6AD8;
  font-size: 32px;
  font-weight: 700
}
td {
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  font-weight: 700;
}
#resume {
  display: table-column;
}
thead tr {
  height: 35px !important;
}
th:nth-child(1) {
  border-top-left-radius: 5px;
  background: #D0D0D0;
}
th:nth-child(2), th:nth-child(3), th:nth-child(4) {
  background: #D0D0D0;
}
th:nth-child(5) {
  background: #D0D0D0;
  border-top-right-radius: 5px;
}
.elevation-1 {
  width: 100%;
  height: 150px;
  overflow-y: scroll;
  border-radius: 5px;
  margin: 0 5px;
}
.v-card__title {
  padding: 5px;
}
.v-card__actions {
  padding: 5px 10px;
}
.v-card {
  border-radius: 10px !important;
}
.spacer {
  width: 200px;
}
.v-text-field--outline {
  margin-top: 0 !important;
}
.v-dialog__content {
  height: 50% !important;
}
</style>
