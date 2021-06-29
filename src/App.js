import React from 'react';
import { Route,Switch,  } from 'react-router-dom';
import Homepage from './pages/Homepage';
import PostDetails  from './pages/PostDetails';

const App=()=>{
    return(
        <>
        <Switch>
            <Route exact path="/" component={Homepage}/>
            <Route exact path="/post/:id" component={PostDetails}/>
            </Switch>
        </>
    )
}
export default App;