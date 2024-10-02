<template>
  <div id="app">
    <LoaderComponent  />
    <router-view/>
  </div>
</template>

<script>
import LoaderComponent from "@/components/LoaderComponent.vue";
import { mapGetters } from 'vuex';

export default {
  components: {
    LoaderComponent,
  },
  computed: {
    ...mapGetters(['isLoading'])
  }
}
</script>

<style lang="scss">
// font
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap'); // font

#app {
  font-family: 'Montserrat', sans-serif;
}

body {
  margin: 0;
}
</style>
