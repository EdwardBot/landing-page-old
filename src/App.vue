<template>
  <v-app id="app">
    <Navbar/>
    <v-main>
      <router-view/>
    </v-main>
    <Footer />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default Vue.extend({
  name: 'App',
  components: {
    Navbar,
    Footer
  },
});
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');

* {
  font-family: 'Nunito', sans-serif;
}

#app {
  background-color: #2f3136;
  display: block;
  flex-direction: column;
  color: #fff;
  overflow: hidden;
}

</style>
