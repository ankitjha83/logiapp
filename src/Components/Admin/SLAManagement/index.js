import React from 'react'
import {Switch , Route} from 'react-router-dom'
import ODPairService from './ODPairService'
import ODPairTAT from './ODPairTAT'
import ODPairCost from './ODPairCost'
import NewServiceAdd from './NewServiceAdd'

function SLAManagement() {
    return (
        <div>
            <Switch>
                <Route path="/admin/odPairService" component={ODPairService} />
                <Route path="/admin/odPairTat" component={ODPairTAT} />
                <Route path="/admin/odPairCost" component={ODPairCost} />
                <Route path="/admin/newServiceAdd" component={NewServiceAdd} />
            </Switch>
        </div>
    )
}

export default SLAManagement
