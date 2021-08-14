import React from 'react'
import {Switch,Route} from 'react-router-dom'
import PickupFailureReason from './PickupFailureReason'
import DeliveryFailureReason from './DeliveryfailureReason'
import ShipmentRejectionReason from './ShipmentRejectionReason'
import BagRejectionReason from './BagRejectionReason'
import ReversePickupReason from './ReversePickupReason'
import RTOReasons from './RTOReason'
import LostUpdateReason from './LostUpdateReason'
import ShipmentStatusCode from './ShipmentStatusCode'

function UpdateParameter() {
    return (
        <div>
            <Switch>
                <Route path="/admin/pickupFailure" component={PickupFailureReason} />
                <Route path="/admin/shipmentRejection" component={ShipmentRejectionReason} />
                <Route path="/admin/bagRejection" component={BagRejectionReason} />
                <Route path="/admin/deliveryFailure" component={DeliveryFailureReason} />
                <Route path="/admin/reversePickup" component={ReversePickupReason} />
                <Route path="/admin/rtoReasons" component={RTOReasons} />
                <Route path="/admin/lostUpdateReasons" component={LostUpdateReason} />
                <Route path="/admin/shipmentStatusCode" component={ShipmentStatusCode} />
            </Switch>
        </div>
    )
}

export default UpdateParameter
