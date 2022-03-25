import React from "react";


class ScoreBoard extends React.Component{
    render = () =>{

        return(
            <div>
                <h5 className="text-center">Score Board</h5>
                <table className="table table-bordered">
                
                    <tr>
                        <th>Total Games</th>
                        <th>X wins</th>
                        <th>Y wins</th>
                        <th>Draw</th>
                    </tr>
                    <tbody>
                    <tr>
                        <td>11</td>
                        <td>22</td>
                        <td>33</td>
                        <td>44</td>
                    </tr>
                    </tbody>
                </table>
                <div className="pt">
                <table className="table table-bordered">
                    <tr>
                        <th>X Timer</th>
                        <th>Y Timer</th>
                        
                    </tr>
                    <tr>
                        <td>00</td>
                        <td>00</td>
                      
                    </tr>
                </table>
                </div>
            </div>
        )
    }

}

export default ScoreBoard;