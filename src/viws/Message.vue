<template>
  <ul>
    <li v-for="(item, index) in messages" :key="index">
      <router-link :to="'/home/message/detail/'+item.id">{{item.title}}</router-link>&nbsp;
      <button>push查看</button>
      &nbsp;
      <button>replace查看</button>
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      messages: []
    };
  },
  mounted() {
    setTimeout(() => {
      let list = [
        { id: 1, title: "message001" },
        { id: 3, title: "message003" },
        { id: 5, title: "message005" }
      ]

      this.messages = list;
    }, 1000);
    console.log(this.messages);
  }
};
</script>

<style>
</style>
