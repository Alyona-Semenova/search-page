<template>
  <div class="home">
    <header class="home__header">
      <div class="home__logo">
        <img src="@/assets/logo.svg" alt="Жилфонд"/>
      </div>
      <div class="home__user">Пользователь</div>
    </header>

    <div class="home__content">
      <SearchPage/>
    </div>
  </div>
</template>

<script>
import SearchPage from '@/components/SearchPage.vue'

export default {
  name: 'HomeView',
  components: {
    SearchPage
  }
}
</script>


<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap'); // font

.home {
  font-family: 'Montserrat', sans-serif;
  padding: 50px 50px;
  height: calc(100vh - 100px);

  &__header {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    font-weight: 400;
  }

  &__content {
    width: 100%;
    height: calc(100% - 40px);
    margin-top: 26px;
  }
}
</style>