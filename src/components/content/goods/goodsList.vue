<template>
  <div class="goodsList">
    <goodsListItem v-for="item in goodList" :key="item.id" :listItem="item" />
  </div>
</template>

<script>
import goodsListItem from "./goodsListItem";
export default {
  name: "goodsList",
  components: {
    goodsListItem,
  },
  props: {
    goodList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.goodsList {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2px;
}
</style>