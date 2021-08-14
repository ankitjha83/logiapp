import React from 'react'
import {Switch , Route } from 'react-router-dom'
import Pickup from './Pickup'
import WareHousing from './WareHousing'
import Delivery from './Delivery'
import HubSystem from  './HubSystem'
import Cash from './Cash'
import Transport from './Transport'
import Network from './Network'

function IssueResolution() {
    return (
        <div>
            <Switch>
                <Route path="/admin/isuuePickup" component={Pickup} />
                <Route path="/admin/issueWarehouse" component={WareHousing} />
                <Route path="/admin/issueHubsystem" component={HubSystem} />
                <Route path="/admin/issueTransport" component={Transport} />
                <Route path="/admin/issueDelivery" component={Delivery} />
                <Route path="/admin/issueCash" component={Cash} />
                <Route path="/admin/issueNetwork" component={Network} />
            </Switch>
        </div>
    )
}

export default IssueResolution
