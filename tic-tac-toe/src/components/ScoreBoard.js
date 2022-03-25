import React from 'react';

const Score=({x,o,draw,totalGames})=>{ {


        return (
            <table style={{ border: '1px solid black' }}>
                <thead style={{background: 'green', color: 'white'}}>
                    <tr>
                        <th>Total Games</th>
                        <th>X Wins</th>
                        <th>O Wins</th>
                        <th>Draw</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td style={{ border: '1px solid black' }}>
                            5
                        </td>
                        <td style={{ border: '1px solid black' }}>
                            2
                        </td>
                        <td style={{ border: '1px solid black' }}>
                            1
                        </td>
                        <td style={{ border: '1px solid black' }}>
                            2
                        </td>
                    </tr>
                </tbody>


            </table>
        )
    };
}

export default Score;