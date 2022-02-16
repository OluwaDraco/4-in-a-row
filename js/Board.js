class Board{
    constructor(){
        this.row = 6;
        this.columns = 7;
        this.spaces =this.createSpaces();
    }
/**
 * Generate 2d arry of spaces
 * @return {arry} an arry of space objects
 */
    createSpaces(){
       const spaces =[];
        for(let x = 0; x< this.columns ;x++){
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
         for(let column of this.spaces){
             for (let space of column){
                 space.drawSVGSpace();
             }
         }
        }

}