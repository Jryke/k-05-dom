let productsArr = Array.from(document.getElementsByClassName('product'))
let productHolder = document.getElementById('products')

productsArr.forEach(div => {
	// copy divs as children of productHolder
	productHolder.innerHTML += `<div class="product">${div.innerHTML}</div>`
	// remove hard coded divs
	div.parentNode.removeChild(div)
})
