<template>
  <div class="sidebar">
    <div class="sidebar-search">
      <div class="sidebar-search__title">
        <span>Поиск сотрудников</span>
      </div>
      <div class="sidebar-search__input">
        <input v-model="searchQuery" @input="searchUsers" placeholder="Введите id или имя..."/>
      </div>
    </div>

    <div class="sidebar-results">
      <div class="sidebar-results__title">
        <span>Результаты</span>
      </div>

      <div v-if="searchResults.length === 0" class="sidebar-results__empty">начните поиск</div>
      <div v-else class="sidebar-results__users-list users-list">
        <UserPrevCard
            v-for="user in searchResults"
            class="users-list__item"
            :key="user.id"
            :isActive="activeUser && activeUser.id === user.id"
            :user="user"
            @changeActivityCard="changeActiveUser"
        />
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import UserPrevCard from "@/components/UserPrevCard.vue";

export default {
  name: "SidebarComponent",
  components: {UserPrevCard},
  data() {
    return {
      searchQuery: '',
      activeUser: null,
    };
  },
  computed: {
    ...mapGetters(['users', 'searchResults', 'selectedUser']),
  },

  methods: {
    searchUsers() {
      this.activeUser = null
      const names = this.searchQuery.split(',').map(name => name.trim()).filter(name => name);
      this.$store.dispatch('searchUsers', names);
    },
    changeActiveUser(user) {
      this.activeUser = user ? user : null;
      this.$store.dispatch('selectUser', user);
    },

  }
}
</script>

<style scoped lang="scss">
.sidebar {
  height: 100%;
  padding: 30px;

  .sidebar-search {
    &__title {
      font-size: 16px;
      font-weight: 600;
      line-height: 22.4px;
      text-align: left;
    }

    &__input {
      margin-top: 22px;

      input {
        outline: 0;
        width: 240px;
        height: 46px;
        border-radius: 8px;
        border: 1px solid #E9ECEF;
        padding-left: 16px;
        font-family: 'Montserrat', sans-serif;

        &::placeholder {
          color: #76787D;
          font-size: 14px;
          font-weight: 400;
          line-height: 17.07px;
        }
      }
    }
  }

  .sidebar-results {
    &__title {
      margin-top: 22px;
      font-size: 16px;
      font-weight: 600;
      line-height: 22.4px;
      text-align: left;
    }

    &__users-list {
      margin-top: 22px;
    }

    &__empty {
      margin-top: 10px;
      font-size: 14px;
      font-weight: 400;
      line-height: 17.07px;
      text-align: left;
      color: #76787D
    }
    .users-list {
      display: flex;
      flex-direction: column;
      gap: 18px;
    }
  }
}
</style>