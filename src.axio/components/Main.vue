<template>
  <h1 v-if="h1Show">请输入要搜索的内容。。。。</h1>
  <h1 v-else-if="Loading">Loading........</h1>
  <h1 v-else-if="ISerr">{{ISerr}}</h1>
  <div v-else class="row">
    <div class="card" v-for="(item, index) in users" :key="item.id">
      <a :href="item.Url" target="_blank">
        <img :src="item.imgurl" style="width: 100px">
      </a>
      <p class="card-text">{{item.name}}</p>
    </div>
  </div>
</template>

<script>
import PubSub from "pubsub-js";
import axio from "axios";
export default {
  data() {
    return {
      h1Show: true,
      Loading: false,
      ISerr: "",
      users: []
    };
  },

  mounted() {
    PubSub.subscribe("GETsearch", async (msg, searchName) => {
      this.h1Show = false;
      this.Loading = true;
      try {
        const result = await axio.get(
          `https://api.github.com/search/users?q=${searchName}`
        );
        const data = result.data.items;
        console.log(result);
        console.log(data);

        let user = data.map(item => {
          return {
            name: item.login,
            imgurl: item.avatar_url,
            Url: item.html_url
          };
        });
        this.users = user;
        this.Loading = false;
      } catch (error) {
        this.ISerr = "error" + error;
        console.log(this.ISerr);
      }
    });
  }
};
</script>

<style>
.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>
