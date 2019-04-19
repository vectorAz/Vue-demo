<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Hearde :adduser="adduser"/>
      <Center :user="user" :deletuser="deletuser"/>
      <Bottom :user="user" :setAllCheck="setAllCheck" :ALLclear="ALLclear"/>
    </div>
  </div>
</template>

<script>
import Hearde from "./components/heard.vue";
import Bottom from "./components/bottom.vue";
import Center from "./components/center.vue";

export default {
  data() {
    return {
      user:JSON.parse(localStorage.getItem('user_key'||'[]')) //解析不能为null  并且要为json字符串
    };
  },
  methods: {
    adduser(value) {
      this.user.unshift(value);
    },
    deletuser(index) {
      this.user.splice(index, 1);
    },
    setAllCheck(val) {
      // console.log('1111');

      this.user.map((item, indx) => (item.isshow = val));
    },
    ALLclear() {
      this.user = this.user.filter(user => !user.isshow);
    }
  },
  components: {
    Hearde,
    Center,
    Bottom
  },
   watch: {
    user:{
      deep: true, //深度监视
      handler: function (val, oldVal) { 
          localStorage.setItem('user_key',JSON.stringify(val))
       },
    },
  },
};
</script>

<style>
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
