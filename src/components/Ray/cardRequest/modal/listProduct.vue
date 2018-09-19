<template>
  <div>
    <td>{{props}}</td>
    <!-- <td style="align-items: center">
      <v-icon big class="ml-2" @click="removeUnidades(props.product)">remove</v-icon>
      {{props.product.quantity}}
      <v-icon big class="mr-2" @click="addUnidades(props.product)">add_box</v-icon>
    </td>
    <td class="text-xs-left">{{ props.product.unidades }}</td>
    <td class="text-xs-left">{{ props.product.preco }}</td>
    <td class="text-xs-left">{{ props.product.total }}</td> -->
  </div>
</template>

<script>
export default {
  nama: 'listProduct',
  data () {
    return {}
  },
  props: {
    product: {}
  },
  computed: {
    
  }
}
</script>

<style>

</style>
