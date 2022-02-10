class Player {
    constructor(id,name,tokenColor,active = false){
        this.id =id;
        this.name = name;
        this.tokenColor = tokenColor;
        this.active = active;
        this.tokens = this.createTokens(21);
    }
   /**
     * return {array} returns an arry of all the player tokens who's droped prop == 'false'
     */
    get unusedTokens(){
        return this.tokens.filter(token => !token.dropped)

    }

    /**get the first item in the ussued array
     * return {parameter} returns the first Token object in the unused array
     */

    get activeToken(){
       return this.unusedTokens[0];
        
    }

    createTokens(num){
       const tokens =[]; 
        for (let i = 0; i < num; i++){
            let token = new Token(i , this);
            tokens.push(token);
        }
        return tokens;

    }

 
    
}