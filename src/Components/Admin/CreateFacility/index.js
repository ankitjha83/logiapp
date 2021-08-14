import React from 'react'
import {Switch , Route} from 'react-router-dom'
import AddFacility from './AddFacility'
import EnableServices from './EnableServices'
import NetworkProperties from './NetworkProperties'
import StorageMapping from './StorageMapping'

const CreateFacility = () => {
    return (
        <div>
            <Switch>
                <Route path='/admin/addfacility' component={AddFacility} />
                <Route path="/admin/enableServices" component={EnableServices} />
                <Route path="/admin/networkProperties" component={NetworkProperties} />
                <Route path="/admin/storageMapping" component={StorageMapping} />
            </Switch>
        </div>
    )
}

export default CreateFacility
