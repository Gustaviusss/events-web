import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'

import EventList from './pages/eventslist'
import EventDetail from './pages/eventdetail'
import App from './pages/eventpage/components/App'

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={EventList} />
                <Route path='/eventdetail' component={EventDetail} />
                <Route path='/eventpage' component={App} />
            </Switch>
        </BrowserRouter>
    )
}
export default Routes;