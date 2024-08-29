// 创建一个路由器，并暴露出去

// 第一步：引入createRouter
import {createRouter,createWebHistory} from 'vue-router'
// 引入一个一个可能要呈现组件
import Home from '@/components/Home.vue'
import News from '@/components/News.vue'
import About from '@/components/About.vue'
import Detail from '@/components/Detail.vue'

// 第二步：创建路由器
const router = createRouter({
  history:createWebHistory(), //路由器的工作模式（稍后讲解）
  routes:[ //一个一个的路由规则
    {
      name: 'Router_name_home',
      path:'/home',
      component:Home
    },
    {
      name: 'Router_name_news',
      path:'/news',
      component:News,
      children: [
        {
          name: 'Router_name_news_details',
          path: 'detail/:id/:title/:content?', // 加 ? 的意思是说可以传也可以不传
          component: Detail,
          props: true
        }
      ]
    },
    {
      name: 'Router_name_about',
      path:'/about',
      component:About
    },
  ]
})

// 暴露出去router
export default router
