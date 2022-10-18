const obj = {
  tag: 'div',
  children: [
    {
      tag: 'span',
      children: 'is span'
    }
  ]
}

// 编译：将html字符串转为数据对象然后交给运行时处理

// 运行时 + 编译时
const htmlStr = `
<div></div>
`
function Compiler() {}

const obj1 = Compiler(htmlStr)

/**
 * 运行时
 * @param {*} obj
 * @param {*} root
 */
function Render(obj, root) {
  const el = document.createElement(obj.tag)
  if (typeof obj.children === 'string') {
    const text = document.createTextNode(obj.children)
    el.appendChild(text)
    // 文本内容
  } else {
    obj.children.forEach((child) => Render(child, el))
  }

  root.appendChild(el)
}

Render(obj, document.body)
