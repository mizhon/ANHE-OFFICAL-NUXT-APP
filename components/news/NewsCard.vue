<template>
  <div class="news-card-container">
    <img :src="info.img" alt="" width="100%" />
    <div class="news-content" @click="onItemClick">
      <div class="title">
        {{ info.title }}
      </div>
      <div class="summary">
        {{ info.summary }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'NewsCard',
  props: {
    info: {
      type: Object,
      default: () => {
        return {
          img: '',
          title: '',
          summary: ''
        }
      }
    }
  },
  data() {
    return {}
  },
  methods: {
    onItemClick() {
      this.$emit('click')
    }
  }
}
</script>
<style lang="scss" scoped>
.news-card-container {
  display: flex;
  flex-direction: column;
  padding: 12px;
  margin: 20px 5px 5px 5px;
  border: 1px solid #eee;

  .news-content {
    cursor: pointer;
    .title {
      padding: 23px 10px 19px 10px;
      color: $primaryText;
      font-size: 18px;
      font-weight: 400;
    }

    .summary {
      padding: 0 10px 15px 10px;
      color: $navTabText;
      font-size: 14px;
      font-weight: 400;
      line-height: 24px;
    }
  }
}
</style>
