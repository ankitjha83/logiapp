import React from 'react'
import {Switch,Route} from 'react-router-dom'
import BagInscan from "./BagInscan";
import CrossDock from './CrossDock';
import ForwardtoProcessing from './ForwardtoProcessing';
import InboundStaging from './InboundStaging';
import PendingBags from './PendingBags';
function IBBagsStaging(){
    return(
        <div>
            <Switch>
                <Route path="/hubsystem/baginscan" component={BagInscan}/>
                <Route path="/hubsystem/crossdock" component={CrossDock}/>
                <Route path="/hubsystem/forwardtoprocessing" component={ForwardtoProcessing}/>
                <Route path="/hubsystem/inboundstaging" component={InboundStaging}/>
                <Route path="/hubsystem/pendingbags" component={PendingBags}/> 
            </Switch>
        </div>
    )
}
export default IBBagsStaging