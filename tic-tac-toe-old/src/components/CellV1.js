import React from 'react';


class Cell extends React.Component {

    constructor(props) {
        super(props);

        this.state={
            value: '-'
        };
    }

    handleClick=()=>{
        //this change, will not reflect in react
        const newValue= this.state.value==='O'?'X':'O';
        console.log(`value for cell # ${this.props.id} changed to ${newValue}`);

        //this change will reflect in React and UI will updated

        this.setState({value:newValue});
    }
    render=()=>{

        return <button 
            onClick={this.handleClick}
            className="cell">{this.state.value}</button>;
    }

}
export default Cell;