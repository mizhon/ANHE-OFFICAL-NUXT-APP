<template>
  <div class="page-content-wrapper">

  </div>
</template>
<script>
export default {
  layout: 'normal',
  validate({params}) {
    // eslint-disable-next-line no-console
    console.log('知识中心详情页 = 获取参数: --->', params)
    return /^\d+$/.test(params.id)
  },
  data() {
    return {}
  },
  created() {

  }
}
</script>
