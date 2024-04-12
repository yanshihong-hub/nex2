<template>
  <section class="task-block">
    <div class="d-flex align-items-center block-title-text font-weight-bold">
      <span class="font-main-color">Welcome</span>
      <span class="font-primary-color font-italic">NexusCoin</span>
    </div>
    <div class="font-sub-color block-title-description">
      Extending the Power ofsocial Networking Infinitely.
    </div>
    <div class="block-main-content font-main-color text-with-quote">
      Reward friends and your favorite creators, inside Twitter
    </div>

    <div class="task-button-wrapper">
      <button class="reset-btn d-flex align-items-center justify-content-center task-button font-main-color"> Daily Task </button>
    </div>
  </section>
</template>

<script>

export default {
  name: 'TaskBlock'
}
</script>

<style lang="scss">

.task-button{
  display: block;
  width: 100%;
  border-radius: 14px;
  background: linear-gradient( 90deg, #2688EA 0%, #26DEEA 100%);
}
@media (max-width: 767px) {
  .task-block {
    margin-top: 30px;
  }
  .block-title-text {
    font-size: 24px;
    justify-content: center;
  }

  .block-title-description {
    margin-top: 5px;
    text-align: center;
    font-size: 12px;
  }

  .block-main-content {
    margin-top: 26px;
    font-size: 12px;
    text-align: center;
    &:before,&:after{
      font-size: 20px;
    }
  }
  .task-button-wrapper{
    padding-left: 34px;
    padding-right: 34px;
  }
  .task-button{
    height: 50px;
    margin-top: 12px;
  }
}

@media (min-width: 768px) {
  .task-block {
    margin-top: 64px;
  }
  .block-title-text {
    font-size: 60px;
  }
  .block-title-description {
    margin-top: 20px;
    font-size: 24px;
  }
  .block-main-content {
    margin-top: 68px;
    font-size: 20px;
    &:before,&:after{
      font-size: 50px;
    }
  }

  .task-button{
    margin-top: 28px;
    font-size: 20px;
    height: 50px;
    width: 380px;
  }
}
</style>
