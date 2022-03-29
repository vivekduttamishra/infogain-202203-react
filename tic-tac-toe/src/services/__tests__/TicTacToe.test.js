import {checkGame} from '../TicTacToe';
//const {checkGame}=require('../TicTacToe');

describe('TickTacToe check tests',()=>{

    let cells;
    
    beforeEach(()=>{
        cells=['_','_','_','_','_','_','_','_','_'];
    })

    describe('Test for winner',()=>{

        it('should identify first row winner',()=>{

            cells[0]=cells[1]=cells[2]='X';
 
            const result=checkGame(cells);

            expect(result.over).toBe(true);
            expect(result.winner).toBe("X"); 
            expect(result.winningSequence).toEqual([0,1,2]); 
        });

    });

    describe('Test for running game',()=>{

        it('should identify running game',()=>{

            cells[0]='X';
            cells[1]='O';

            const result=checkGame(cells); 

            expect(result.over).toBe(false);
            expect(result.winner).toBe(null); 
            expect(result.winningSequence).toBe(null); 
            expect(result.movesLeft).toBe(7); 
        });

    });


    
    describe('Test for draw game',()=>{

        it('should identify a draw game',()=>{

            cells=[  'O','O','X',
                     'X','X','O',
                     'O','X','O'
                    ];

            const result=checkGame(cells); 

            expect(result.over).toBe(true);
            expect(result.winner).toBe(null); 
            expect(result.winningSequence).toBe(null); 
            expect(result.movesLeft).toBe(0); 
        });    
    });

})