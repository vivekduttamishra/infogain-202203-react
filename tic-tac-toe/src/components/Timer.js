import React  from 'react'

export default class Timer extends React.Component {
   
  render(){
  let xtime,otime;
  xtime=12;
  otime=5; 
       return (
      <div>
          <h5>Timer</h5>
         <table className='timer-table'>
             <tbody>
                 <tr><th>X timer</th>
                 <th>O timer</th></tr>
                 <tr><td>{xtime}</td>
                 <td>{otime}</td></tr>
             </tbody>
         </table>
      </div>
    )
  }
}
