import React from 'react';
import Status from './Status';
import App from '../App'

const Score=()=>{ {
    // if (Status.winner === 'X') {
    //     App.properties.xWins += 1;
    // } else if (Status.winner === 'O') {
    //     App.properties.oWins += 1;
    // } else {
    //     App.properties.draw += 1;
    // }

    //App.properties.total = App.properties.xWins + App.properties.oWins + App.properties.draw;


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