import Vue from "vue";
import Skeleton from "./Skeleton.vue";
import Skeleton1 from "./Skeleton1.vue";

export default new Vue({
  components: {
    Skeleton,
    Skeleton1
  },
  template: `
  <div>
      <skeleton id="skeleton" style="display:none"/>
      <skeleton1 id="skeleton1" style="display:none"/>
  </div>
`
});
