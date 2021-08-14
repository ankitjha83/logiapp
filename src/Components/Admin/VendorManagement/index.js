import React from 'react'
import {Switch,Route} from 'react-router-dom'
import VendorAddition from './VendorAddition'
import VendorInvoices from './VendorInvoices'
import ServiceMapping from './ServiceMapping'
import ServiceBasedContracts from './ServiceBasedContracts'
import RateCard from './RateCard'
import PendingPayment from './PendingPayments'
import IncentivePenality from './IncentivePenalty'

function VendorManagement() {
    return (
        <div>
            <Switch>
                <Route path="/admin/vendorAdd" component={VendorAddition} />
                <Route path="/admin/vendorServiceMap" component={ServiceMapping} />
                <Route path="/admin/vendorServiceContracts" component={ServiceBasedContracts} />
                <Route path="/admin/vendorRateCard" component={RateCard} />
                <Route path="/admin/vendorIncentivesPenalties" component={IncentivePenality} />
                <Route path="/admin/vendorInvoices" component={VendorInvoices} />
                <Route path="/admin/vendorPendingPayments" component={PendingPayment} />
            </Switch>
        </div>
    )
}

export default VendorManagement
