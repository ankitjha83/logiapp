import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Binconfiguration from './Binconfiguration'
import Pendingshipments from './Pendingshipments'
import Stationbinmapping from './Stationbinmapping'
import Waveconfiguration from './Waveconfiguration'
import Waveswitchover from './Waveswitchover'
import Sealingandbagclosure from './Sealingandbagclosure'
function SecondarySortation(){
    return(
        <div>
            <Switch>
             <Route path="/hubsystem/secondarybinconfiguration" component={Binconfiguration}/>
             <Route path="/hubsystem/secondarypendingshipmets" component={Pendingshipments}/>
             <Route path="/hubsystem/secondarystationbinmapping" component={Stationbinmapping}/>
             <Route path="/hubsystem/secondarywaveconfiguration" component={Waveconfiguration}/>
             <Route path="/hubsystem/secondarywaveswitchover" component={Waveswitchover}/>
             <Route path="/hubsystem/secondarysealingandbagclosure" component={Sealingandbagclosure}/>
             </Switch>
       </div>
    )
}
export default SecondarySortation