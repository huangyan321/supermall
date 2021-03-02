<template>
  <div class="detailNavBar">
    <nav-bar>
      <div slot="left" class="backBtn" @click="backBtmClick">
        <img src="~assets/imgs/common/back.svg" alt="" />
      </div>
      <div slot="center" class="title">
        <div
          v-for="(item, index) in titleList"
          :key="index"
          class="titleItem"
          :class="{ active: index === curIndex }"
          @click="titleClick(index)"
        >
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import navBar from "components/common/navbar/navBar";

export default {
  name: "detailNavBar",
  components: {
    navBar,
  },
  data() {
    return {
      titleList: ["商品", "参数", "评论", "推荐"],
      curIndex: 0,
    };
  },
  methods: {
    titleClick(index) {
      this.curIndex = index;
    },
    backBtmClick() {
      this.$router.back();
    },
  },
};
</script>

<style>
.title {
  display: flex;
  font-size: 15px;
}
.titleItem {
  flex: 1;
}
.active {
  color: var(--color-tint);
}
/* .backBtn {

} */
.backBtn img {
  width: 25px;
  margin-top: 9px;
}
</style>