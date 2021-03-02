<template>
  <div id="detail">
    <detailNavBar></detailNavBar>
  </div>
</template>

<script>
import detailNavBar from "views/detail/childComps/detailNavBar";

export default {
  name: "Detail",
  data() {
    return {
      iid: null,
    };
  },
  components: {
    detailNavBar,
  },
  created() {
    // console.log(this.$route.params.iid);
    this.iid = this.$route.params.iid;
  },
};
</script>

<style>
</style>