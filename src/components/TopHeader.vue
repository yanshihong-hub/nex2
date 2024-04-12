
<template>
  <div class="common-header d-flex align-items-center ">
    <span class="common-header__logo">LOGO</span>
    <div class="common-header__nav flex-fill">
      <router-link class="header-nav-item" to="/">Home</router-link>
      <router-link class="header-nav-item" to="/rank">Ranking List</router-link>
      <router-link class="header-nav-item" to="/private">Private placement</router-link>
      <router-link class="header-nav-item" to="/task">Daily Task</router-link>
    </div>
    <div v-if="isLogin" class="common-header__user d-flex align-items-center ">
      Nexus Coin
    </div>
    <button class="common-header__login d-flex align-items-center justify-content-center reset-btn">Sign In</button>
  </div>
</template>

<script>

export default {
  name: 'Top-Header',
  data () {
    return {
      isLogin: false
    }
  }
}
</script>

<style lang="scss">

@media (max-width: 767px) {
  .common-header {
    height: 50px;

    &__logo {
      font-size: 16px;
    }

    &__user {
      font-size: 14px;
    }

    &__login {
      width: 120px;
      height: 30px;
    }
  }
}

@media (min-width: 768px) {
  .common-header {
    height: 96px;

    &__user {
      font-size: 2rem;
    }

    &__logo {
      font-size: 2rem;
    }

    &__nav {
      display: flex;
      justify-content: center;
    }

    &__login {
      width: 166px;
      height: 50px;
    }

    .header-nav-item {
      color: #868C8D;
      position: relative;
      text-decoration: none;
      text-align: center;
      padding: 0 16px;
      font-size: 16px;

      &.router-link-exact-active {
        color: #fff;
        font-weight: bold;

        &:after {
          content: '';
          width: 100%;
          height: 16px;
          left: 0;
          bottom: -12px;
          position: absolute;
          background: url("@/assets/images/nav_slider.png") no-repeat center top;
          background-size: contain;
        }
      }
    }
  }
}
</style>
