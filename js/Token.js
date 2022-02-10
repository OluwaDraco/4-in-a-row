class Token {
    constructor(index, owner){
        this.owner = owner;
        this.id = `token-${index}-${owner.id}`;
        this.dropped = false;
    }

    /**
     * returns the HTML token aassociated thithe the token obj
     */

    get htmlToken(){
        return document.getElementById(this.id);
    }

    drawHTMLToken(){
        const token = document.createElement("div");
        document.getElementById('game-board-underlay').append(token);
        token.setAttribute("id",this.id);
        token.setAttribute("class", "token");
        token.style.backgroundColor= this.owner.tokenColor;
    }
}
