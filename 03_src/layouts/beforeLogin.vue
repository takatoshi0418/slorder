<template>
  <v-app >
    <v-app-bar :clipped-left="clipped" fixed app color="#007FFF" class="app-ber">
      <v-toolbar-title class="tittle" v-text="title" />
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'BeforeLoginLayout',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'slorder',
    }
  },
}
</script>

<style scoped>
@import '@/assets/common.css';

.app-ber {
  color: white;
}

.tittle {
  font-size: 150%;
}
</style>