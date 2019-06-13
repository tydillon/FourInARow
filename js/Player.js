class Player {
    constructor(name, id, color, active = false){
        this.name = name;
        this.id = id;
        this.color = color;
        this.active = active;
        this.tokens = this.createTokens(21);
    }


    //Creates tokens for the player. num= number of tokens created
    createTokens(num){
        const tokens = [];
        for (let i = 0; i < num; i++) {
            let token = new Token(i, this);
            tokens.push(token);
        }
        return tokens;
    }

    checkTokens(){
        return this.unusedTokens.length == 0 ? false : true;
    }

    //gets all tokens that haven't been dropped
    get unusedTokens(){
        return this.tokens.filter(token => !token.dropped);
    }
    
    //returns the first token from the unused tokens
    get activeToken(){
        return this.unusedTokens[0];
    }
}