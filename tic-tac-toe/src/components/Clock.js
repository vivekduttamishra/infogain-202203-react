import React from 'react';

class Clock extends React.Component {

   
    state={
        time:new Date()
    }
    
    componentDidMount(){
        this.timer= setInterval(() =>{
            this.setState({time:new Date()});
        },1000);
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }


    render(){
        const twoDigit=(value)=>{
            if(value<10)
                return "0"+value; 
            else
                return value;

        }
        const t=this.state.time;
        const hour=twoDigit(t.getHours());
        const min=twoDigit(t.getMinutes());
        const seconds=twoDigit(t.getSeconds());

        return <div className="clock">
            <span className="hour">{hour}</span>
            <span className='min'>:{min}</span>
            <span className='second'>:{seconds}</span>
        </div>
    }
}

export default Clock;

