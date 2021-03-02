<template>
  <div class="Wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
export default {
  name: "Scroll",
  data() {
    return {
      scroll: null,
    };
  },
  props: {
    probeType: {
      type: Number,
      default() {
        return 0;
      },
    },
    pullUpLoad: {
      type: Boolean,
      default() {
        return 0;
      },
    },
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper, {
      observeDOM: true,
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
    });
    this.scroll.on("scroll", (position) => {
      this.$emit("overcret", position);
      // if (position.y < -2400) {
      //   this.$emit("overcret");
      // } else {
      //   this.$emit("lowcret");
      //}
    });
    this.scroll.on("pullingUp", () => {
      this.$emit("pullingUp");
    });
    this.scroll.refresh();
  },
  methods: {
    //调用此方法可重复加载更多
    finishpullUp() {
      // console.log("asdas");
      this.scroll && this.scroll.finishPullUp();
    },
    refresh() {
      // console.log("ddada");
      this.scroll && this.scroll.refresh();
    },
  },
};
</script>

<style scoped>
</style>