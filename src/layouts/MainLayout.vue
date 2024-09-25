<template>
  <q-layout class="main-layout" view="lHh Lpr lFf">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
  },

  data: () => ({
  }),

  methods: {
  }
})
</script>
<style>
.main-layout {
  background-color: #2e2e2e;
}
</style>
