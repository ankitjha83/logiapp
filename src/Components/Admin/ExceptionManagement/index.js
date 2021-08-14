import React from 'react'
import {Switch , Route } from 'react-router-dom'
import EditUser from './EditUser'
import EditFacility from './EditFacility'
import EditNetwork from './EditNetwork'
import EditServiceability from './EditServiceability'
import EditSLA from './EditSLAs'
import EditClient from './EditClient'
import EditVendor from './EditVendor'

function ExceptionManagement() {
    return (
        <div>
            <Switch>
                <Route path="/admin/editUser" component={EditUser} />
                <Route path="/admin/editFacility" component={EditFacility} />
                <Route path="/admin/editNetwork" component={EditNetwork} />
                <Route path="/admin/editServiceability" component={EditServiceability} />
                <Route path="/admin/editSla" component={EditSLA} />
                <Route path="/admin/editVendor" component={EditVendor} />
                <Route path="/admin/editClient" component={EditClient} />
                
            </Switch>
            
        </div>
    )
}

export default ExceptionManagement
