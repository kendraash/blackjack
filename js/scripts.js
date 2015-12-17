function Game(dealerScore, playerScore) {
  this.dealerScore = dealerScore;
  this.playerScore = playerScore;
}


Game.prototype.deal = function(person) {
  var cardValue = (Math.random() * 11 + 1);
  if ( person === "player")
    return (this.playerScore += cardValue);
  else
    return (this.dealerScore += cardValue);
}

Game.prototype.gameOver = function() {
  if (this.dealerScore >= 21 || this.playerScore >= 21)
    return true;
  else
    return false;
}
