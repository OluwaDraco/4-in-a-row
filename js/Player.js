class Player {
    constructor(id,name,tokenColor,active = false){
        this.id =id;
        this.name = name;
        this.tokenColor = tokenColor;
        this.active = active;
        this.tokens = this.createTokens(21);
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