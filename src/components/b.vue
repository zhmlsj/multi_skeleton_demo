<template>
  <div class="hello">
    <Skeleton v-if="ajax" comName='Skeleton1'></Skeleton>
    <div v-if="!ajax">
      <h1>{{ msg }}</h1>
      <router-link to='/c'>去c页面</router-link>
      <img src="../assets/img1.png" alt="">
      <img src="../assets/img1.png" alt="">
    </div>

  </div>
</template>

<script>
export default {
  name: "bbbbb",
  data() {
    return {
      msg: "bbbbb",
      ajax: true
    };
  },
  created() {
    this.name();
  },
  methods: {
    name() {
      let _this = this;
      function buy() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (Math.random() < 0.5) {
              resolve("mai");
            } else {
              reject("err");
            }
          }, Math.random() * 10000);
        });
      }
      buy().then(
        data => {
          console.log(data);
          _this.ajax = false;
        },
        err => {
          console.log(err);
          _this.ajax = false;
        }
      );
    }
  }
};
</script>
