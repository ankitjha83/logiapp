import React from 'react'
import {Switch,Route} from 'react-router-dom'
import BagWeighingandReceiving from './BagWeighingandReceiving'
import TripsheetInscan from './TripsheetInscan'
import PODGeneration from './PODGeneration'
import ShipmentInscan from './ShipmentInscan'
import ShortageOverageReport from './ShortageOverageReport'
function ConsignmentReceiving(){
    return(
        <div>
            <Switch>
                <Route path="/hubsystem/bagweighingandreceiving" component={BagWeighingandReceiving}/>
                <Route path="/hubsystem/shipmentinscan" component={ShipmentInscan}/>
                <Route path="/hubsystem/tripsheetinscan" component={TripsheetInscan}/>
                <Route path="/hubsystem/shortageoveragereport" component={ShortageOverageReport}/>
                <Route path="/hubsystem/podgeneration" component={PODGeneration}/> 
            </Switch>
        </div>
    )
}
export default ConsignmentReceiving