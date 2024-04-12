<template>
  <div class="circle-container d-flex">
    <div>
      <div class="circle-outer-1">
        <div class="circle-outer-2">
          <div class="circle-outer-3 d-flex align-items-center justify-content-center">
            <div>
              <img src="@/assets/images/center_1.png" alt="" class="center-images">
              <div class="font-weight-bold font-main-color text-center center-text">
                Original tweet Earn 30 times
              </div>
            </div>
          </div>
        </div>
        <div class="circle-corner font-sub-color top left">
          <img src="@/assets/images/points_1.png" alt="">
          <div>30 points for each viewing</div>
        </div>
        <div class="circle-corner font-sub-color top right">
          <img src="@/assets/images/points_2.png" alt="">
          <div>7500 points per reply</div>
        </div>
        <div class="circle-corner font-sub-color bottom left">
          <img src="@/assets/images/points_3.png" alt="">
          <div>30,000 points for each retweet</div>
        </div>
        <div class="circle-corner font-sub-color bottom right">
          <img src="@/assets/images/points_4.png" alt="">
          <div>3000 points for each like</div>
        </div>
      </div>
    </div>
    <div>
      <div class="circle-outer-1" style="border-color:#D9D9D9;">
        <div class="circle-outer-2" style="border:none">
          <div class="circle-outer-3 d-flex align-items-center justify-content-center" style="border:none">
            <div>
              <img src="@/assets/images/center_2.png" alt="" class="center-images">
              <div class="font-weight-bold font-main-color text-center center-text">
                Original tweet Earn 30 times
              </div>
            </div>
          </div>
        </div>
        <div class="circle-corner font-sub-color top left">
          <img src="@/assets/images/points_1.png" alt="">
          <div>30 points for each viewing</div>
        </div>
        <div class="circle-corner font-sub-color top right">
          <img src="@/assets/images/points_2.png" alt="">
          <div>7500 points per reply</div>
        </div>
        <div class="circle-corner font-sub-color bottom left">
          <img src="@/assets/images/points_3.png" alt="">
          <div>30,000 points for each retweet</div>
        </div>
        <div class="circle-corner font-sub-color bottom right">
          <img src="@/assets/images/points_4.png" alt="">
          <div>3000 points for each like</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'Circle-Block'
}
</script>

<style lang="scss">

.circle-outer-1,.circle-outer-2,.circle-outer-3{
  border-radius: 100%;
  border-width: 1px;
  width: 100%;
  height: 100%;
  position: relative;
}
.circle-outer-2{
  border-style: solid;
  border-color: #2688EA;
}

.circle-outer-1,.circle-outer-3{
  border-style: dashed;
}
.circle-outer-1{
  border-color: #fff;

  .center-images{
    display: block;
    margin: 0 auto;
  }
  .circle-corner{
    position: absolute;
    text-align: center;
    background: rgba(17, 36, 56, 1);
    img {
      display: inline-block;
      width: 24px;
      height: 24px;
    }
    &.left {
      left: 12px;
    }
    &.top {
      top: 21px;
    }
    &.bottom {
      bottom: 21px;
    }
    &.right {
      right: 12px;
    }
  }
}
.circle-outer-3{
  border-color: #26DEEA;
}

@media (max-width: 767px){
  .circle-container{
    flex-direction: column;
    gap: 50px;
  }
  .circle-outer-1,.circle-outer-2,.circle-outer-3{
    padding: 16px;
    border-radius: 100%;
  }
  .circle-outer-1{
    width: 280px;
    height: 280px;
    margin: 28px auto 0 auto;
    .circle-corner{
      width: 92px;
      height: 64px;
    }
    .center-images{
      width: 48px;
      height: 48px;
    }
    .center-text{
      max-width: 104px;
      font-size: 14px;
    }
  }
}
@media (min-width: 768px){

  .circle-container{
    margin-top: 96px;
    flex-direction: row;
    & > div {
      flex: 1;
      display: flex;
      justify-content: center;
    }
  }
  .circle-outer-1,.circle-outer-2,.circle-outer-3{
    padding: 20px;
    border-radius: 100%;
  }
  .circle-outer-1{
    width: 380px;
    height: 380px;
  }
}

</style>
