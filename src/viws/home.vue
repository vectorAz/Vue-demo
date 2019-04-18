<template>
    <div msg="atguigu">
            <h2>home组件</h2>
            <div>
              <ul class="nav nav-tabs">
                <li>
                  <router-link to="/home/news" >News</router-link>
                  <!-- <a href="#/home/news" class>News</a> -->
                </li>
                <li>
                  <router-link to="/home/message"class="activeClass" >
                    <p>Message</p>
                  </router-link>
                </li>
              </ul>
              <div>
                <ul>
                  <router-view/>
                </ul>
                <button>返回</button>
                <hr>
                <ul>

                  <router-view/>

                  <li>id: 3</li>
                  <li>title: message03</li>
                  <li>content: message02 content....</li>
                </ul>
              </div>
            </div>
          </div>
</template>

<script>
export default {

};
</script>

<style>

</style>
