<template>
  <q-page
    class="row items-center justify-evenly"
  >
    <div
      v-for="(config, index) in configs"
      :key="index"
      style="display: grid;"
    >
      <div><b>serverName:</b> {{ config.domainName }}</div>
      <div><b>port:</b> {{ config.port }}</div>
      <div><b>location:</b> {{ config.location }}</div>
      <div><b>certificates:</b> {{ config.certificates }}</div>
      <div><b>certificatesKeyPath:</b> {{ config.certificatesKeyPath }}</div>
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
