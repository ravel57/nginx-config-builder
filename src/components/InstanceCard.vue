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
  <instance-modal
    :config="config"
    v-model="showServiceModal"
  />
</template>


<script lang="ts">
import {Config} from "src/models/Config";
import InstanceModal from "components/InstanceModal.vue";

export default {

  name: "InstanceCard",

  data: () => ({
    showServiceModal: false,
  }),

  components: {InstanceModal},

  props: {
    config: {
      type: Config,
      required: true,
    }
  },

}
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
