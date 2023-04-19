const hands = ["rock", "paper", "scissors"];

// Define a function called getHand() that returns a hand from the array.
function getHand() {
  return hands[parseInt(Math.random() * 10) % 3];
}

// Define two objects for two players. Each player has name and getHand() properties.
const player1 = { name: "Player 1", getHand: getHand };
const player2 = { name: "Player 2", getHand: getHand };

function playRound(player1, player2) {
  const player1Hand = player1.getHand();
  const player2Hand = player2.getHand();
  let winner = null;
  console.log(player1.name + " plays " + player1Hand);
  console.log(player2.name + " plays " + player2Hand);
  if (player1Hand == player2Hand) {
    console.log(" It's a tie! ");
    return winner;
  } else if (player1Hand == "rock") {
    if (player2Hand == "paper") {
      winner = player2.name;
      console.log(winner + " is the winner! ");
      return winner;
    } else if (player2Hand == "scissors") {
      winner = player1.name;
      console.log(winner + " is the winner! ");
      return winner;
    }
  } else if (player1Hand == "paper") {
    if (player2Hand == "rock") {
      winner = player1.name;
      console.log(winner + " is the winner! ");
      return winner;
    } else if (player2Hand == "scissors") {
      winner = player2.name;
      console.log(winner + " is the winner! ");
      return winner;
    }
  } else if (player1Hand == "scissors") {
    if (player2Hand === "rock") {
      winner = player2.name;
      console.log(winner + " is the winner! ");
      return winner;
    } else if (player2Hand === "paper") {
      winner = player1.name;
      console.log(winner + " is the winner! ");
      return winner;
    }
  }
}

playRound(player1, player2);

//Part 2
function playGame(player1, player2, playUntil) {
  let Player1Score = 0;
  let Player2Score = 0;

  while (Player1Score < playUntil || Player2Score < playUntil) {
    let overallWinner = playRound(player1, player2);
    if (overallWinner === null) {
    } else if (overallWinner.name === player1.name) {
      Player1Score++;
    } else if (overallWinner.name === player2.name) {
      Player2Score++;
    }
  }
  if (Player1Score === playUntil) {
    return player1;
  } else {
    return player2;
  }
}
function playTournament(player1, player2, player3, player4, playUntil) {
  let Round1 = playGame(player1, player2, playUntil);
  let Round2 = playGame(player3, player4, playUntil);
  let FinalRound = playGame(Round1, Round2, playUntil);
  return FinalRound;
}