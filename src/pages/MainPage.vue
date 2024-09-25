<template>
  <q-page style="display: flex; flex-direction: column;align-items: center">
    <q-btn class="add-service-btn" outline>
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
        <!--      <div><b>domain:</b> {{ config.domain }}</div>-->
        <!--      <div><b>port:</b> {{ config.port }}</div>-->
        <!--      <div><b>ssl:</b> {{ config.isSsl }}</div>-->
        <!--      <div><b>locations:</b></div>-->
        <!--      <div v-for="(loc, index) in config.location" :key="index" style="margin-left: 16px;">-->
        <!--        <div><b>location:</b> {{ loc.location }}</div>-->
        <!--        <div><b>proxyPass:</b> {{ loc.proxyPass }}</div>-->
        <!--        <div><b>proxySetHeaders:</b>-->
        <!--          <div v-for="(header, index) in loc.proxySetHeaders" :key="index" style="margin-left: 16px;">{{ header.key }} <b>:</b> {{header.value}}</div>-->
        <!--        </div>-->
        <!--      </div>-->
        <!--      <div><b>upstream:</b> {{ config?.upstream }}</div>-->
        <!--      <div><b>certificates.principal:</b> {{ config.certificates?.principal }}</div>-->
        <!--      <div><b>certificates.notBefore:</b> {{ config.certificates?.notBefore.slice(0, 10) }}</div>-->
        <!--      <div><b>certificates.notAfter:</b> {{ config.certificates?.notAfter.slice(0, 10) }}</div>-->
        <!--      <div><b>certificates.path:</b> {{ config.certificates?.path }}</div>-->
        <!--      <div><b>certificatesKeyPath:</b> {{ config.certificatesKeyPath }}</div>-->
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { Config } from 'src/models/Config'
import InstanceCard from "components/InstanceCard.vue";

export default {
  name: 'MainPage',

  components: {InstanceCard},

  data: () => ({
    configs: [{ domain: '', port: 80, isSsl: false, location: [], upstream: null, certificates: null, certificatesKeyPath: '' }, { domain: 'uldesk.ru', port: 443, isSsl: true, location: [{ location: '/', proxyPass: 'http://uldesk', proxySetHeaders: [{ key: 'Host', value: '$host' }, { key: 'Upgrade', value: '$http_upgrade' }, { key: 'Connection', value: '"upgrade"' }] }], upstream: '172.22.0.20:56480', certificates: { principal: 'CN=uldesk.ru', notBefore: '2024-09-21T13:54:34+03:00', notAfter: '2024-12-20T13:54:33+03:00', path: '/etc/letsencrypt/live/uldesk.ru/fullchain.pem' }, certificatesKeyPath: '/etc/letsencrypt/live/uldesk.ru/privkey.pem' }, { domain: 'test.uldesk.ru', port: 443, isSsl: true, location: [{ location: '/', proxyPass: 'http://test.uldesk', proxySetHeaders: [{ key: 'Host', value: '$host' }, { key: 'Upgrade', value: '$http_upgrade' }, { key: 'Connection', value: '"upgrade"' }, { key: 'Upgrade', value: '$http_upgrade' }, { key: 'Connection', value: '"upgrade"' }, { key: 'Host', value: '$host' }, { key: 'Origin', value: '"http://172.22.0.20:56481"' }] }, { location: '/ws', proxyPass: 'http://test.uldesk/ws', proxySetHeaders: [{ key: 'Host', value: '$host' }, { key: 'Upgrade', value: '$http_upgrade' }, { key: 'Connection', value: '"upgrade"' }, { key: 'Upgrade', value: '$http_upgrade' }, { key: 'Connection', value: '"upgrade"' }, { key: 'Host', value: '$host' }, { key: 'Origin', value: '"http://172.22.0.20:56481"' }] }], upstream: '172.22.0.20:56481', certificates: { principal: 'CN=test.uldesk.ru', notBefore: '2024-07-18T05:37:04+03:00', notAfter: '2024-10-16T05:37:03+03:00', path: '/etc/letsencrypt/live/test.uldesk.ru/fullchain.pem' }, certificatesKeyPath: '/etc/letsencrypt/live/test.uldesk.ru/privkey.pem' }, { domain: 'admin.uldesk.ru', port: 443, isSsl: true, location: [{ location: '/', proxyPass: 'http://admin.uldesk', proxySetHeaders: [{ key: 'Host', value: '$host' }, { key: 'X-Real-IP', value: '$remote_addr' }, { key: 'X-Forwarded-Proto', value: 'https' }, { key: 'X-Forwarded-Host', value: '$host' }, { key: 'X-Forwarded-For', value: '$proxy_add_x_forwarded_for' }, { key: 'Upgrade', value: '$http_upgrade' }, { key: 'Connection', value: '"upgrade"' }, { key: 'Upgrade', value: '$http_upgrade' }, { key: 'Connection', value: '"upgrade"' }, { key: 'Host', value: '$host' }, { key: 'Origin', value: '"http://172.22.0.20:8090"' }] }, { location: '/ws', proxyPass: 'http://admin.uldesk/ws', proxySetHeaders: [{ key: 'Host', value: '$host' }, { key: 'X-Real-IP', value: '$remote_addr' }, { key: 'X-Forwarded-Proto', value: 'https' }, { key: 'X-Forwarded-Host', value: '$host' }, { key: 'X-Forwarded-For', value: '$proxy_add_x_forwarded_for' }, { key: 'Upgrade', value: '$http_upgrade' }, { key: 'Connection', value: '"upgrade"' }, { key: 'Upgrade', value: '$http_upgrade' }, { key: 'Connection', value: '"upgrade"' }, { key: 'Host', value: '$host' }, { key: 'Origin', value: '"http://172.22.0.20:8090"' }] }], upstream: '172.22.0.20:56480', certificates: { principal: 'CN=admin.uldesk.ru', notBefore: '2024-09-21T23:17:45+03:00', notAfter: '2024-12-20T23:17:44+03:00', path: '/etc/letsencrypt/live/admin.uldesk.ru/fullchain.pem' }, certificatesKeyPath: '/etc/letsencrypt/live/admin.uldesk.ru/privkey.pem' }, { domain: 'qrref.ru', port: 443, isSsl: true, location: [{ location: '/', proxyPass: 'https://qrref', proxySetHeaders: [{ key: 'Host', value: '$host' }, { key: 'X-Real-IP', value: '$remote_addr' }, { key: 'X-Forwarded-For', value: '$proxy_add_x_forwarded_for' }, { key: 'X-Forwarded-Proto', value: '$scheme' }, { key: 'Upgrade', value: '$http_upgrade' }, { key: 'Connection', value: '"upgrade"' }] }], upstream: '172.22.0.20:56482', certificates: { principal: 'CN=qrref.ru', notBefore: '2024-09-23T17:03:47+03:00', notAfter: '2024-12-22T17:03:46+03:00', path: '/etc/letsencrypt/live/qrref.ru/fullchain.pem' }, certificatesKeyPath: '/etc/letsencrypt/live/qrref.ru/privkey.pem' }] as Array<Config>
  }),

  methods: {},

  mounted () {
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
