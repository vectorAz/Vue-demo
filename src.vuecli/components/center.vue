<template>
  <!--组件中的模板能直接访问组件对象的属性-->
  <ul class="todo-main">
    <List v-for="(item, index) in user" :user="item" :deletuser='deletuser' :index='index' :Setuser='Setuser' :key='item.id'/>
  <!-- 将数组的每一项传入item组件 生成结构 -->
  </ul>
</template>
<script>
import List from "./item.vue";

export default {
  // 声明接收什么属性: 属性名
  // 所有接收的属性都会成为组件对象属性
  // 组件对象相当于一个小的vm
  props: ["user",'deletuser','Setuser'],
  components: {
    List
  },
 
}
</script>
<style scoped>
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
