

export const checkGame=(cells)=>{

    //find out if the game is win/draw/in-progress
    const result={
        over: false, //or true
        winner: null, // or x or y (null with over:true --> draw)
        winningSequence:null, //or [0,1,2],
        movesLeft: cells.filter(cell=>cell==='_').length
    };
   // console.log('cells',cells);
   // console.log('result',result);
    
    
    const winningSequences=[

        //rows wins
        [0,1,2], //top row 
        [3,4,5], //middle row
        [6,7,8], //bottom row

        //columns wins
        [0,3,6], //left column
        [1,4,7], //middle column
        [2,5,8], //right column

        //diagonal wins
        [0,4,8], //top-left to bottom-right
        [2,4,6], //bottom-left to top-right

    ];

    for(let winningSequence of winningSequences){

        const [x,y,z] =winningSequence;
        if(cells[x]==='_')
            continue;

        if(cells[x]===cells[y] && cells[y]===cells[z]){
            //we have a winner
            result.over=true;
            result.winner=cells[x];
            result.winningSequence=winningSequence;
            return result;
        }
    }

    //game is not won. Let us check if a single move is left
    //result.over= !cells.includes("_");
    //result.over= cells.indexOf('_')>=0;
    //const movesLeft= cells.filter(cell=>cell==="_").length;

    result.over= result.movesLeft===0;

    return result;

}