function Game(dealerScore, playerScore) {
  this.dealerScore = dealerScore;
  this.playerScore = playerScore;
}


Game.prototype.deal = function(person) {
  var cardValue = Math.floor((Math.random() * 11 + 1));
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




$(document).ready(function() {
  $("#newGame").click(function() {
    var game = new Game(0, 0);

    game.deal("player");
    game.deal("player");
    game.deal("dealer");
    game.deal("dealer");

    var playerScore = (game.playerScore);
    var dealerScore = (game.dealerScore);

    $("#playerScore").html("" + playerScore + "");
    $("#dealerScore").html("" + dealerScore + "");


  });
});
