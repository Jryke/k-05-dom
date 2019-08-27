// // 050601
// // make random number between 1-3
// const oppPlay = () => {
// 	const randomNum = Math.ceil(Math.random() * 3)
// 	if (randomNum == 1) {
// 		return 'rock'
// 	} else if (randomNum == 2) {
// 		return 'paper'
// 	} else if (randomNum == 3) {
// 		return 'scissors'
// 	}
// }
//
// // make sure all opponent images have class hidden, remove class hidden from opponent play
// const showOppImg = (id) => {
// 	let opponentDOM = document.getElementById('opponent')
// 	Array.from(opponentDOM.getElementsByClassName('option')).forEach(el => {
// 		!el.classList.contains('hidden') ? el.classList.add('hidden') : null
// 		el == document.getElementById(id) ? el.classList.remove('hidden') : null
// 	})
// }
//
// let score = 0
//
// const play = (choice) => {
// 	let opponentPlay = oppPlay()
// 	let result = ''
// 	showOppImg(opponentPlay)
//
// 	rock
// 	if (choice == 'rock') {
// 		if (opponentPlay == 'rock') {
// 			result = 'Tie'
// 		} else if (opponentPlay == 'paper') {
// 			score = score - 1
// 			result = 'You lose!'
// 		} else if (opponentPlay == 'scissors') {
// 			score = score + 1
// 			result = 'You win!'
// 		}
// 	}
//
// 	paper
// 	if (choice == 'paper') {
// 		if (opponentPlay == 'rock') {
// 			score = score + 1
// 			result = 'You win!'
// 		} else if (opponentPlay == 'paper') {
// 			result = "Tie"
// 		} else if (opponentPlay == 'scissors') {
// 			score = score - 1
// 			result = "You lose!"
// 		}
// 	}
//
// 	scissors
// 	if (choice == 'scissors') {
// 		if (opponentPlay == 'rock') {
// 			score = score - 1
// 			result = "You lose!"
// 		} else if (opponentPlay == 'paper') {
// 			score = score + 1
// 			result = "You win!"
// 		} else if (opponentPlay == 'scissors') {
// 			result = "Tie"
// 		}
// 	}
//
// 	document.getElementById('outcome').innerHTML = `${result} Score: ${score}`
// }



// Version 2
let score = 0
const play = (choice) => {
	const outcomeDOM = document.getElementById('outcome')
	const randomNum = Math.round(Math.random() * 2)
	let optionsArr = ['rock', 'paper', 'scissors']
	// change opponent image
	Array.from(document.getElementById('opponent').getElementsByClassName('option')).forEach(el => {
		el.id == optionsArr[randomNum] ? el.classList.remove('hidden') : el.classList.add('hidden')
	})
	// determine winner, calculate score, show winner and score in "outcome" div
	optionsArr.forEach((el, i) => {
		if (choice == el) {
			if (randomNum == i) {
				outcomeDOM.innerHTML = `Tie Score: ${score}`
			} else if (randomNum == i + 1 || randomNum == i - 2) {
				score -= 1
				outcomeDOM.innerHTML = `You lose! Score: ${score}`
			} else if (randomNum == i - 1 || randomNum == i + 2) {
				score += 1
				outcomeDOM.innerHTML = `You win! Score: ${score}`
			}
		}
	})
}
