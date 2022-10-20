// function effect(){
//   document.body.innerText = 'effect' // 设置body 的文本内容
// }
const bucket = new Set()

let val = 1

function effect1() {
  val = 2
}

const origin = { text: 'is obj' } // 响应式数据
const ret = new Proxy(origin, {
  get(target, key) {},
  set() {}
})

function effect() {
  document.body.innerText = obj.text // 设置body 的文本内容
}
