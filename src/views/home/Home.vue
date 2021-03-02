<template>
  <div id="home">
    <nav-bar class="navBar"><div slot="center">购物街</div></nav-bar>
    <tab-control
      :titles="['流行', '新款', '精选']"
      @tabClick="tabclick"
      class="showTabbar"
      ref="tabControl"
      v-show="tab_control_show"
      :tabbarCurIndex="tabbarCurIndex"
    />
    <div class="mianContent">
      <scroll
        class="content"
        ref="scroll"
        :probe-type="3"
        @overcret="overcret"
        :pullUpLoad="true"
        @pullingUp="loadMore"
      >
        <main-swiper
          :banners="banners"
          id="mainSwiper"
          @swiperimgloaded="swiperImgLoaded"
        />
        <recommend-view :recommend="recommends" id="recommendView" />
        <feature-view />
        <tab-control
          :titles="['流行', '新款', '精选']"
          @tabClick="tabclick"
          ref="tabControl"
          :tabbarCurIndex="tabbarCurIndex"
        />
        <goodsList :goodList="Goods[curGoods].list" />
      </scroll>
      <backtop @click.native="backtopClick" v-show="creticalValue"></backtop>
    </div>
  </div>
</template>

<script>
import navBar from "components/common/navbar/navBar";
import mainSwiper from "./homeChildComp/mainSwiper";
import recommendView from "./homeChildComp/recommendView";
import featureView from "./homeChildComp/featureView";
import tabControl from "components/content/tabControl/tabControl";
import goodsList from "components/content/goods/goodsList";
import scroll from "components/common/scroll/Scroll";
import backtop from "components/content/backtop/backTop";
import { getHomeMultdata, getHomeGoods } from "network/home.js";
export default {
  name: "Home",
  components: {
    navBar,
    mainSwiper,
    recommendView,
    featureView,
    tabControl,
    goodsList,
    scroll,
    backtop,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      Goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      saveY: 0,
      tabbarCurIndex: 0,
      curGoods: "pop",
      creticalValue: false,
      tab_control_offsetTop: 0,
      tab_control_show: false,
    };
  },
  methods: {
    /**
     * 事件监听相关
     */
    tabclick(index) {
      this.tabbarCurIndex = index;
      switch (index) {
        case 0:
          this.curGoods = "pop";
          break;
        case 1:
          this.curGoods = "new";
          break;

        case 2:
          this.curGoods = "sell";
          break;
      }
    },
    backtopClick() {
      // console.log("backtopClick");
      this.$refs.scroll.scroll.scrollTo(0, 0, 500);
    },
    //滚动小于临界值，top图标隐藏
    // lowcret() {
    //   // console.log("111");
    //   this.creticalValue = false;
    // },
    //滚动大于临界值，显示
    overcret(position) {
      // console.log(position.y);

      if (position.y < -2400) this.creticalValue = true;
      else this.creticalValue = false;
      if (position.y <= -this.tab_control_offsetTop)
        this.tab_control_show = true;
      else this.tab_control_show = false;
    },
    //上拉加载更多
    loadMore() {
      this.getHomeGoods(this.curGoods);
      //调用此方法可重复加载更多
      this.$refs.scroll.finishpullUp();
    },
    swiperImgLoaded() {
      this.tab_control_offsetTop = this.$refs.tabControl.$el.offsetTop;
      // console.log(-this.tab_control_offsetTop);
    },
    /**
     * 网络相关
     */
    getHomeMultdata() {
      getHomeMultdata().then((res) => {
        // console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.Goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        //数组中拼接数组push(...(接需要拼接的数组))
        this.Goods[type].list.push(...res.data.list);
      });
      this.Goods[type].page += 1;
    },
    //防抖函数
    debounce(func, delay) {
      let timer = null;
      return function (...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          func.apply(this, args);
        }, delay);
      };
    },
  },
  created() {
    this.getHomeMultdata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    const refresh = this.debounce(this.$refs.scroll.refresh, 0);
    this.$bus.$on("imgLoaded", () => {
      // console.log("2222");
      refresh();
    });
  },
  destroyed() {
    console.log("destroyed");
  },
  activated() {
    this.$refs.scroll.scroll.scrollTo(0, this.saveY);
  },
  deactivated() {
    this.saveY = this.$refs.scroll.scroll.y;
  },
};
</script>

<style scoped>
.mianCoutent {
  position: relative;
}
.navBar {
  background-color: var(--color-tint);
  font-size: 18px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
  color: #fff;
}
/* .mainSwiper {
  margin-top: 44px;
} */
#home .content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  /*
   background-color: red; */
}
.showTabbar {
  background-color: #fff;
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  z-index: 9;
}
</style>