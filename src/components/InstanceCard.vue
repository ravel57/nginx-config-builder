<template>
  <q-card
    class="instance-card no-shadow"
    @click="showServiceModal = true"
  >
    <div class="background-text">
      {{ config?.domain ? config.domain : 'Empty' }}
    </div>
    <div v-if="config?.isSsl" class="">
      <q-icon
        class="ssl-icon"
        name="lock"
      >
        <q-tooltip>SSL On</q-tooltip>
      </q-icon>
    </div>
    <div class="content">
      <div v-if="config?.domain" class="">
        {{ config.domain }}
      </div>
      <div v-else class="">
        <em>Empty</em>
      </div>
      <div class="">
        {{ config?.port }}
      </div>
    </div>
  </q-card>
  <q-dialog class="service-modal" v-model="showServiceModal">
    <q-card>
      <q-card-section class="justify-between" style="display: flex;align-items: center">
        <div class="">Domain: {{ config?.domain }}</div>
        <q-btn flat dense icon="close" v-close-popup/>
      </q-card-section>
      <q-card-section>
        <div style="display: flex; flex-direction: row;flex-wrap: nowrap">
          <q-input v-model="endpoint" style="width: 70%" label="Endpoint"></q-input>
          <q-input v-model="endpointPort" style="width: 30%" label="Port"></q-input>
        </div>
        <q-input v-model="domain" label="Domain"></q-input>
        <q-input type="number" v-model="port" label="Port"></q-input>
        <q-checkbox v-model="ssl" label="SSL"></q-checkbox>
        <q-input v-model="dateCertificateExpired" readonly label="Date certificate expired"></q-input>

      </q-card-section>
      <q-card-actions>
        <q-btn style="color: #f36248" outline>
          Delete
        </q-btn>
        <q-btn style="color: #09ab29" outline>
          Renew certificate
        </q-btn>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {Config} from "src/models/Config";

export default defineComponent({
  name: "InstanceCard",
  props: {
    config: {type: Config}
  },
  data: () => ({
    showServiceModal: false,
    endpoint: '',
    endpointPort: '',
    domain: '',
    port: 0,
    ssl: false,
    dateCertificateExpired: '',
  }),
  created() {
    this.ssl = this.config?.isSsl ?? false
    this.domain = this.config?.domain ?? ''
    this.port = this.config?.port ?? 0
    this.dateCertificateExpired = this.config?.certificates?.notAfter ?? ''
  }
})
</script>

<style scoped>
.instance-card {
  cursor: pointer;
  position: relative;
  width: 200px;
  height: 200px;
  overflow-x: hidden;
  border-radius: 15px;
  padding: 20px;
  background-color: #121212;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: end;
}

.instance-card:hover {
  transform: scale(1.05);
  .background-text {
    transition: transform 0.5s;
    transform: scale(0.95);
  }
}

.instance-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 40%);
  border-radius: 15px;
  pointer-events: none;
}

.instance-card::after {
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 60%);
  border-radius: 15px;
  pointer-events: none;
}


.background-text {
  position: absolute;
  top: 0;
  color: #09ab29;
  font-size: 60px;
  font-weight: bold;
  opacity: 0.5;
  text-shadow: 0 0 5px #09ab29,
  0 0 10px #09ab29,
  0 0 20px #09ab29;
}

.content {
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: end;
}

.ssl-icon {
  color: white;
  position: absolute;
  bottom: 20px;
  right: 20px;
  font-size: 15px;
}

.service-modal {
  padding: 16px;
}
</style>
