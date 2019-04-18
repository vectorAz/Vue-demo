//路由器对象
import Vue from 'vue'
import VueRouter from 'vue-router'
import about from '../viws/about.vue'
import home from '../viws/home.vue'
import news from '../viws/News.vue'
import message from '../viws/Message.vue'
Vue.use(VueRouter)
export default new VueRouter({
  routes: [{
      path: '/home',
      component: home,
      children: [{
          path: '/home/news',
          component: news
        },
        {
          path: '/home/message',
          component: message
        },
        {
            path:'/home',
            redirect:'/home/news'
        }
      ]
    },
    {
      path: '/about',
      component: about
    },
    {
      path: '/',
      redirect: '/about'
    }

  ],
  mode: 'history',
})
