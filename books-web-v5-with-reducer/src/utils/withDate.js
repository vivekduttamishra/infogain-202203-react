

const withDate = (Component)=>{


    return (props)=>{
        var date=new Date();

        return <Component  {...props}  now={date} />;

    }
}

export default withDate;