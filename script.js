let toggle = (element) => {
	if (element.classList.contains('on')) {
		element.classList.remove('on')
		element.classList.add('off')
	} else if (element.classList.contains('off')) {
		element.classList.remove('off')
		element.classList.add('on')
	}
}
