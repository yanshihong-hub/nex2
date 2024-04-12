<template>
  <div class="points-description">
    <div class="font-weight-bold font-main-color text-with-quote text-center">
      <span class="points-description__title">How points work</span>
    </div>
    <div class="points-description__content text-center font-sub-color">Earning points is easy, just use TwitterFollow, like, watch, retweet and other actions and mark <span class="font-main-color with-slider-icon">Token Name</span> will automatically earn points!</div>
    <div class="points-description__list">
      <div class="list-item font-weight-bold">
        <span class="with-slider-icon"></span>
        <img src="../../assets/images/points_1.png" class="list-item-image" alt="">1 point per view
      </div>
      <div class="list-item font-weight-bold">
        <span class="with-slider-icon"></span>
        <img src="../../assets/images/points_2.png" class="list-item-image" alt="">100 points for each like
      </div>
      <div class="list-item font-weight-bold">
        <span class="with-slider-icon"></span>
        <img src="../../assets/images/points_3.png" class="list-item-image" alt="">250 points for each reply
      </div>
      <div class="list-item font-weight-bold">
        <span class="with-slider-icon"></span>
        <img src="../../assets/images/points_4.png" class="list-item-image" alt="">1k points for each retweet
      </div>
    </div>

    <circle-block/>

    <div class=" share-container">
      <share-with title="Share via wallet" description="1,000 points awarded each time">
        <template #image>
          <img class="share-images" src="@/assets/images/share_wallet.png" alt="">
        </template>
      </share-with>
      <share-with title="Share via Twitter" description="10,000 points will be awarded each time">
        <template #image>
          <img class="share-images" src="@/assets/images/share_twitter.png" alt="">
        </template>
      </share-with>
    </div>
  </div>
</template>
<script>

import CircleBlock from '@/components/Home/CircleBlock.vue'
import ShareWith from '@/components/Home/ShareWith.vue'

export default {
  name: 'PointsDescription',
  components: {
    ShareWith,
    CircleBlock
  }
}
</script>

<style lang="scss">
.points-description {
  background: rgba(17, 36, 56, 0.9);
  position: relative;

  &__v-line {
    position: absolute;
    width: 100%;
    height: 1px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.06) 0%, #1F1F1F 77%);
    z-index: 3;
  }

  &__h-line {
    position: absolute;
    width: 1px;
    height: 100%;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.06) 0%, #1F1F1F 60%);
  }

}

@media (max-width: 767px) {
  .points-description {
    padding: 24px;
    margin-top: 20px;
    margin-left: 24px;
    margin-right: 24px;
    border-radius: 14px;
    padding-bottom: 40px;

    &__title {
      margin: 0 24px;
      font-size: 24px;
    }

    &__content {
      margin-top: 27px;
      font-size: 12px;
    }

    &__list {
      margin-top: 27px;
      text-align: center;

      .list-item {
        display: flex;
        font-size: 14px;
        justify-content: center;
        margin-bottom: 24px;
      }

      .list-item-image {
        width: 24px;
        height: 24px;
      }
    }
  }

  .share-container {
    margin-top: 36px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}

@media (min-width: 768px) {
  .points-description {
    margin-top: 96px;
    border-radius: 28px;
    padding-bottom: 90px;
    &__title {
      margin: 0 90px;
      font-size: 50px;
    }

    &__content {
      margin-top: 51px;
      font-size: 16px;
    }

    &__list {
      margin-top: 75px;
      text-align: center;
      display: flex;

      .list-item {
        flex: 1;
        display: flex;
        font-size: 16px;
        justify-content: center;
      }

      .list-item-image {
        width: 24px;
        height: 24px;
      }
    }
  }

  .share-container {
    margin-top: 36px;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: row;
    gap: 50px;
  }

}
</style>
