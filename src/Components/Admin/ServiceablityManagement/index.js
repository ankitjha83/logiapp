import React from 'react'
import {Switch , Route } from 'react-router-dom'
import OriginService from './OriginService'
import DestinationService from './DestinationService'
import ODMatrix from './ODMatrix'
import ServiceTypes from './ServiceTypes'

const ServiceabilityManagement = () => {
    return (
        <div>
        <Switch>
            <Route path="/admin/originServiceability" component={OriginService} />
            <Route path="/admin/destinationServiceability" component={DestinationService} />
            <Route path="/admin/odMatrix" component={ODMatrix} />
            <Route path="/admin/serviceServiceTypes" component={ServiceTypes} />
        </Switch>
            
        </div>
    )
}

export default ServiceabilityManagement
