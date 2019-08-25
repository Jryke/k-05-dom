let productsArr = Array.from(document.getElementsByClassName('product'))
let productHolder = document.getElementById('products')

productsArr.forEach(div => productHolder.appendChild(div))
