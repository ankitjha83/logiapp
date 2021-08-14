import React,{useRef} from 'react'

import './styles.css'

function AddFacility() {
    const facilityRef = useRef(null);

    const handleSubmit = e =>{
        e.preventDefault();
        console.log(facilityRef.current);
    }
    return (
        <div>
            <form className="formGroup" ref={facilityRef} onSubmit={handleSubmit}>
                <input placeholder="Facility Name" name="facilityname" />
                <input placeholder="Facility ID" name="facilityID" />
                <select className="selectTag">
                    <option>Facility Type</option>
                    <option>Gateway</option>
                    <option>Regional Center</option>
                    <option>Local Transport Center</option>
                    <option>Local Center</option>
                </select>
                <input placeholder="Services Mapped" name="servicesMapped" />
                <input placeholder="Services Provider Name" name="servicesProviderName" />
                <input placeholder="Contract ID" name="contractID" />
                <input placeholder="Address Line 1" name="addressline1" />
                <input placeholder="Address Line 2" name="addressline2" />
                <input placeholder="Geo-Codes(Lat-Long)" name="geoCodes" />
                <input type="submit" />
            </form>
        </div>
    )
}

export default AddFacility
