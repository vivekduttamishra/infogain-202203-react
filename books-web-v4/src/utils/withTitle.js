

const withTitle = (Component, defaultTitle)=>{

    const TitledHoc = (props)=>{

        return (
        <div>
            <h1 className="screen-title">{defaultTitle}</h1>
            <Component {...props} />
        </div>
        );

    }

    return TitledHoc;

};

export default withTitle;