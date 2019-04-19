<template>
  <ul>
    <li>id:{{$route.params.id}}</li>
    <li>title:{{message.title}}</li>
    <li>content:{{message.content}}</li>
    <h1>{{msg}}</h1>
  </ul>
</template>
<script>
const detail = [
  { id: 1, title: "message001", content: "message 11111111" },
  { id: 3, title: "message003", content: "message 33333333" },
  { id: 5, title: "message005", content: "message 55555555" }
];
export default {
  props:{
    msg:Number
  },

  data() {
    return {
      message: {}
    };
  },
  mounted() {
    setTimeout(() => {
      const id = +this.$route.params.id;
      this.show(id);
      //  console.log(messageDetail);
    }, 1000);
  },
  watch: {
    $route(val, index) {
      const id = +val.params.id;
      this.show(id);
    }
  },
  methods: {
    show(id) {
      this.message = detail.find(item => item.id === id);
  }
  }
};
</script>

<style scoped>
</style>