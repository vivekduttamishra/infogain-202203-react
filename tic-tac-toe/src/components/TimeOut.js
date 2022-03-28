import React  from 'react'

export default class TimeOut extends React.Component {
   
  render(){
  let xtime,otime;
  xtime=12;
  otime=5; 
       return (
      <div>
          <h4>Time Clock</h4>
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