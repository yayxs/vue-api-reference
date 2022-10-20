// 存储副作用

let activeEffect

function effect(fn) {
  activeEffect = fn
  fn()
}

const target = {
  text: 'target'
}
let bucket = new Set()
const proxy = new Proxy(target, {
  get(target, key) {
    if (activeEffect) {
      bucket.add(activeEffect)
    }

    return target[key]
  },
  set(target, key, newVal) {
    target[key] = newVal
    bucket.forEach((fn) => fn())

    return true
  }
})

effect(() => {
  console.log('effect run')
  document.body.innerText = proxy.text
})

setTimeout(() => {
  proxy.isNot = 'not '
}, 1000)
