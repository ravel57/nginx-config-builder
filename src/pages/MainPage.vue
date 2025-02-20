<template>
  <q-page style="display: flex; flex-direction: column;align-items: center">
    <q-btn
      class="add-service-btn"
      outline
      @click="showServiceModal = true"
    >
      Add service
    </q-btn>
    <div class="card-container">
      <div
        v-for="(config, index) in configs"
        :key="index"
        style="margin: 24px;"
      >
        <instance-card
          :config="config"
        />
        <!--      <div><b>domain:</b> {{ config.domain }}</div>
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
        <div><b>certificatesKeyPath:</b> {{ config.certificatesKeyPath }}</div>-->
      </div>
    </div>
    <instance-modal
      :config="newConfig"
      v-model="showServiceModal"
    />
  </q-page>
</template>


<script lang="ts">
import {Config} from 'src/models/Config'
import InstanceCard from "components/InstanceCard.vue";
import axios from "axios";
import InstanceModal from "components/InstanceModal.vue";

export default {
  name: 'MainPage',

  components: {InstanceModal, InstanceCard},

  data: () => ({
    configs: [] as Array<Config>,
    showServiceModal: false,
    newConfig: new Config(),
  }),

  methods: {},

  mounted() {
    axios.get("/api/v1/configs").then((response) => {
      this.configs = response.data;
    })
  }

}
</script>


<style>
.add-service-btn {
  margin: 8px;
  color: #09ab29;
  font-weight: bold;
  width: 200px;
  height: 40px;
  border-radius: 14px;
}

.card-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
