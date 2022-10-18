import { createApp } from 'vue'
import App from './App.vue' // root comp
import router from './router'

import './assets/main.css'
// 创建新的应用程序实例
// App 根组件 从另一个文件中导入根组件
const app = createApp(App)

app.use(router)

// dom 元素 | 选择器字符串
app.mount('#app')
