<template>
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
        <q-btn
          style="color: #f36248"
          outline
          @click="deleteInstance"
        >
          Delete
        </q-btn>
        <q-btn
          style="color: #09ab29"
          outline
          @click="renewCertificate"
        >
          Renew certificate
        </q-btn>
        <q-btn
          style="color: #09ab29"
          outline
          @click="save"
        >
          Save
        </q-btn>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>


<script lang="ts">
import {computed} from "vue";
import {Config} from "src/models/Config";
import axios from "axios";
import {Upstream} from "src/models/Upstream";

export default {
  name: "InstanceModal",

  props: {
    config: {
      type: Config,
      required: true,
    },
    modelValue: {
      type: Boolean,
      required: true,
    }
  },

  emits: [
    "update:modelValue"
  ],

  data: () => ({
    endpoint: '',
    endpointPort: '',
    domain: '',
    port: 0,
    ssl: false,
    dateCertificateExpired: '',
  }),

  methods: {
    deleteInstance() {

    },

    renewCertificate() {

    },

    save() {
      let data = new Config(
        this.domain,
        this.port,
        this.ssl,
        [],
        new Upstream('', this.endpoint, Number(this.endpointPort)),
        null,
        '',
      )
      axios.post('/api/v1/config', data)
        .then((response) => {
        })
        .catch((error) => {
          console.log(error);
        })
    },
  },

  created() {
    this.ssl = this.config?.isSsl ?? false
    this.domain = this.config?.domain ?? ''
    this.port = this.config?.port ?? 0
    this.dateCertificateExpired = this.config?.certificates?.notAfter ?? ''
    this.endpoint = this.config.upstream?.host ?? ''
    this.endpointPort = this.config.upstream?.port?.toString() ?? ''
  },

  setup(props, {emit}) {
    const showServiceModal = computed({
      get: () => props.modelValue,
      set: (value) => emit("update:modelValue", value),
    })
    return {
      showServiceModal,
    }
  },
};
</script>


<style scoped>

</style>
