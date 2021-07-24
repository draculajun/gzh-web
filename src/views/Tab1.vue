<template>
  <div>
    <van-grid :border="false" :icon-size="60" clickable>
      <van-grid-item
          v-for="(item,index) in gridItemList"
          :key="index"
          :text="item.text"
          :icon="item.photo"
          @click="vanItemClickHandler(item)"
      />
    </van-grid>
  </div>
</template>

<script>

import tab1GridItemList from './tab1GridItems'

export default {
  name: "Tab1",

  data() {
    return {
      gridItemList: tab1GridItemList
    }
  },

  methods: {
    vanItemClickHandler(e) {
      console.log(e);
    },
  }
}
</script>

<style scoped>

</style>
