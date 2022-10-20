// 存储副作用函数的桶
const bucket = new WeakMap()
const origin = { name: 'origin' }
let activeEffect
// 代理拦截
const proxy = new Proxy(origin, {
  get(target, key) {
    if (!activeEffect) return target[key]
    let depsMap = bucket.get(target) // key -- effects
    if (!depsMap) {
      bucket.set(target, (depsMap = new Map()))
    }

    let deps = depsMap.get(key)
    if (!deps) {
      depsMap.set(key, (deps) => new Set())
    }
    deps.add(activeEffect)

    return target[key]
  },
  set(target, key, newVal) {
    target[key] = newVal

    const depsMap = bucket.get(target)
    if (!depsMap) return
  }
})
