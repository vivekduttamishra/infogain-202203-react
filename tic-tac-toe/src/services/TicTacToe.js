
export const checkGame=(cells)=>{

       
        let movesLeft=cells.filter(cell=>cell===null).length;

        let result={            
            movesLeft,
            over: movesLeft===0,
            winner:null,
            winningCombo:null, 
        }

        const winningCombos=[

                
                [0,1,2],
                [3,4,5],
                [6,7,8],

               
                [0,3,6],
                [1,4,7],
                [2,5,8],

               
                [0,4,8],
                [2,4,6]
        ];

        

        for(let winningCombo of winningCombos)
        {
            let [a,b,c] =winningCombo;

            
            if(cells[a]!==null && cells[a]===cells[b] && cells[b]===cells[c])
            {
                result.winningCombo=winningCombo;
                result.winner=cells[a]; 
                result.over=true;
                return result;
            }
        }




        return result;
}