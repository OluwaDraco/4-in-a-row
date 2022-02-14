class Token {
    constructor(index, owner){
        this.owner = owner;
        this.id = `token-${index}-${owner.id}`;
        this.dropped = false;
        this.columnLocation = 0;
    }

    /**
     * returns the HTML token aassociated thithe the token obj
     */

    get htmlToken(){
        return document.getElementById(this.id);
    }
/**
 * gets left offset of html element
 * @returns {number} left offset of token objects htmltoken.
 */
    get offsetLeft(){
       let left = this.htmlToken.offsetLeft;
        return left;

    }

/**
 * moves html token to the left 
 */
    moveLeft(){
        if(this.offsetLeft > this.columnLocation){
            this.htmlToken.style.left = this.offsetLeft- 76;
            this.columnLocation -= 1;         
        }
    }

    moveRight(columns){
        if(this.columnLocation<columns-1){
            this.htmlToken.style.left = this.offsetLeft + 76;
            this.columnLocation +=1;
        }
    }

    drop(target,reset){
        this.dropped = true;

        $(this.htmlToken).animate({
            top: (target.y * target.diameter)
        },750, 'easeOutBounce', reset);
    }

    drawHTMLToken(){
        const token = document.createElement("div");
        document.getElementById('game-board-underlay').append(token);
        token.setAttribute("id",this.id);
        token.setAttribute("class", "token");
        token.style.backgroundColor= this.owner.tokenColor;
    }
}
