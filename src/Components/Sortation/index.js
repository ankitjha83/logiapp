import React from 'react'
import SideBar from '../SideBar'
import Dashboard from './Dashboard'
import ConsignmentReceiving from './ConsignmentReceiving'
import IBBagsStaging from './IBBagsStaging '
import PrimarySortation from './PrimarySortation'
import SecondarySortation from './SecondarySortation'
import ConsignmentDispatch from './ConsignmentDispatch'
import  {dashboardList,consignmentreceivingList,ibbagsstagingList,primarysortationList,secondarysortationList,consignmentdispatchList} from './Data'
// import PrimarySortation from './PrimarySortation'
// import SecondarySortation from './SecondarySortation'
// import IBBagsStaging from './IBBagsStaging '
// import IssueResolution from './IssueResolution'
// import ConsignmentDispatch from './ConsignmentDispatch'
// import ConsignmentReceiving from './ConsignmentReceiving'
// import BaggingandStaging from './BaggingandStaging'
// import CutOffAdherence from './CutoffAdherence'
// import GenerateBarcode from './GenerateBarcode'
// import ScanBarcode from './ScanBarcode'
// import ScanQrcode from './ScanQrcode'

function Sortation() {
    const list = [{ 
        name:"facebook",
        url:"https://facebook.com"
    },{
        name:"twitter",
        url:"https://twitter.com"
    },{
        name:"instagaram",
        url:"https://instagram.com"
    }]
    return (
        <div className="bg-div">
            <div className="sidebar-div" >
            <div className="sidebar-content">
                <SideBar 
                    title="Dashboard"
                    subMenu={dashboardList}
                />
                <SideBar 
                    title="Consignment Receiving"
                    subMenu={consignmentreceivingList}
                />
                <SideBar 
                    title="IB Bags Staging"
                    subMenu={ibbagsstagingList}
                />
                <SideBar 
                    title="Primary Sortation"
                    subMenu={primarysortationList}
                />
                 <SideBar 
                    title="Secondary Sortation"
                    subMenu={secondarysortationList}
                />
                 <SideBar 
                    title="Bagging & Staging"
                    subMenu={list}
                />
                 <SideBar 
                    title="Cut Off Adherence"
                    subMenu={list}
                />
                 <SideBar 
                    title="Consignment Dispatch"
                    subMenu={consignmentdispatchList}
                />
                 <SideBar 
                    title="Issue Resolution"
                    subMenu={list}
                />
                </div>
            </div>  
                <div className="content-div">
                    <Dashboard/>
                    <ConsignmentReceiving/>
                    <IBBagsStaging/>
                    <PrimarySortation/>
                    <SecondarySortation/>
                    <ConsignmentDispatch/>
                </div>
              
        </div>
    )
}

export default Sortation
