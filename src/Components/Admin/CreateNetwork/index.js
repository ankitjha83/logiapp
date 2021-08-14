import React from 'react'
import { Switch,Route } from 'react-router-dom';
import MapPincodes from './MapPincodes'
import MapFacilities from './MapFacilities'
import FulfillmentRoute from './FulfillmentRoute'
import CutoffsManagement from './CutoffsManagement'
import TransitTat from './TransitTat'
import ServiceType from './ServiceTypes'
import SortationMatrix from './SortationMatrix'
import BagConfiguration from './BagConfigurations'

const CreateNetwork = () => {
    return (
        <div>
        <Switch>
            <Route path="/admin/mapPincodes" component={MapPincodes} />
            <Route path="/admin/mapFacilities" component={MapFacilities} />
            <Route path="/admin/fulfillmentRoute" component={FulfillmentRoute} />
            <Route path="/admin/cutoffManagement" component={CutoffsManagement} />
            <Route path="/admin/transitTAT" component={TransitTat} />
            <Route path="/admin/serviceTypes" component={ServiceType} />
            <Route path="/admin/sortationMatrix" component={SortationMatrix} />
            <Route path="/admin/bagConfig" component={BagConfiguration} />
        </Switch>
            
        </div>
    )
}

export default CreateNetwork
