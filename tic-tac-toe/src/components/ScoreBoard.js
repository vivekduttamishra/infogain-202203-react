import React from 'react'

const ScoreBoard = ({score}) => {
  return (
    <div className='scoreboard'>
        <h2>Score Board</h2>
        <table>
            <thead>
                <tr>
                    <th>Total Games</th>
                    <th>O Wins</th>
                    <th>X Wins</th>
                    <th>Draw</th>
                </tr>
                <tr>
                    <td>{score?.game||0}</td>
                    <td>{score?.O||0}</td>
                    <td>{score?.X||0}</td>
                    <td>{score?.draw||0}</td>
                </tr>

            </thead>
        </table>
    </div>
  )
}

export default ScoreBoard