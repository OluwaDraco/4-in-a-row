class Game{
    constructor(){
        this.board = new Board();
        this.ready = false;
        this.players = this.createPlayers();
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

    }
}