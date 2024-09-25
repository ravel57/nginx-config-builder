<template>
  <q-page
    class="row items-center justify-evenly"
    style="display: grid;"
  >
    <div
      v-for="(config, index) in configs"
      :key="index"
      style="margin: 24px;"
    >
      <div><b>domain:</b> {{ config.domain }}</div>
      <div><b>port:</b> {{ config.port }}</div>
      <div><b>ssl:</b> {{ config.isSsl }}</div>
      <div><b>locations:</b></div>
      <div v-for="(loc, index) in config.location" :key="index" style="margin-left: 16px;">
        <div><b>location:</b> {{ loc.location }}</div>
        <div><b>proxyPass:</b> {{ loc.proxyPass }}</div>
        <div><b>proxySetHeaders:</b>
          <div v-for="(header, index) in loc.proxySetHeaders" :key="index" style="margin-left: 16px;">{{ header.key }} <b>:</b> {{header.value}}</div>
        </div>
      </div>
      <div><b>upstream:</b> {{ config?.upstream }}</div>
      <div><b>certificates.principal:</b> {{ config.certificates?.principal }}</div>
      <div><b>certificates.notBefore:</b> {{ config.certificates?.notBefore.slice(0, 10) }}</div>
      <div><b>certificates.notAfter:</b> {{ config.certificates?.notAfter.slice(0, 10) }}</div>
      <div><b>certificates.path:</b> {{ config.certificates?.path }}</div>
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
