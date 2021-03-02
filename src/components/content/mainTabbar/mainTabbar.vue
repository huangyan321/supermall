<template>
  <div>
    <TabBar>
      <tab-bar-item path="/home" activeColor="#ff5777">
        <img slot="icon-item" src="~assets/imgs/tabbar/home.svg" alt="" />
        <img
          slot="icon-item-active"
          src="~assets/imgs/tabbar/home_active.svg"
          alt=""
        />
        <div slot="icon-text">首页</div></tab-bar-item
      >
      <tab-bar-item path="/category" activeColor="#ff5777">
        <img slot="icon-item" src="~assets/imgs/tabbar/category.svg" alt="" />
        <img
          slot="icon-item-active"
          src="~assets/imgs/tabbar/category_active.svg"
          alt=""
        />
        <div slot="icon-text">分类</div></tab-bar-item
      >
      <tab-bar-item path="/shopcart" activeColor="#ff5777">
        <img slot="icon-item" src="~assets/imgs/tabbar/shopcart.svg" alt="" />
        <img
          slot="icon-item-active"
          src="~assets/imgs/tabbar/shopcart_active.svg"
          alt=""
        />
        <div slot="icon-text">购物车</div></tab-bar-item
      >
      <tab-bar-item path="/profile" activeColor="#ff5777">
        <img slot="icon-item" src="~assets/imgs/tabbar/profile.svg" alt="" />
        <img
          slot="icon-item-active"
          src="~assets/imgs/tabbar/profile_active.svg"
          alt=""
        />
        <div slot="icon-text">我的</div></tab-bar-item
      >
    </TabBar>
  </div>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/tab-bar-item";
export default {
  name: "mainTabbar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>
</style>