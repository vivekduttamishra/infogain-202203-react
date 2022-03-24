import React from 'react';



const Scoreboard=({x,O,draw,totalGames})=>{ {


    return (
        <table style={{ border: '1px solid black' }}>
            <thead style={{background: 'blue', color: 'white'}}>
                <tr>
                    <th>Total Games</th>
                    <th>X Wins</th>
                    <th>Y Wins</th>
                    <th>Draw</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td style={{ border: '1px solid black' }}>
                        {totalGames}
                    </td>
                    <td style={{ border: '1px solid black' }}>
                        {x}
                    </td>
                    <td style={{ border: '1px solid black' }}>
                        {O}
                    </td>
                    <td style={{ border: '1px solid black' }}>
                        {draw}
                    </td>
                </tr>
            </tbody>


        </table>
    )
};
}

 

export default Scoreboard;

