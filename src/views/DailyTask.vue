<template>
  <div class="common-page ">
    <top-header/>
    <section class="main-container">
      <div class="block-main-title text-center task-page-title">Daily Task</div>
      <div class="font-sub-color text-center task-page-description">
        Nexus Coin will update your points at 8:00 am EST every day starting from May 1, 2024. The points you earn will be automatically converted into XEX tokens.
      </div>

      <div class="task-block-wrapper">
        <div class="task-block-description">
          <div class="block-border">
            <img src="@/assets/images/task_description_1.png" class="task-block-image">
          </div>
          <div class="block-content">
            <div class="font-weight-bold font-main-color block-content__title">
              Twitter creation
            </div>
            <div class="font-sub-color">
              Mention NEX or #tips on Twitter and you'll automatically earn points!
            </div>
          </div>
        </div>
        <div class="task-block-description">
          <div class="block-border">
            <img src="@/assets/images/task_description_2.png" class="task-block-image">
          </div>
          <div class="block-content">
            <div class="font-weight-bold font-main-color block-content__title">
              Twitter creation
            </div>
            <div class="font-sub-color">
              Mention NEX or #tips on Twitter and you'll automatically earn points!
            </div>
          </div>
        </div>
        <div class="task-block-description">
          <div class="block-border">
            <img src="@/assets/images/task_description_3.png" class="task-block-image">
          </div>
          <div class="block-content">
            <div class="font-weight-bold font-main-color block-content__title">
              Twitter creation
            </div>
            <div class="font-sub-color">
              Mention NEX or #tips on Twitter and you'll automatically earn points!
            </div>
          </div>
        </div>
      </div>
    </section>
    <common-footer/>
  </div>
</template>

<script>
import TopHeader from '@/components/TopHeader.vue'
import CommonFooter from '@/components/CommonFooter.vue'

export default {
  name: 'DailyTask',
  components: {
    CommonFooter,
    TopHeader
  }
}
</script>
<style lang="scss">

.task-block-description {
  border-radius: 14px;
  background: linear-gradient(to bottom, rgba(20, 49, 78, 0.95), rgba(25, 63, 75, 0.95));
  display: flex;
  .block-border {
    border: 2px solid rgba(0, 123, 254, 0.2);
    border-radius: 14px;
  }
  .block-content{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}

@media (max-width: 767px) {
  .task-page-title {
    margin-top: 48px;
  }
  .task-page-description {
    margin-top: 24px;
    margin-left: 12%;
    margin-right: 12%;
  }

  .task-block-wrapper {
    padding: 0 16px;
    margin-top: 61px;
    display: flex;
    flex-direction: column;
    gap: 12px;

    .task-block-description {
      padding: 25px 20px;
      gap: 20px;
      .block-border{
        padding: 10px;
      }
      .task-block-image{
        width: 48px;
        height: 48px;
      }

      .block-content{
        &__title{
          font-size: 16px;
        }
      }
    }
  }
}

@media (min-width: 768px) {
  .task-page-title {
    margin-top: 66px;
  }
  .task-page-description {
    margin-top: 28px;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;

  }
  .task-block-wrapper {
    //padding: 0 16px;
    margin-top: 61px;
    display: flex;
    flex-direction: row;
    gap: 120px;
    .task-block-description {
      padding: 50px 20px;
      max-width: 300px;
      flex-direction: column;
      align-items: center;
      text-align: center;
      .block-border{
        padding: 20px;
        margin-bottom: 48px;
      }
      .task-block-image{
        width: 100px;
        height: 100px;
      }
      .block-content{
        &__title{
          font-size: 26px;
        }
      }
    }
  }
}
</style>
