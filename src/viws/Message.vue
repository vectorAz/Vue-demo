<template>
  <div>
    <ul>
      <li v-for="(item, index) in messages" :key="index">
        <router-link :to="'/home/message/detail/'+item.id">{{item.title}}</router-link>&nbsp;
        <button @click="PushDetail(item.id)">push查看</button>
        &nbsp;
        <button @click="replaceDetail(item.id)">replace查看</button>
      </li>
    </ul>
    <button @click="Gohome">返回</button>
    <hr>
    <keep-alive>  
    <router-view :msg='1234'/>
    </keep-alive >
    <hr>
  </div>
</template>
<script>
export default {
  data() {
    return {
      messages: []
    };
  },
  methods: {
    PushDetail(id){
      this.$router.push(`/home/message/detail/${id}`)
    },
    replaceDetail(id) {
      this.$router.replace(`/home/message/detail/${id}`)
    },
    Gohome(){
      this.$router.back()
    }
  },

  mounted() {
    setTimeout(() => {
      let list = [
        { id: 1, title: "message001" },
        { id: 3, title: "message003" },
        { id: 5, title: "message005" }
      ];

      this.messages = list;
    }, 1000);
    console.log(this.messages);
  }
};
</script>

<style>
</style>
