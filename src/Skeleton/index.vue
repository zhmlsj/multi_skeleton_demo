<template>
  <div>
    <component v-bind:is="comName"></component>
  </div>
</template>

<script>
import Skeleton from "./Skeleton";
import Skeleton1 from "./Skeleton1";

export default {
  name: "skeletonCom",
  components: {
    Skeleton,
    Skeleton1
  },
  data() {
    return {
      who: "Skeleton"
    };
  },
  props: {
    comName: {
      type: String,
      default: "Skeleton"
    }
  },
  created() {
    console.log(this.comName);
    switch (this.comName) {
      case "Skeleton1":
        this.who = "Skeleton1";
        break;

      default:
        this.who = "Skeleton";
        break;
    }
  }
};
</script>

<style scoped>
</style>