import React from 'react'
import {Switch,Route} from 'react-router-dom'
import ConnectionsDashboard from './ConnectionsDashboard'
import HubDashboard from './HubDashboard'
import InboundDashboard from './InboundDashboard'
import OutboundDashboard from './OutboundDashboard'
import PettyCash from './PettyCash'
import ForwardPendencies from './ForwardPendencies'
import ReversePendencies from './ReversePendencies'

function Dashboard(){
       return(
           <div>
               <Switch>
                <Route path="/hubsystem/hubdashboard" component={HubDashboard}/>
                <Route path="/hubsystem/connectionsdashboard" component={ConnectionsDashboard}/>
                <Route path="/hubsystem/outdashboard" component={OutboundDashboard}/>
                <Route path="/hubsystem/inbounddashboard" component={InboundDashboard}/>
                <Route path="/hubsystem/pettycash" component={PettyCash}/>
                <Route path="/hubsystem/forwardpendencies" component={ForwardPendencies}/>
                <Route path="/hubsystem/reversependencies" component={ReversePendencies}/>
                </Switch>
          </div>
       )
}
export default Dashboard