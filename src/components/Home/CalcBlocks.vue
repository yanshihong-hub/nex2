<template>
  <div class="calc-block-container">
    <div class="calc-block">
      <div class="calc-outer-border">
        <img src="@/assets/images/calc_1.png" alt="" class="calc-block-image">
      </div>
      <div class="font-main-color text-center  calc-block-title font-weight-bold">Earn points</div>
      <div class="calc-block-description font-sub-color text-center">Send tweets mentioning us in this era (see above) to earn points and compete with friends</div>
    </div>
    <div class="calc-block">
      <div class="calc-outer-border">
        <img src="@/assets/images/calc_2.png" alt="" class="calc-block-image">
      </div>
      <div class="font-main-color text-center  calc-block-title font-weight-bold">Earn points</div>
      <div class="calc-block-description font-sub-color text-center">Send tweets mentioning us in this era (see above) to earn points and compete with friends</div>
    </div>
    <div class="calc-block">
      <div class="calc-outer-border">
        <img src="@/assets/images/calc_3.png" alt="" class="calc-block-image">
      </div>
      <div class="font-main-color text-center  calc-block-title font-weight-bold">Earn points</div>
      <div class="calc-block-description font-sub-color text-center">Send tweets mentioning us in this era (see above) to earn points and compete with friends</div>
    </div>
    <div class="calc-block">
      <div class="calc-outer-border">
        <img src="@/assets/images/calc_4.png" alt="" class="calc-block-image">
      </div>
      <div class="font-main-color text-center  calc-block-title font-weight-bold">Earn points</div>
      <div class="calc-block-description font-sub-color text-center">Send tweets mentioning us in this era (see above) to earn points and compete with friends</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CalcBlocks'
}
</script>

<style lang="scss">
.calc-block-container {
  display: grid;
  justify-content: center;

  .calc-outer-border {
    border: 2px solid rgba(0, 123, 254, 0.2);
    border-radius: 14px;
  }
}

@media (max-width: 767px) {
  .calc-block-container {
    grid-template-columns: 1fr 1fr;
    padding: 0 30px;
    gap: 30px;
    margin-bottom: 26px;

    .calc-block {
      display: flex;
      align-items: center;
      flex-direction: column;
    }

    .calc-outer-border {
      width: 86px;
      height: 86px;
      padding: 18px;
    }

    .calc-block-title {
      margin-top: 20px;
      font-size: 14px;
    }

    .calc-block-description {
      margin-top: 14px;
      font-size: 12px;
    }

    .calc-block-image {
      width: 50px;
      height: 50px;
    }
  }
}

@media (min-width: 768px) {
  .calc-block-container {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin-bottom: 120px;
    padding: 0 30px;
    gap: 30px;

    .calc-block {
      padding: 0 35px;
    }

    .calc-outer-border {
      padding: 20px;
    }

    .calc-block-title {
      margin-top: 50px;
      font-size: 26px;
    }

    .calc-block-description {
      margin-top: 10px;
      font-size: 16px;
    }

    .calc-block-image {
      width: 100px;
      height: 100px;
    }
  }
}
</style>
