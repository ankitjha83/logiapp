import React from 'react'
import SideBar from '../SideBar'
import CreateUser from './CreateUser'
import CreateFacility from './CreateFacility'
import CreateNetwork from './CreateNetwork'
import ServiceabilityManagement from './ServiceablityManagement'
import IssueResolution from './IssueResolution'
import ExceptionManagement from './ExceptionManagement'
import SLAManagement from './SLAManagement'
import VendorManagement from './VendorManagement'
import ClientManagement from './ClientManagement'
import UpdateParameter from './UpdateParameter'

import {userList,facilityList,networkList,serviceList,slaList,vendorList,clientList,exceptionList,updateList,issueList} from './Data'

function Admin() {

    return (
        <div className="bg-div">
            <div className="sidebar-div" >
            <div className="sidebar-content">
                <SideBar 
                    title="Create User"
                    subMenu={userList}
                />
                <SideBar 
                    title="Create Facility"
                    subMenu={facilityList}
                />
                <SideBar 
                    title="Create Network"
                    subMenu={networkList}
                />
                <SideBar 
                    title="Serviceability Management"
                    subMenu={serviceList}
                />
                <SideBar 
                    title="SLA Management"
                    subMenu={slaList}
                />
                <SideBar 
                    title="Vendor Management"
                    subMenu={vendorList}
                />
                <SideBar 
                    title="Client Management"
                    subMenu={clientList}
                />
                <SideBar 
                    title="Exception Management"
                    subMenu={exceptionList}
                />
                <SideBar 
                    title="Update Parameters"
                    subMenu={updateList}
                />
                <SideBar 
                    title="Issue Resolution"
                    subMenu={issueList}
                />
                </div>
            </div>
            <div className="content-div">
                <CreateUser />
                <CreateFacility />
                <CreateNetwork />
                <ServiceabilityManagement />
                <IssueResolution />
                <ExceptionManagement />
                <SLAManagement />
                <ClientManagement />
                <VendorManagement />
                <UpdateParameter />
            </div>
            
        </div>
    )
}

export default Admin
