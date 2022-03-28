
export const checkGame=(cells)=>{

        //check if game is over
        let movesLeft=cells.filter(cell=>cell===null).length;

        let result={            
            movesLeft,
            over: movesLeft===0,
            winner:null,
            winningCombo:null, //which cells are part of winning
        }

        const winningCombos=[

                //horizontal wins
                [0,1,2],
                [3,4,5],
                [6,7,8],

                //vertical wins
                [0,3,6],
                [1,4,7],
                [2,5,8],

                //diagonal wins
                [0,4,8],
                [2,4,6]
        ];

        //let us check if we have a winner

        for(let winningCombo of winningCombos)
        {
            let [a,b,c] =winningCombo;

            //if three winning combo cells have same not null value, we have our winner
            if(cells[a]!==null && cells[a]===cells[b] && cells[b]===cells[c])
            {
                result.winningCombo=winningCombo;
                result.winner=cells[a]; //or cells[b] or cells[c]
                result.over=true;
                return result;
            }
        }




        return result;
}