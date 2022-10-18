/**
 * 组件是一组DOM元素的封装
 * 组件的返回值也是虚拟DOM
 */
const MyComp = function () {
  return {
    tag: 'div',
    props: {
      onClick: () => console.log('click')
    },
    children: 'click comp'
  }
}

const vNode = {
  tag: MyComp
}
