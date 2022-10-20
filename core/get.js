const obj = { foo: 1 }

const p = new Proxy(obj, {
  get(target, key, receiver) {
    return Reflect.get(target, key, receiver)
  }
})
