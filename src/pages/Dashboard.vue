<template>
  <div id="pageDashboard">
    <v-layout row wrap>
      <RequestRay/>
      <delivery-ray/>
      <finalized-ray/>
    </v-layout>
  </div>
</template>

<script>
import API from '@/lists'
import RequestRay from '@/components/Ray/RequestRay'
import DeliveryRay from '@/components/Ray/DeliveryRay'
import FinalizedRay from '@/components/Ray/FinalizedRay'
export default {
  name: 'Dashboard',
  components: {
    RequestRay,
    DeliveryRay,
    FinalizedRay
  },
  data () {
    return {

    }
  },
  computed: {
    activity () {
      return API.getActivity()
    },
    posts () {
      return API.getPost(3)
    },
    siteTrafficData () {
      return API.getMonthVisit
    },
    locationData () {
      return API.getLocation
    }
  },

};
</script>

<style scoped>
  #pageDashboard{
    padding: 20px;
  }
</style>
