import React from 'react';



const ScoreBoard=({score})=>{


    

    return (
        <div className="score-board">
            <h2>Score Board</h2>
            <table>
                <thead>
                    <tr>
                        <th>Games</th>                        
                        <th>X Wins</th>                        
                        <th>Y Wins</th>                        
                        <th>Draw</th>                        
                    </tr>
                    
                    <tr>
                        <td>{score?.games||0}</td>                        
                        <td>{score?.X||0}</td>                        
                        <td>{score?.Y||0}</td>                        
                        <td>{score?.draw||0}</td>                        
                    </tr>
                    
                </thead>
            </table>

        </div>
    );

};

export default ScoreBoard;