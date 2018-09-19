<template>
  <v-container>
    <v-layout row wrap>
      <v-flex sm12>
        <v-card style="background: #E2C8F5; border-radius: 10px">
          <v-card-title class="pb-0">
            <h4>**Remédio com retenção de receita</h4>
          </v-card-title>
          <v-card-text style="color:#7A3ACC">
            {{cardText}}
          </v-card-text>
          <v-card-actions>
            <v-btn style="background: #AA6AD8; border-radius: 5px; color: white" depressed big>Visualizar foto enviada</v-btn>
            <v-btn style="background-color: #7A3ACC; border-radius: 5px; color: white" depressed big>Pedir para reenviar</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'presCription',
  data () {
    return {
      cardText: 'O Achei Farmácias não se responsabiliza pela venda dos medicamentos e apenas provém uma formação de interação cliente/farmácia.'
    }
  }
}
</script>

<style scoped>

h4 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 24px;
  color: #7A3ACC;
}
.container.grid-list-xl .layout .flex {
  padding: 0 !important;
}
.container {
  padding: 10px !important;
}
.v-card__text {
  padding: 0 10px !important;
}
.v-card > *:last-child:not(.v-btn):not(.v-chip) {
  justify-content: center !important;
}

</style>
