<template>
  <div class="common-footer">
    <div class="footer-content">
      <div>
        <router-link class="footer-nav-item" to="/"/>
      </div>
      <div>
        <router-link class="footer-nav-item" to="/rank"/>
      </div>
      <div>
        <router-link class="footer-nav-item" to="/private"/>
      </div>
      <div>
        <router-link class="footer-nav-item" to="/task"/>
      </div>
      <div>
        <router-link class="footer-nav-item" to="/user"/>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CommonFooter'
}
</script>

<style lang="scss">
@media (max-width: 767px){
  body {
    padding-bottom: 50px;
  }
  .common-footer{
    position: fixed;
    left: 0;
    bottom: 16px;
    width: 100%;
    padding: 0 16px;
    z-index: 444;
    .footer-nav-item{
      width: 24px;
      height: 24px;
      display: block;
    }
    .footer-content{
      border: 1px solid #2582DF;
      border-radius: 14px;
      background: #112437;
      padding: 13px 0 ;
      display: flex;
      & > * {
        flex: 1;
        text-align: center;
        display: flex;
        justify-content: center;
        @for $i from 1 through 5 {
          &:nth-child(#{$i}) .footer-nav-item {
            background: url("@/assets/images/nav_#{$i}.png");
            background-size: cover;
            &.router-link-exact-active{
              background: url("@/assets/images/nav_#{$i}_active.png");
              background-size: cover;
            }
          }
        }
      }
    }
  }
}
@media (min-width: 768px){
  .common-footer{
    display: none;
  }
}
</style>
