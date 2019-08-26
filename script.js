const inputDOM = document.getElementById('email')
const messageDOM = document.getElementById('message')

const checkEmail = (event) => {
	event.preventDefault()
	console.log(inputDOM.value)
	if (inputDOM.value.includes('@')) {
		message.innerHTML = 'Thank you for signing up'
		message.classList.remove('error')
		message.classList.add('success')
	} else {
		message.innerHTML = 'Sorry, please provide a valid email address'
		message.classList.add('error')
	}
}
