<template>
  <q-page class="row items-center justify-evenly">
    <div v-for="(config, index) in configs" :key="index">
      <div>serverName {{ config.serverName }}</div>
      <div>port {{ config.port }}</div>
      <div>location {{ config.location }}</div>
      <div>certificates {{ config.certificates }}</div>
      <div>certificatesKeyPath {{ config.certificatesKeyPath }}</div>
    </div>
  </q-page>
</template>

<script lang="ts">
import axios from 'axios'
import { Config } from 'src/models/Config'

export default {
  name: 'MainPage',

  components: {},

  data: () => ({
    configs: [] as Array<Config>
  }),

  methods: {},

  mounted () {
    axios.get('/api/v1/get-configs')
      .then((response) => {
        this.configs = response.data
      })
  }

}
</script>
