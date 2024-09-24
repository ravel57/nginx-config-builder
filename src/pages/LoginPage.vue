<template>
  <q-layout>
    <q-page-container>
      <q-page
        class="page"
        style="display: flex; flex-direction: column;justify-content: center;align-items: center"
      >
        <div class="login-container">
          <q-card class="shadow-3" style="padding: 8px; width: 260px">
            <q-card-section
              style="font-size: 18px; align-items: center;display: flex; flex-direction: column;">
            </q-card-section>
            <q-card-section style="padding-top: 0; padding-bottom: 0">
              <q-input
                id="task-name"
                v-model="login"
                label="Login"
                :rules="[val => (val && val.length > 0) || 'Required field']"
              />
              <q-input
                id="task-name"
                v-model="password"
                label="Password"
                type="password"
                :rules="[val => (val && val.length > 0) || 'Required field']"
              />
            </q-card-section>
            <q-card-actions>
              <q-btn
                icon-right="login"
                style="width: 100%" color="primary"
                :loading="loginAccept"
                @click="auth"
              >
                Sign in
              </q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import axios from 'axios'

export default {
  name: 'LoginPage',

  data: () => ({
    login: '',
    password: '',
    loginAccept: false
  }),

  methods: {
    auth () {
      axios.post(`/auth/login?username=${this.login}&password=${this.password}`)
        .then(() => {
          axios.get('/auth/status').then(res => {
            if (res.data.authenticated) {
              this.loginAccept = true
              this.$router.push('/')
            } else {
              this.login = ''
              this.password = ''
              this.$q.notify({
                message: 'Invalid login details',
                type: 'negative',
                position: 'top-right',
                actions: [{
                  icon: 'close', color: 'white', dense: true, handler: () => undefined
                }]
              })
            }
          })
        })
    }
  }

}
</script>

<style scoped>

</style>
