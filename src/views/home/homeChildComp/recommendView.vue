<template>
  <div class="recommend">
    <div v-for="item in recommend" :key="item.id" class="recommend_item">
      <a :href="item.link"
        ><img :src="item.image" alt="" />
        <div>{{ item.title }}</div></a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "recommendView",
  props: {
    recommend: {
      type: Array,
      default: [],
    },
  },
};
</script>

<style>
.recommend {
  display: flex;
  width: 100%;
  text-align: center;
  padding: 15px 0 30px;
  border-bottom: 8px solid #eee;
}
.recommend_item {
  display: 1;
  width: 100%;
  font-size: 12px;
}
.recommend_item img {
  width: 80%;
  margin-bottom: 10px;
}
</style>