<template>
  <div class="common-page ">
    <top-header/>
    <section class="main-container">
      <div class="rank-total-wrapper d-flex">
        <rank-total/>
        <rank-total/>
      </div>
      <div class="rank-list">
        <div class="rank-title font-weight-bold font-main-color text-center">Ranking list</div>
        <div class="rank-list-data">
          <div class="rank-row rank-row__header">
            <div class="text-left">Number</div>
            <div>Name</div>
            <div>Points</div>
          </div>
          <div>
            <div v-for="i in 10" class="rank-row rank-row__data-row" :key="i">
              <div class="rank-row__cel-number">{{ i  }}</div>
              <div class="font-main-color font-weight-bold">Rome</div>
              <div class="font-main-color font-weight-bold">113,431</div>
            </div>
          </div>
        </div>
        <div class="rank-list-extra-data">
          <div class="rank-row rank-row__data-row" style="margin-bottom: 0">
            <div class="rank-row__cel-number">11</div>
            <div class="font-main-color font-weight-bold">Rome</div>
            <div class="font-main-color font-weight-bold">113,431</div>
          </div>
        </div>
      </div>
    </section>
    <common-footer/>

  </div>
</template>

<script>
import CommonFooter from '@/components/CommonFooter.vue'
import TopHeader from '@/components/TopHeader.vue'
import RankTotal from '@/components/Rank/RankTotal.vue'

export default {
  name: 'RankList',
  components: {
    RankTotal,
    TopHeader,
    CommonFooter
  }
}
</script>
<style lang="scss">

.rank-list-data {
  background: rgba(19, 39, 58, 0.94);
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  border-radius: 14px;
}

.rank-row {
  display: grid;
  grid-template-columns: 30% 1fr 1fr;
  text-align: center;

  &__header {
    border-bottom: 1px solid #283A4C;
  }
}

@media (max-width: 767px) {
  .rank-total-wrapper {
    margin-top: 32px;
    padding-left: 16px;
    padding-right: 16px;
    gap: 10%;
  }

  .rank-title {
    font-size: 24px;
  }

  .rank-list, .rank-list-data {
    margin-top: 24px;
  }

  .rank-list {
    padding-left: 16px;
    padding-right: 16px;
  }

  .rank-list-data {
    padding: 16px;
    position: relative;
    z-index: 4;

    .rank-row__data-row {
      .rank-row__cel-number{
        width: 30px;
        height: 30px;
        text-align: center;
      }
      @for $i from 1 through 3 {
        &:nth-child(#{$i}) .rank-row__cel-number {
          color: #333;
          background: url("@/assets/images/rank_top_#{$i}.png");
          background-size: cover;
        }
      }
    }
  }
  .rank-row {
    & > * {
      padding: 0 12px;
    }

    &__header {
      padding-bottom: 12px;
      margin-bottom: 12px;
    }

    &__data-row {
      height: 30px;
      line-height: 30px;
      margin-bottom: 24px;
    }

    &__cel-number {
      text-align: left;
    }
  }

  .rank-list-extra-data {
    position: relative;
    z-index: 3;
    top: -28px;
    background: #2688EA;
    border-radius: 14px;
    //padding-top: 40px;
    //padding-bottom: 20px;
    //padding-left: 16px;
    //padding-right: 16px;
    padding: 40px 16px 20px;
    margin-bottom: 40px;
  }
}

@media (min-width: 768px) {
  .rank-total-wrapper {
    margin-top: 54px;
    gap: 15%;
  }
  .rank-title {
    font-size: 50px;
  }
  .rank-row {
    & > * {
      padding: 0 12px;
    }

    &__header {
      padding-bottom: 20px;
      margin-bottom: 30px;
    }

    &__data-row {
      height: 50px;
      line-height: 50px;
      margin-bottom: 30px;
    }

    &__cel-number {
      text-align: left;
    }
  }
  .rank-list-data {
    padding: 38px 24px;
    font-size: 18px;
    .rank-row__data-row {
      .rank-row__cel-number{
        width: 50px;
        height: 50px;
        text-align: center;
      }
      @for $i from 1 through 3 {
        &:nth-child(#{$i}) .rank-row__cel-number {
          color: #333;
          background: url("@/assets/images/rank_top_#{$i}.png");
          background-size: cover;
        }
      }
    }

  }
  .rank-list, .rank-list-data {
    margin-top: 86px;
  }
  .rank-list-extra-data {
    margin-top: 30px;
    padding: 16px;
    border: 1px solid #2688EA;
    border-radius: 24px;
    font-size: 18px;
    margin-bottom: 40px;
  }
}
</style>
