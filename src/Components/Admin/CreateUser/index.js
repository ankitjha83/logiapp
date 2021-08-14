import React from 'react'
import {Switch , Route} from 'react-router-dom'
import AddUser from './AddUser'
import UserType from './UserType'
import ProvideAccess from './ProvideAccess'
import ViewUser from './ViewUser'
import './styles.css'

function CreateUser() {
    return (
        <div className="maindiv">
            <Switch>
                <Route path='/admin/adduser' component={AddUser} />
                <Route path="/admin/userType" component={UserType} />
                <Route path="/admin/provideAccess" component={ProvideAccess} />
                <Route path="/admin/viewUser" component={ViewUser} />
            </Switch>
        </div>
    )
}

export default CreateUser
