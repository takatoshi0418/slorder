import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import vuetify from '@/plugins/vuetify'
import veeValidate from '@/plugins/veeValidate'
import VueI18n from 'vue-i18n';
import ja from '@/assets/vue-I18n/ja.json'

Vue.config.productionTip = false

Vue.use(VueI18n);

const i18n =  new VueI18n({
  locale: 'ja',
  messages: {
    ja: ja
  }
});

new Vue({
  router,
  store,
  vuetify,
  veeValidate,
  i18n,
  render: h => h(App)
}).$mount('#app')
