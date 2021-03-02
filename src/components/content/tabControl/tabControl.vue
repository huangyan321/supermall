<template>
  <div class="tabControl">
    <div
      v-for="(item, index) in titles"
      :key="index"
      class="tabControl_items"
      :class="{ active: tabbarCurIndex === index }"
      @click="itemClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabControl",
  props: {
    titles: {
      type: Array,
      default: [],
    },
    tabbarCurIndex: {
      type: Number,
      default: 0,
    },
  },
  // data() {
  //   return {
  //     curIndex: 0,
  //   };
  // },
  methods: {
    itemClick(index) {
      // this.curIndex = index;
      this.$emit("tabClick", index);
    },
  },
};
</script>

<style>
.tabControl {
  display: flex;
}
.tabControl .tabControl_items {
  flex: 1;
  text-align: center;
  height: 40px;
  line-height: 40px;
}
.active {
  color: var(--color-high-text);
}
.active span {
  border-bottom: 3px solid var(--color-tint);
  padding: 5px;
}
</style>