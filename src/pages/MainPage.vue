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
