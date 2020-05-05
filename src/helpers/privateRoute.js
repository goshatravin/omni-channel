import React from 'react';
import {  Route,Redirect  }  from 'react-router-dom'


const PrivateRoute = ({component: Component, path, ...rest}) => {
    const { loggedIn } = rest
    return <Route path={path} render ={(props) =>
        loggedIn ? <Component {...props}/>
    : (<Redirect to='/login' />) } />
}
export default PrivateRoute;
