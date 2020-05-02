import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'

import EventList from './pages/eventslist'
import EventDetail from './pages/eventdetail'
import EventPage from './pages/eventpage'
import UserPanel from './pages/userpanel'

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={EventList} />
                <Route path='/eventdetail' component={EventDetail} />
                <Route path='/eventpage' component={EventPage} />
                <Route path='/userpanel' component={UserPanel} />
            </Switch>
        </BrowserRouter>
    )
}
export default Routes;