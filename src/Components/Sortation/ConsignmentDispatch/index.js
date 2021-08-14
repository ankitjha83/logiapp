import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Consignmentdispatch from './Consignmentdispatch'
import Compliancedocuments from './Compliancedocuments'
import Loadingcompleted from './Loadingcompleted'
import Scanbasedloading from './Scanbasedloading'
import Startconsignmentcreation from './Startconsignmentcreation'
import Vehiclesealing from './Vehiclesealing'
function ConsignmentDispatch(){
    return(
        <div>
            <Switch>
                <Route path="/hubsystem/consignmentdispatch" component={Consignmentdispatch}/>
                <Route path="/hubsystem/compliancedocuments" component={Compliancedocuments}/>
                <Route path="/hubsystem/loadingcompleted" component={Loadingcompleted}/>
                <Route path="/hubsystem/scanbasedloading" component={Scanbasedloading}/>
                <Route path="/hubsystem/startconsignmentcreation" component={Startconsignmentcreation}/> 
                <Route path="/hubsystem/vehiclesealing" component={Vehiclesealing}/>
            </Switch>
        </div>
    )
}
export default ConsignmentDispatch