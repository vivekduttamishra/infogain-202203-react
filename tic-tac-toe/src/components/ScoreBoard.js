import React from 'react';

const Score=({x,o,draw,totalGames})=>{ {


        return (
            <table style={{ border: '1px solid black' }}>
                <thead style={{background: 'green', color: 'white'}}>
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
                            {o}
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

export default Score;