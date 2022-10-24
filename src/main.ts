import { createApp } from 'vue'
import App from './App.vue' // root comp
import router from './router'

import './assets/main.css'

import './styles/index.scss'
import MyPlugin from './plugins/version'
// 创建新的应用程序实例
// App 根组件 从另一个文件中导入根组件

/**
 * createApp(根组件，传递给组件的props)
 *
 * const app = createApp({
 *
 * })
 *
 */

/**
 * createSSRApp() 创建应用实例
 */

const app = createApp(App)

app.use(MyPlugin)
app.component('cus-comp', {})
const MyComponent = app.component('cus-comp')
console.log(MyComponent)
app.use(router)

/**
 * 挂载在一个容器元素中
 * dom 元素 Element | 选择器字符串 string
 */
app.mount('#app')

app.provide('key', 'val')

const app2 = createApp({
  data() {
    return {
      count: 0
    }
  }
})
