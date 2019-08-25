const sum = () => {
	let total = 0
	Array.from(document.getElementsByClassName('number')).forEach(el => total += Number(el.value))
	document.getElementById('total').innerHTML = total
}
