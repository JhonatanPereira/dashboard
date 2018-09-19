<template>
  <div id="app">
    <v-card-title>
      <h4>Detalhes do Cliente</h4>
      <v-data-table hide-headers :items="info_user" hide-actions style="width:100%" disable-initial-sort>
        <template slot="items" slot-scope="props">
          <tr>
            <td class="text-xs-left"><strong>Nome:</strong></td>
            <td class="text-xs-left"><span>{{ props.item.first_name }}</span></td>
            <td class="text-xs-left"><strong>Telefone:</strong></td>
            <td class="text-xs-left"><span>{{ props.item.number }}</span></td>
            <td class="text-xs-left"><strong>Fidelizado:</strong></td>
            <td class="text-xs-left">
              <span v-if="`${props.item.loyalt}`" >Sim</span>
              <span v-else>Não</span>
            </td>
          </tr>
          <tr>
            <td class="text-xs-left"><strong>Endereço:</strong></td>
            <td class="text-xs-left"><span>{{ props.item.street }}</span></td>
            <td class="text-xs-left"><strong>Complemento:</strong></td>
            <td class="text-xs-left"><span>{{ props.item.complement }}</span></td>
            <td class="text-xs-left"><strong>Bairro:</strong></td>
            <td class="text-xs-left"><span>{{ props.item.district }}</span></td>
          </tr>
        </template>
      </v-data-table>
    </v-card-title>
  </div>
</template>

<script>
export default {
  name: 'detailsClient',
  data () {
    return {
      info_user: [
        {
          user_id: 1,
          first_name: "John444",
          last_name: "Doe444",
          email: "eheheh@gmail.com",
          gender: null,
          cpf: null,
          phone: null,
          address_type_id: null,
          label: null,
          city: null,
          street: null,
          number: null,
          district: null,
          state: null,
          cep: null,
          geo: null,
          complement: null,
          loyal: true
        }
      ]
    }
  }
}
</script>

<style scoped>

.theme--light .v-table tbody tr:not(:last-child) {
  border-bottom: none !important;
}
.v-card__title {
  padding: 0 16px !important; 
}
h4 {
  margin-left: 10px;
  color: #AA6AD8;
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  font-weight: 700;
}
table.v-table tbody td:first-child {
  padding: 0 10px !important;
}
strong {
  font-size: 20px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
}
span {
  font-size: 18px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
}
.theme--light .v-table tbody tr:hover {
  background: none !important;
}
</style>
