<template>
  <div v-if="selectedUser" class="user-card">
    <div class="user-card__avatar">
      <img src="@/assets/userImage.svg" alt="Фото"/>
    </div>

    <div class="user-card__info">
      <div class="user-card__name bold">{{ selectedUser.name }}</div>
      <div class="user-card__row"><span class="bold">email:</span> {{ selectedUser.email }}</div>
      <div class="user-card__row"><span class="bold">phone:</span> {{ selectedUser.phone }}</div>
      <div class="user-card__about bold">О себе:</div>
      <div class="user-card__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci alias
        aliquam amet animi aut blanditiis culpa, doloribus ea error iusto, mollitia nobis officiis pariatur quae
        quibusdam quidem, quod quos saepe vero. Deserunt dignissimos, dolorum ducimus et in ipsam iste modi non omnis
        optio porro quaerat, quasi quia, saepe vitae!
      </div>
    </div>

  </div>
  <div v-else class="user-card__empty">
    <p>Выберите сотрудника, чтобы посмотреть его профиль</p>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: "UserCard",

  computed: {
    ...mapGetters(['selectedUser'])
  }
}
</script>

<style scoped lang="scss">
.user-card {
  height: calc(100% - 60px);
  padding: 30px;
  display: flex;
  justify-content: space-between;
  gap: 60px;

  &__name {
    font-size: 16px;
    font-weight: 600;
    line-height: 22.4px;
    text-align: left;
  }

  &__about {
    font-size: 16px;
    margin-top: 20px;
  }

  &__description {
    color: #76787D;
    font-size: 14px;
    font-weight: 400;
    line-height: 17.07px;
    margin-top: 25px;
  }

  &__row {
    font-size: 14px;
    margin-top: 10px;
  }

  &__avatar {
    border: 1px solid #E0E0E0;
    height: 286px;
  }

  &__empty {
    color: #76787D;
    font-size: 14px;
    font-weight: 400;
    line-height: 17.07px;
    height: calc(100% - 60px);
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .bold {
    font-weight: 600;
  }
}
</style>