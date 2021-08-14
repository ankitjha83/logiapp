import React,{useState} from 'react'

import './styles.css'

function UserType() {

    const [initialState,setInitialState] = useState({
        username:"",
        userRole:"",
        userLeg:""
    })

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log({initialState});
    }
    return (
        <div>
        <form className="formGroup" onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" onChange={(e)=> setInitialState({...initialState,username:e.target.value})} />
            <select className="selectTag" onChange={(e)=> setInitialState({...initialState,userRole:e.target.value})}>
                <option value="selectUserType">User Role</option>
                <option value="HubExecutive">Hub Executive</option>
                <option value="HubIncharge">Hub Incharge</option>
                <option value="ClusterIncharge">Cluster Incharge</option>
                <option value="RegionIncharge">Region Incharge</option>
                <option value="FunctionalIncharge">Functional Incharge</option>
                <option value="NationalIncharge">National Incharge</option>
                <option value="FieldExecutive">Field Executive</option>
            </select>
            <select className="selectTag" onChange={(e)=> setInitialState({...initialState,userLeg:e.target.value})}>
                <option value="default" >User Leg</option>
                <option value="firstMile" >FirstMile</option>
                <option value="lastMile" >LastMile</option>
                <option value="sortCenter" >Sortation Center</option>
                <option value="transport" >Transport</option>
                <option value="admin" >Admin</option>
            </select>
            <button className="submitbtn">Submit</button>
        </form>
        </div>
    )
}

export default UserType
