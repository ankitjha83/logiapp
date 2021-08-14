import React from 'react'
import SideBar from '../SideBar'

function LastMile() {
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
                <SideBar 
                    title="Abcd"
                    subMenu={list}
                />
                
            </div>
            <div className="content-div">
               Delivery
            </div>
            
        </div>
    )
}

export default LastMile