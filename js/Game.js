class Game{
    constructor(){
        this.board = new Board();
        this.ready = false;
        this.players = this.createPlayers();
    }
/**
 * returns active player
 * @return {object} player -the active player 
 */
    get activePlayer(){
        return this.players.find(player => player.active);
    }

    /**
     * creates two player objects
     * @returns {arry} array of two pplayer objects
     */
    createPlayers(){
        const players = [];
        const player1 = new Player(1,"Player 1","#e15258",true);
        const player2 = new Player(2,"Player 2","#e59a13");
        players.push(player1,player2);
        return players;
    }

    /**
     * this method starts the game 
     */

    startGame(){
        this.board.drawHTMLBoard();
        this.activePlayer.activeToken.drawHTMLToken();
        this.ready = true;

    }

    /**
     * 
     * finds space object to drop target into,drops token  
     */
    playToken(){
       let spaces = this.board.spaces;
       let activeToken = this.activePlayer.activeToken;
       let targetColumn = spaces[activeToken.columnLocation];
       let targetSpace = null;

       for(let space of targetColumn){
           if(space.token === null){
               targetSpace = space;
           }

       }
       if (targetSpace !== null){
           game.ready = false;
           activeToken.drop(targetSpace);
       }
    }
    /**
     * branches code, depoending on what key a player presses
     * @param {object} e - keydown event object 
     */
    handleKeydown(e) {
        if (this.ready) {
            if (e.key === "ArrowLeft") {
                this.activePlayer.activeToken.moveLeft();
            } else if (e.key === "ArrowRight") {
                this.activePlayer.activeToken.moveRight(this.board.columns);
            } else if (e.key === "ArrowDown") {
                // play token
                this.playToken();
            }
        }
}
}
