describe("Game", function() {
  it("deals a player two cards and the dealer", function() {
    var newGame = new Game(0,0);
    expect(newGame.dealerScore).to.equal(0);
    expect(newGame.playerScore).to.equal(0);
  });

  it("gets the playerScore from the two delt cards", function() {
    var newGame = new Game(0,0);
    newGame.deal("player");
    newGame.deal("player");
    expect(newGame.playerScore).to.be.at.least(2);
  });

});
