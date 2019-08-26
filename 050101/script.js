// 050101
// console.log('Now Connected')

// 050201
// const mainDOM = document.getElementById('main')
// console.log(mainDOM)

// 050202
// const mainClassesDOM = document.getElementsByClassName('main')
// console.log(mainClassesDOM)

// 050203
// Array.from(document.getElementsByClassName('main')).forEach(el => console.log(el))

// 050301
// console.log(document.getElementById('main').innerHTML)

// 050302
// document.getElementById('content').innerHTML = 'Main Content'

// 050303
// document.getElementById('products').innerHTML = '<div>1</div><div>2</div>'

// 050304
// const productsDOM = document.getElementById('products')
// const productClassArr = Array.from(document.getElementsByClassName('product'))
// productClassArr.forEach(el => {
// 	// copy inside productsDOM
// 	productsDOM.innerHTML += `<div class='product'>${el.innerHTML}</div>`
// 	// remove hard coded divs
// 	el.parentNode.removeChild(el)
// })

// 050401
// console.log(document.getElementById('main').classList)

// 050402
// Array.from(document.getElementsByClassName('selected')).forEach(el => {
// 	el.classList.add('primary')
// })

// 050403
// Array.from(document.getElementsByClassName('selected')).forEach(el => !el.classList.contains('primary') ? el.classList.remove('selected') : null)

// 050501
// const toggle = (el) => {
// 	if (el.classList.contains('on')) {
// 		el.innerHTML = 'OFF'
// 		el.classList.remove('on')
// 		el.classList.add('off')
// 	} else {
// 		el.innerHTML = 'ON'
// 		el.classList.remove('off')
// 		el.classList.add('on')
// 	}
// }

// 050502
// const add = () => {
// 	let inputsArr = Array.from(document.getElementsByClassName('number'))
// 	let sum = inputsArr.map(el => el.value).reduce((a,b) => Number(a) + Number(b))
// 	document.getElementById('total').innerHTML = sum
// }

// 050503
// const checkEmail = (event) => {
// 	event.preventDefault()
// 	const inputDOM = document.getElementById('email')
// 	const messageDOM = document.getElementById('message')
// 	if (inputDOM.value.includes('@')) {
// 		messageDOM.innerHTML = 'Thank you for signing up'
// 		messageDOM.classList.remove('error')
// 		messageDOM.classList.add('success')
// 	} else {
// 		messageDOM.innerHTML = 'Sorry, please provide a valid email address'
// 		messageDOM.classList.remove('success')
// 		messageDOM.classList.add('error')
// 	}
// }

// 050504
const checkName = (element) => {
	const nameSpanDOM = Array.from(document.getElementById('name').getElementsByClassName('error'))[0]
	element.value.length > 2 ? nameSpanDOM.innerHTML = '' : nameSpanDOM.innerHTML = 'At least 3 characters'
}

const checkPassword = (element) => {
	const passwordSpanDOM = Array.from(document.getElementById('password').getElementsByClassName('error'))[0]
	element.value.length > 8 ? passwordSpanDOM.innerHTML = '' : passwordSpanDOM.innerHTML = 'At least 9 characters'
}
