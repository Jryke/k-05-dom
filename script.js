const errorDOMArr = Array.from(document.getElementsByClassName('error'))
// I know that there must be a better way of identifying the error class in the coresponding field, but this is the only way I can think of using only what we learned in class.  Please let me know if there is a better way, thank you.

const checkName = (element) => {
	if (!(element.value.length > 2)) {
		errorDOMArr[0].innerHTML = 'At least 3 characters'
	} else {
		errorDOMArr[0].innerHTML = ''
	}
}

const checkPassword = (element) => {
	if (!(element.value.length > 8)) {
		errorDOMArr[1].innerHTML = 'At least 9 characters'
	} else {
		errorDOMArr[1].innerHTML = ''
	}
}
