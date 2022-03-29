// import React from 'react';


// class Clock extends React.Component {

//     state={
//         date:new Date()
//     };

//     componentDidMount() {
//         this.id=setInterval(() =>{

//             this.setState({date:new Date()});

//         },1000);
//     }

//     componentWillUnmount() {
//         if(this.id) 
//             clearInterval(this.id);
//     }

//     render(){

//         function zero(x){
//             if(x<10)
//                 return "0"+x;
//             else
//                 return x;
//         }

//         var date=this.state.date;
//         var hour=zero(date.getHours());
//         var min =zero(date.getMinutes());
//         var second=zero(date.getSeconds());

//         return <div className="clock">
//             <span className="hour">{hour}</span>:
//             <span className="min">{min}</span>:
//             <spacn className="sec">{second}</spacn>
//         </div>;
//     }
// }

// export default Clock;

import React, { useState, useEffect } from 'react';


function Clock() {

    const [date, setDate] = useState(new Date());

    useEffect(() => {
        var timerID = setInterval(() => tick(), 1000);

        return function cleanup() {
            clearInterval(timerID);
        };
    });

    function tick() {
        setDate(new Date());
    }

    return (
        <div>
            <h2 className="clock">{date.toLocaleTimeString()}.</h2>
        </div>
    );
}

export default Clock;