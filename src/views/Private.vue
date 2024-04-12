<template>
  <div class="common-page">
    <top-header />
    <section class="main-container private-wallet">
      <div class="private-binding-wallet">
        <i class="icon-qianbao iconfont"></i>
      </div>
    </section>
    <common-footer />
  </div>
</template>

<script>
import TopHeader from '@/components/TopHeader.vue'
import CommonFooter from '@/components/CommonFooter.vue'

export default {
  name: 'PrivateWallet',
  components: { CommonFooter, TopHeader }
}
</script>
<style lang="scss">

.private-binding-wallet{
  background: linear-gradient(to bottom, #14314E, #193F4B);
  position: relative;
  overflow: hidden;
  border-radius: 14px;
  z-index: 2;
}

@media (max-width: 767px) {
  .private-binding-wallet{
    margin-top: 30px;
    padding: 28px 16px;
    height: 120px;
  }
  .private-wallet{
    padding: 0 16px;
    .icon-qianbao{
      font-size: 70px;
      color: #214F65;
      position: absolute;
      top: -20px;
      right: 0;
      z-index: 3;
    }
  }
}

@media (min-width: 768px) {

}
</style>
