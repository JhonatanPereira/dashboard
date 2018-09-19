<template>
  <v-card-title>
    <h4>Dados do Pedido</h4>
    <v-data-table style="width=100%" :headers="headers" :items="desserts"  hide-actions class="elevation-1">
      <template slot="items" slot-scope="props">
        <td>{{ props.item.name }}</td>
        <td style="align-items: center" class="justify-center layout px-0">
          <v-icon big class="ml-2" @click="removeUnidades(props.item)">remove</v-icon>
          {{props.item.quantity}}
          <v-icon big class="mr-2" @click="addUnidades(props.item)">add_box</v-icon>
        </td>
        <td class="text-xs-left">{{ props.item.unidades }}</td>
        <td class="text-xs-left">{{ props.item.preco }}</td>
        <td class="text-xs-left">{{ props.item.total }}</td>
      </template> -->
    </v-data-table>
  </v-card-title>
</template>

<script>
import listProduct from './listProduct'
export default {
  name: 'table',
  components: {
    listProduct
  },
  data () {
    return {
      headers: [
        {
          text: 'Produtos',
          align: 'center',
          value: 'produto',
          sortable: false
        },
        { text: 'Disponivel', align:'center', value: 'count', sortable: false },
        { text: 'Unidades', align: 'center', value: 'unidades', sortable: false },
        { text: 'Preço', align: 'center', value: 'preco', sortable: false },
        { text: 'Total', align: 'center', value: 'total', sortable: false }      
      ],
      desserts: [
        {
          name: 'Frozen Yogurt',
          unidades: 5,
          preco: 6.0,
          quantity: 0,
          total: 0
        },
        {
          name: 'Dipirona',
          unidades: 5,
          preco: 7.0,
          quantity: 0,
          total: 0
        },
        {
          name: 'Dipirona',
          unidades: 5,
          preco: 7.0,
          quantity: 0,
          total: 0
        }
      ]
    }
  },
  methods: {
    addUnidades: function (count) {
      this.total(count)
      count.quantity += 1
      count.total += count.preco
    },
    removeUnidades: function (count) {
      count.quantity -= 1
      count.total -= count.preco
    },
    total: function (count) {
      console.log(count)
    }
  }
}
</script>

<style scoped>
h4 {
  margin-left: 10px;
  color: #AA6AD8;
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  font-weight: 700;
  margin:5px 5px;
}
.v-card__title {
  padding: 0 16px !important;
}
</style>
