<template>
  <div class="navBar">
    <div class="nav_left"><slot name="left"></slot></div>
    <div class="nav_center"><slot name="center"></slot></div>
    <div class="nav_right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "navBar",
};
</script>

<style>
.navBar {
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
}
.navBar .nav_left {
  width: 60px;
}
.navBar .nav_right {
  width: 60px;
}
.navBar .nav_center {
  flex: 1;
}
</style>