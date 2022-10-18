// 存储副作用函数的桶
const bucket = new WeakMap()
const data = { name: 'data' }
let activeEffect
// 代理拦截
const obj = new Proxy(data, {
  get(target, key) {
    if (!activeEffect) return target[key]
    let depsMap = bucket.get(target) // key -- effects
    if (!depsMap) {
      bucket.set(target, (depsMap = new Map()))
    }
  },
  set() {}
})
