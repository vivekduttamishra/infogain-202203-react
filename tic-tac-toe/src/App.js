import React from 'react';
import Header from './components/Header';
import Game from './components/Game';
import Clock from './components/Clock';
import ScroreBoard from './components/ScroreBoard';

class App extends React.Component {

    state={
        score:{
            games:0,
            X:0, 
            Y:0, 
            draw:0
        }
    }

    handleGameOver=(result)=>{

        let score={...this.state.score};

        score.games++;
        if(result.winner){
            score[result.winner]++; 
        } else
            score.draw++;

        this.setState({score});


    }


    render=(props)=>{
      
        
        return (
            <div className='app'>
                <Header title="Tic Tac Toe Game"/>
                <Clock/>
                <ScroreBoard score={this.state.score}/>
                <Game onGameOver={this.handleGameOver}/>
            </div>
        )
    }
}



export default App;
