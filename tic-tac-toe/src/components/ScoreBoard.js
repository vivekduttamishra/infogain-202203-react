import React, { Component } from 'react'

export default class ScoreBoard extends React.Component {
  render() {

    let total,xtotal,ytotal,drawtotal;
    total=5;
    xtotal=2;
    ytotal=2;
    drawtotal=3;
    return (
      <div className='scoreboard'>
          <h3 className='board'>Score Board</h3>
          <table>
              <tbody className="score-table">
                  <tr className='table-head'>
                      <th>Total Game</th>
                      <th>X Win</th>
                      <th>Y Win</th>
                      <th>Draw</th>

                  </tr>
                  <tr className='table'>
                      <td>{total}</td>
                      <td>{xtotal}</td>
                      <td>{ytotal}</td>
                      <td>{drawtotal}</td>

                  </tr>
              </tbody>
          </table>
         </div>
    )
  }
}