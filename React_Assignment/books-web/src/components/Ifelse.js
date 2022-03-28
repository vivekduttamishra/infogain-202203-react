import React from 'react'
import PageNotFound from '../screens/NotFoundScreen'

const Ifelse = (props) => {
    if (props.condition)
        return props.children;
    else
        return <PageNotFound />;
}

export default Ifelse