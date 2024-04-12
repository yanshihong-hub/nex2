<template>
  <div class="share-with d-flex">
    <slot name="image"></slot>
    <div>
      <div class="font-main-color font-weight-bold font-size-16">{{ title}}</div>
      <div class="font-sub-color">{{ description}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShareWith',
  props: ['title', 'description']
}
</script>

<style lang="scss">
.share-with {
  background: rgba(38,136,234,0.3);
  border-radius: 14px;
  gap: 20px;
}

@media (max-width: 767px){
  .share-with{
    padding: 20px 26px;
    align-items: center;
    .share-images{
      width: 36px;
      height: 36px;
    }
  }
}
@media (min-width: 768px){
  .share-with{
    padding: 20px 48px;
    align-items: center;
    flex: 1;
    .share-images{
      width: 36px;
      height: 36px;
    }
  }
}
</style>
