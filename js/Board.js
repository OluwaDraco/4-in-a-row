class Board{
    constructor(){
        this.row = 7;
        this.colums = 6;
        this.spaces =this.createSpaces;
    }
/**
 * Generate 2d arry of spaces
 * @return {arry} an arry of space objects
 */
    createSpaces(){
       const spaces =[];
        for(let x = 0; x< this.colums ;i++){
            const column = [];
            for(let y = 0; y<this.row; y++){
                const space = new Space(x,y)
                column.push(space);
            }
            spaces.push(column);
        }
        return spaces;
     }

     drawHTMLBoard(){
         for(let col of this.spaces){
             for (let space of col){
                 space.drawSVGSpace();
             }
         }
        }

}