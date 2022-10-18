// 有一个存储副作用的桶
const bucket = new Set()

// 原始数据
const data = { text: 'origin-data' }

// 代理原始数据
const proxy = new Proxy(data, {
  get(target, key) {
    // bucket.add(effect)
    if (activeEffect) {
      bucket.add(activeEffect)
    }
    return target[key]
  },

  // 设置拦截操作
  set(target, key, newVal) {
    // 设置属性值
    target[key] = newVal
    // 副作用中的取出来执行

    bucket.forEach((fn) => fn())

    return true
  }
})

const obj = { name: 'is-obj' } //

let activeEffect

function effect(fn) {
  activeEffect = fn
  fn()
  // document.body.innerText = obj.name // 触发读取操作
}

obj.name = 'new-obj' // 设置操作
