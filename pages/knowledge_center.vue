import CommonNavTab from '@/components/CommonNavTab.vue';
<template>
  <div class="page-content-wrapper">
    <CommonNavTab :tabs="tabs" :active-tab="activeTabIndex" @get-tab-index="getActiveTabIndex" />
  </div>
</template>
<script>
import CommonNavTab from '@/components/CommonNavTab.vue'

export default {
  name: 'KnowledgeCenterPage',
  components: {
    CommonNavTab
  },
  data() {
    return {
      activeTabIndex: 0, // 默认激活的tab标签为0
      tabs: [
        { id: 0, label: '学术研讨' },
        { id: 1, label: '产品笔记' },
        { id: 2, label: '前沿动态' }
      ]
    }
  },
  methods: {
    getActiveTabIndex(index) {
      this.activeTabIndex = index;

    }
  }
}
</script>
