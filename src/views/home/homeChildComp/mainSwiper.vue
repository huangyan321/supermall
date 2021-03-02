<template>
  <div class="mainSwiper">
    <Swiper>
      <SwiperItem v-for="item in banners" :key="item.id">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="swiperimgloaded" />
        </a>
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/swiper/index.js";
export default {
  name: "mainSwiper",
  components: {
    Swiper,
    SwiperItem,
  },
  data() {
    return {
      imgLoaded: false,
    };
  },
  props: {
    banners: {
      type: Array,
      default: [],
    },
  },
  methods: {
    swiperimgloaded() {
      //if语句中变量的值不会改变
      if (!this.imgLoaded) {
        this.$emit("swiperimgloaded");
        this.imgLoaded = true;
      }
    },
  },
};
</script>

<style>
</style>