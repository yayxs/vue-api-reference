/**
 * 实现简易的渲染器
 * @param {*} vnode 虚拟dom对象
 * @param {*} container 真实的dom元素
 */
function renderer(vnode, container) {
  const el = document.createElement(vnode.tag)
  // 遍历 vnode.props
  for (const key in vnode.props) {
    if (/^on/.test(key)) {
      el.addEventListener(
        'onClick',
        vnode.props[key] // 事件处理函数
      )
    }
  }

  // 处理子节点
  if (typeof vnode.children === 'string') {
  } else if (Array.isArray(vnode.children)) {
  }

  // vnode描述的是
  if (typeof vnode.tag === 'string') {
    mountEle()
  } else if (typeof vnode.tag === 'function') {
    // 描述组件
    mountComp()
  }

  container.appendChild(el)
}
