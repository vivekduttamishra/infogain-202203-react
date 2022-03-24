import React from 'react';


class Play extends React.Component {
    handleReset=()=>{
        let state= this.getInitialState();
        this.setState(state);
    }
 

    render(){

 

        return <div className="clock">
             <button 
                    onClick={this.handleReset}
                className="play-button">Play</button>
          </div>
    }
}

export default Play;