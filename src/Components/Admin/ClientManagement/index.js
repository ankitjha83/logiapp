import React from 'react'
import {Switch,Route} from 'react-router-dom'
import ServiceMapping from './ServiceMapping'
import ServiceBasedContracts from './ServiceBasedContracts'
import RateCard from './RateCard'
import PendingReceiveable from './PendingReceiveables'
import ClientBilling from './ClientBilling'
import ClientAddition from './ClientAddition'
import IncentivePenality from './IncentivePenalty'

function ClientManagement() {
    return (
        <div>
            <Switch>
                <Route path="/admin/clientAdd" component={ClientAddition} />
                <Route path="/admin/clientBilling" component={ClientBilling} />
                <Route path="/admin/clientServiceMap" component={ServiceMapping} />
                <Route path="/admin/clientServiceContracts" component={ServiceBasedContracts} />
                <Route path="/admin/clientRateCard" component={RateCard} />
                <Route path="/admin/clientIncentivesPenalties" component={IncentivePenality} />
                <Route path="/admin/clientPendingReceivables" component={PendingReceiveable} />
            </Switch>
        </div>
    )
}

export default ClientManagement
