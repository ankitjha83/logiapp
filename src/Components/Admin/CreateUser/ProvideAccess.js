import React from 'react'

function ProvideAccess() {
    return (
        <div>
            <form className="formGroup" >
                <input type="text" placeholder="Username" />
                <input type="text" placeholder="User Type" />
                <select className="selectTag" >
                    <option value="default" >User Leg</option>
                    <option value="firstMile" >FirstMile</option>
                    <option value="lastMile" >LastMile</option>
                    <option value="sortCenter" >Sortation Center</option>
                    <option value="transport" >Transport</option>
                    <option value="admin" >Admin</option>
                </select>
                <input placeholder="Services To choose"/>
                <button className="submitbtn">Submit</button>
            </form>
        </div>
    )
}

export default ProvideAccess
