Vue 声明式的框架，采用模板的方式描述 UI 同样支持使用虚拟 DOM 来描述 UI

渲染器：虚拟 DOM 对象渲染为 DOM 元素
组件的本质是一组虚拟 DOM 元素的封装
渲染器在渲染组件时候

Vue 的模板会被一个叫作编译器的程序编译为渲染函数

```json
{
  "recommendations": ["Vue.volar", "Vue.vscode-typescript-vue-plugin"]
}
```

`DOM` 的更新不是同步应用的 Vue 会缓冲直到下一个 next tick

命令式代码的更新性能 A
声明式代码的更新性能 B + A
纯运行时 / 运行时和编译时 / 纯编译时
纯运行时的框架：没办法分析用户提供的内容

- 编译：分析用户提供的内容

纯编译的 直接编译成可执行的 js 代码

框架设计的核心要素：用户提供的构建产物 产物的模块格式
框架的 `tree shaking`
实现 `tree shaking ` 满足 esm
如果希望用户可以直接在 html 页面中 使用`script` 输出 `IIFE `
响应系统和副作用函数

虚拟 DOM 使用 JavaScript 对象来描述 UI 的方式

建立在标准 HTML CSS 和 JavaScript 之上 具有直观的 API 和世界级别的文档

反应式、编译器优化 渲染系统 很少需要手动优化

在库和功能齐全的框架之间扩展

`SFC` 是 Vue 的一个定义特性，
通常与 `<script setup></script>` setup 属性是一个提示 vue 执行编译时转换，

Options API 组件实例概念中心 OOP 语言北京的用户基于类的心理模型

```js
const app = createApp(根组件)

app.mount(实际的dom元素 或者 css选择器字符串)

<div id="app"></div> 不是应用的一部分
```

ref 在模板中解包
