const randomNum = Math.round(Math.random() * 2)

console.log(randomNum)

const play = (choice) => {
	let optionsArr = ['rock', 'paper', 'scissors']
	optionsArr.forEach((el, i) => {
		if (choice == el) {
			console.log(`${choice}, index: ${el}`)
		}
	}
}
