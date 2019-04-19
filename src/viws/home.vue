<template>
  <div msg="atguigu">
    <h2>home组件</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link to="/home/news">News</router-link>
          <!-- <a href="#/home/news" class>News</a> -->
        </li>
        <li>
          <router-link to="/home/message" class="activeClass">
            <p>Message</p>
          </router-link>
        </li>
      </ul>
      <div>
        <ul>
          <router-view/>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
