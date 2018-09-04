<template>
    <footer class="rodape">
      <b-container class="container-fuid">
      <h6>Resumo do atendimento</h6>
        <b-row>
          <MedioResposta/>
          <MedioEntrega/>
          <PedidosEntregues/>
          <PedidosPerdidos/>
        </b-row>
      </b-container>
    </footer>
</template>

<script>
import MedioResposta from '@/components/Resume/TempoMedioResposta'
import MedioEntrega from '@/components/Resume/TempoMedioEntrega'
import PedidosEntregues from '@/components/Resume/PedidosEntreguesSucesso'
import PedidosPerdidos from '@/components/Resume/PedidosPerdidos'
export default {
  name: "Rodape",
  data() {
    return {};
  },
  components: {
    MedioResposta,
    MedioEntrega,
    PedidosEntregues,
    PedidosPerdidos
  }
}
</script>

<style>
  h6{
    font-weight: bold;
  }
  .rodape{
    bottom: 0;
    height: 70px;
    width: 100%;
    background:silver;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.5);
    position: fixed;
    padding: 10px;
  }
  .container{
    margin-left: 0 !important;
  }
  .box-icon{
    width: 15px;
    height: 15px;
  }
</style>
