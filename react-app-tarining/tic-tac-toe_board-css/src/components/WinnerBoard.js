import React from 'react'

function WinnerBoard(props) {
    return (
        <div>
            <button className="Check-board" onClick={props.winClick}>Show Match Stats</button>
            <table>
                <thead>
                    <tr>
                        <th>Total Games </th>
                        <th>O Win </th>
                        <th>X Win</th>
                        <th>Draw </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>0</td>
                        <td>{props.Owin}</td>
                        <td>{props.Xwin}</td>
                        <td>{props.draw}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default WinnerBoard