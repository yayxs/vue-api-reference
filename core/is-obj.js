let level = 3

const title = {
  tag: `h${level}`,
  props: {
    onClick: (e) => {
      console.log('click h1')
    }
  },
  children: [
    {
      tag: 'span'
    }
  ]
}
