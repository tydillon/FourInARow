class Game {
    constructor(){
        this.board = new Board();
        this.players = this.createPlayers();
        this.ready = false;
    }

    //returns active player
    get activePlayer(){
        return this.players.find(player => player.active);
    }

    //creates two players
    createPlayers() {
        const players = [new Player(`Player 1`, 1, `#e15258`, true),
                         new Player(`Player 2`, 2, '#e59a13')];
        return players;
    };

    //initializes the game
    startGame() {
        this.board.drawHTMLBoard();
        this.activePlayer.activeToken.drawHTMLToken();
        this.ready = true;
    };
}