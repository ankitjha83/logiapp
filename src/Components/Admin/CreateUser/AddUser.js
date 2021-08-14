import React , {useRef,useState} from 'react'

import './styles.css'

function AddUser() {
    const userRef = useRef(null);
    const [initialState,setInitialState] = useState({
        firstname:"",
        middlename:"",
        lastname:"",
        employeeID:"",
        mobile:"",
        mobileSec:"",
        addressLine1:"",
        addressLine2:"",
        addressLine3:"",
        pincode:"",
        bloodgroup:"",
        emergencyContact:"",
        emergencyContact2:"",
        userType:"",
        workingLocation:"",
        dateOfJoining:"",
        gender:"",
        username:"",
        password:""
    })

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log({initialState});
    }
    

    return (
        <div>
            <form className="formGroup" onSubmit={handleSubmit}>

                <input placeholder="First Name" name="firstname" onChange={(e)=> setInitialState({...initialState,firstname:e.target.value})} />
                <input placeholder="Middle Name" name="middlename" onChange={(e)=> setInitialState({...initialState,middlename:e.target.value})} />
                <input placeholder="Last Name" name="lastname" onChange={(e)=> setInitialState({...initialState,lastname:e.target.value})} />
                <input placeholder="Employee ID" name="employeeID" onChange={(e)=> setInitialState({...initialState,employeeID:e.target.value})} />
                <input type="number" placeholder="Mobile Number(primary)" name="mobile(primary)" onChange={(e)=> setInitialState({...initialState,mobile:e.target.value})} />
                <input type="number" placeholder="Mobile Secondary" name="mobile(secondary)" onChange={(e)=> setInitialState({...initialState,mobileSec:e.target.value})} />
                <input placeholder="Address Line 1" name="addressLine1" onChange={(e)=> setInitialState({...initialState,addressLine1:e.target.value})} />
                <input placeholder="Address Line 2" name="addressLine2" onChange={(e)=> setInitialState({...initialState,addressLine2:e.target.value})} />
                <input placeholder="Address Line 3" name="addressLine3" onChange={(e)=> setInitialState({...initialState,addressline3:e.target.value})} />
                <input placeholder="PIN Code" name="pincode" onChange={(e)=> setInitialState({...initialState,pincode:e.target.value})} />
                <select className="selectTag" onChange={(e)=> setInitialState({...initialState,bloodgroup:e.target.value})}>
                    <option value="">BloodGroup</option>
                    <option value="a+">A+</option>
                    <option value="a-">A-</option>
                    <option value="b+">B+</option>
                    <option value="b-">B-</option>
                    <option value="ab+">AB+</option>
                    <option value="ab-">AB-</option>
                    <option value="o+">O+</option>
                    <option value="o-">O-</option>
                </select>
                <input type="number" placeholder="Emergency Contact" name="emergencyContact" onChange={(e)=> setInitialState({...initialState,emergencyContact:e.target.value})} />
                <input type="number" placeholder="Emergency Contact #" name="emergencyContact#" onChange={(e)=> setInitialState({...initialState,emergencyContact2:e.target.value})} />
                <input placeholder="User Type" name="userType" onChange={(e)=> setInitialState({...initialState,userType:e.target.value})} />
                <input placeholder="Working Location" name="workingLocation" onChange={(e)=> setInitialState({...initialState,workingLocation:e.target.value})} />
                <input className="dateInput" placeholder="Date of Joining (DD/MM/YYYY)" onChange={(e)=> setInitialState({...initialState,dateOfJoining:e.target.value})} />
                <select className="selectTag" onChange={(e)=> setInitialState({...initialState,gender:e.target.value})}>
                    <option value="gender" >Gender</option>
                    <option value="male" >Male</option>
                    <option value="female" >Female</option>
                    <option value="other" >Other</option>
                </select>
                <input placeholder="Username" name="username" onChange={(e)=> setInitialState({...initialState,username:e.target.value})} />
                <input type="password" placeholder="Password" name="password" onChange={(e)=> setInitialState({...initialState,password:e.target.value})} />
                <input type="password" placeholder="Confirm Password" name="co-password" />                
                <br />
                <button className="submitbtn">Submit</button>

            </form>
        </div>
    )
}

export default AddUser
