<template>
  <div class="search-page">
    <div class="search-page__sidebar">
      <SidebarComponent/>
    </div>

    <div class="search-page__user-card">
      <UserCard/>
    </div>
  </div>
</template>

<script>

import SidebarComponent from "@/components/Sidebar.vue";
import UserCard from "@/components/UserCard.vue";

export default {
  name: 'SearchPage',
  components: {
    UserCard,
    SidebarComponent,
  }
}
</script>

<style lang="scss" scoped>
.search-page {
  display: flex;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px #0000001A;
  overflow: hidden;

  &__sidebar {
    width: 25%;
    background-color: #FDFDFD;
    border-right: 1px solid #DEDEDD;
  }

  &__user-card {
    width: 75%;
  }

}
</style>