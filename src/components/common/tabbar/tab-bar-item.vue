<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isactive"><slot name="icon-item"></slot></div>
    <div v-else><slot name="icon-item-active"></slot></div>
    <div :style="activeStyle"><slot name="icon-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "tab-bar-item",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red",
    },
  },
  computed: {
    isactive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isactive ? { color: this.activeColor } : {};
      // if (this.isactive)return {color:this.activeColor}
      //  else
      //  return {}
    },
  },
  data() {
    return {
      // isactive: false,
    };
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path);
    },
  },
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
  color: #000000;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}
</style>