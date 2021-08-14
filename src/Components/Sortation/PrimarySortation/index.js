import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Binconfiguration from './Binconfiguration'
import Pendingshipments from './Pendingshipments'
import Stationbinmapping from './Stationbinmapping'
import Waveconfiguration from './Waveconfiguration'
import Waveswitchover from './Waveswitchover'
function PrimarySortation(){
    return(
        <div>
            <Switch>
             <Route path="/hubsystem/binconfiguration" component={Binconfiguration}/>
             <Route path="/hubsystem/pendingshipmets" component={Pendingshipments}/>
             <Route path="/hubsystem/stationbinmapping" component={Stationbinmapping}/>
             <Route path="/hubsystem/waveconfiguration" component={Waveconfiguration}/>
             <Route path="/hubsystem/waveswitchover" component={Waveswitchover}/>
             </Switch>
       </div>
    )
}
export default PrimarySortation