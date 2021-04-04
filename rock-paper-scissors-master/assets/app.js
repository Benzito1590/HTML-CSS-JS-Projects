const game = () => {
	let pScore = 0;
	let cScore = 0;
	let count = 0;

	const startGame = () => {
		const playBtn = document.querySelector('.intro button');
		const introScreen = document.querySelector('.intro');
		const match = document.querySelector('.match');

		playBtn.addEventListener('click', () => {
			introScreen.classList.add('fadeOut');
			match.classList.add('fadeIn');
		});
	};

	// Play match!
	const playMatch = () => {
		const options = document.querySelectorAll('.options button');
		const playerHand = document.querySelector('.player-hand');
		const computerHand = document.querySelector('.computer-hand');
		const hands = document.querySelectorAll('.hands img');
		const winningMap = {
			rock: 'scissors',
			paper: 'rock',
			scissors: 'paper'
		};

		hands.forEach(hand => {
			hand.addEventListener('animationend', function() {
				this.style.animation = '';
			});
		});

		// Computer's options - randomly generated
		const computerOptions = ['rock', 'paper', 'scissors'];

		options.forEach(option => {
			option.addEventListener('click', function() {
				count++;
				const usersChoice = option.textContent;

				// Computer's choice - On game 3, let user win
				let computerChoice = winningMap[usersChoice];
				if (count !== 3) {
					const computerNumber = Math.floor(Math.random() * 3);
					computerChoice = computerOptions[computerNumber];
				}

				setTimeout(() => {
					// Here's where we call compareHands
					compareHands(usersChoice, computerChoice);

					// Update images
					playerHand.src = `./assets/${this.textContent}.png`;
					computerHand.src = `./assets/${computerChoice}.png`;
				}, 2100);

				// Animation
				playerHand.style.animation = 'shakePlayer 2s ease';
				computerHand.style.animation = 'shakeComputer 2s ease';
			});
		});
	};

	const updateScore = () => {
		const playerScore = document.querySelector('.player-score p');
		const computerScore = document.querySelector('.computer-score p');
		playerScore.textContent = pScore;
		computerScore.textContent = cScore;
	};

	const compareHands = (playerChoice, computerChoice) => {
		//Update the text
		const winner = document.querySelector('.winner');
		// Check for a draw
		if (playerChoice === computerChoice) {
			winner.textContent = "It's a draw!";
		}
		// Check for rock
		else if (playerChoice === 'rock') {
			if (computerChoice === 'scissors') {
				winner.textContent = 'You win! 😎';
				pScore++;
				updateScore();
			} else {
				winner.textContent = 'Matrix82 wins! 🤖';
				cScore++;
				updateScore();
			}
		}
		// Check for paper
		else if (playerChoice === 'paper') {
			if (computerChoice === 'scissors') {
				winner.textContent = 'Matrix82 wins! 🤖';
				cScore++;
				updateScore();
			} else {
				winner.textContent = 'You win! 😎';
				pScore++;
				updateScore();
			}
		}
		// Check for scissors
		else if (playerChoice === 'scissors') {
			if (computerChoice === 'rock') {
				winner.textContent = 'Matrix82 wins! 🤖';
				cScore++;
				updateScore();
			} else {
				winner.textContent = 'You win! 😎';
				pScore++;
				updateScore();
			}
		}

		if (count == 3) {
			setTimeout(() => {
				document.getElementById('congratsCon').style.display = 'block';
			}, 1000);
		}
	};

	// Call the inner function to invoke it within the game function
	startGame();
	playMatch();
};

// Call the game function to start the game
game();
