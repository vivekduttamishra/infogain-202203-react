import React from 'react';
import Header from './components/Header';
import Game from './components/Game';
import WinnerBoard from './components/WinnerBoard';
import Clock from './components/Clock';
import { checkGame } from './services/TicTacToe';

class App extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = this.getInitialState()
               
    }


    getInitialState = () => {
        let cells = [     //initally all cells should be empty
            null, null, null,
            null, null, null,
            null, null, null
        ];
        
        return {
            cells,
            move: 'O', //this is current move.
            Owin: 0,
            Xwin: 0,
            draw: 0,
            ...checkGame(cells)
        };
    }

    handleWinClick = () => {
        var win = this.state.winner;
        console.log("Winner", win)
        if (win == 'O') {
            var Owin1 = this.state.Owin;
            var Owin = Owin1 + 1
            console.log("Owin Add", Owin)
            this.setState({ Owin });
        } if (win == 'X') {
            var Xwin1 = this.state.Xwin;
            var Xwin = Xwin1 + 1
            console.log("Xwin Add", Xwin)
            this.setState({ Xwin });
        } if (win === null) {
            var draw1 = this.state.draw;
            var draw = draw1 + 1;
            console.log("Draw Add", draw)
            this.setState({ draw });
        }
    }

    render() {
        return (
            <div className="app">
                <Header />
                <Clock />
                <Game />
                <WinnerBoard Owin={this.state.Owin} Xwin={this.state.Xwin} draw={this.state.draw} winClick={this.handleWinClick}/>
            </div>
        )
    };
}

export default App;

