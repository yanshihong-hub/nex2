<template>
  <div class="rank-total flex-fill">
    <div class="font-sub-color rank-text">Accumulated Points</div>
    <div class="font-main-color">
      <span class="rank-total-current font-weight-bold">200</span>
      <span class="rank-total-count">/points</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RankTotal'
}
</script>

<style lang="scss">

.rank-total{
  background: linear-gradient(to bottom, #14314E, #193F4B);
}

@media (max-width: 767px) {
  .rank-total {
    padding: 12px;
    border-radius: 14px;
    .rank-total-current{
      font-size: 24px;
    }
  }
}

@media (min-width: 768px) {
  .rank-total {
    padding: 34px;
    border-radius: 24px;
    .rank-total-current{
      font-size: 50px;
    }

    .rank-text{
      font-size: 24px;
    }
    .rank-total-count{
      font-size: 16px;
    }
  }
}
</style>
