// let role
// console.log(role)
// role = 'student'
// console.log(`Hello iam ${role} from UAO`)
// const value1 = 1
// const value2 = '1'
// if (value1 == value2) {
//   console.log('iguales')
// } else {
//   console.log('diferentes')
// }
const getEl = (selector) => document.querySelector(selector)

const text = document.getElementById('text')
const text2 = document.getElementsByClassName('text2')[0]
const img = document.getElementsByTagName('img')[0]
const body = document.getElementsByTagName('body')[0]

// const text = getEl('#text')
// const text2 = getEl('.text2')
// const img = getEl('img')
img.addEventListener('click', () => {
  text.innerHTML = 'Data'
  text2.innerHTML = 'Esta clase es una chimba'
  text.style = 'color:#fff'
  text2.style = 'color:#fff'
  img.style = 'border:4px solid red'
  body.style = 'background-color:#333'
  console.log(img.src)
  img.src = img.src.includes('/yh.jpeg') ? './x100.jpg' : './yh.jpeg'
})
