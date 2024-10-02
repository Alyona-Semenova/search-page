<template>
  <div class="loader-wrapper" v-if="isLoading">
    <div class="loader">
      <div class="loader__progress"/>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: "LoaderComponent",
  computed: {
    ...mapGetters(['isLoading'])
  }
}
</script>

<style scoped lang="scss">
.loader-wrapper {
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.1);

  .loader {
    position: relative;
    height: 70px;
    width: 70px;

    &__progress {
      position: absolute;
      height: 100%;
      width: 100%;
      border-radius: 50%;
      border: 5px solid rgba(255, 172, 172, 0.2);

      &::before {
        content: "";
        position: absolute;
        height: 100%;
        width: 100%;
        border-radius: 50%;
        border: 5px solid transparent;
        border-top-color: #E31F24;
        top: -5px;
        left: -5px;
        animation: spin 1s linear infinite;
      }
    }
  }
}

// animation
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>