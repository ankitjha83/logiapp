import React from 'react'
import {Switch , Route} from 'react-router-dom'

import Warehouse from './Warehouse'
import Admin from './Admin'
import FirstMile from './FirstMile'
import Sortation from './Sortation'
import Transport from './Transportation'
import LastMile from './LastMile'
import Navbar from './Navbar'
import Logo from './Logo/Logo'


function Components() {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route path="/warehouse" component={Warehouse} />
                <Route path="/admin" component={Admin} />
                <Route path="/pickup" component={FirstMile} />
                <Route path="/hubsystem" component={Sortation} />
                <Route path="/transport" component={Transport} />
                <Route path="/delivery" component={LastMile} />
            </Switch>
            {/* <Logo url="../images/Logo.png" />
            <Logo url="../images/Logo.png" /> */}
        </div>
    )
}

export default Components
