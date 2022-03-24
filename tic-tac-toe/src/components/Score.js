import React, { Component } from 'react'

export default class Score extends React.Component {
  render() {

    let total,xtotal,ytotal,drawtotal;
    total=5;
    xtotal=2;
    ytotal=2;
    drawtotal=3;
    return (
      <div className='score-board'>
          <h4>Score Board</h4>
          <table>
              <tbody className="score-table">
                  <tr className='table-head'>
                      <th>Total Game</th>
                      <th>X win</th>
                      <th>Y Win</th>
                      <th>Draw</th>

                  </tr>
                  <tr className='table-data'>
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
