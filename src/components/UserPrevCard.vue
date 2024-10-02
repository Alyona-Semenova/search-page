<template>
  <div class="user-prev-card" :class="{ 'user-prev-card_active': isActive }" @click="changeActivityCard">
    <div class="user-prev-card__img">
      <img src="@/assets/userImage.svg" alt="Фото"/>
    </div>
    <div class="user-prev-card__info" :class="{ 'user-prev-card__info_active': isActive }">
      <div class="user-prev-card__name">
        {{ user.name }}
      </div>
      <div class="user-prev-card__email">
        {{ user.email }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserPrevCard",
  props: {
    user: {
      type: Object,
      required: true,
    },

    isActive: {
      type: Boolean,
      default: false,
    }
  },

  methods: {
    changeActivityCard() {
      this.$emit("changeActivityCard", this.user);
    }
  }
}
</script>

<style scoped lang="scss">
.user-prev-card {
  width: 100%;
  height: 70px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px #0000001A;
  overflow: hidden;
  display: flex;
  cursor: pointer;
  border: 1px solid transparent;

  &_active {
    border: 1px solid #E0E0E0;
  }

  &__img {
    width: 70px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #E0E0E0;

    img {
      width: 100%;
      height: 100%;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 15px;
    width: calc(100% - 70px);

    &_active {
      background-color: #E0E0E0;
    }
  }

  &__name {
    color: #333;
    font-size: 14px;
    font-weight: 600;
    line-height: 17.07px;
  }

  &__email {
    color: #76787D;
    font-size: 14px;
    font-weight: 400;
    line-height: 17.07px;
  }
}
</style>