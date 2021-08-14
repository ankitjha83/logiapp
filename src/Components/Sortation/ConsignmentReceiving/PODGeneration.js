// Incomplete
import React,{useState} from 'react'
import data from './pod-data.json'
import {nanoid} from 'nanoid'
function PODGeneration(){
    let i=1;
    const [podtable,setpodtable] = useState(data)
    const [row,setrow]=useState([]);
    const [addrow,setaddrow]=useState({})
    const [routedropdwon,setroutedropdown]=useState("");
    const handlesetaddrow=(e)=>{
        e.preventDefault();
        const fieldname=e.target.getAttribute('name');
        const fieldvalue=e.target.value;
        const newdata={...addrow};
        newdata[fieldname]=fieldvalue;
        setaddrow(newdata);
    }
    const routechange=(e)=>{
        e.preventDefault();
        setroutedropdown(e.target.value);
        console.log(routedropdwon);
    }
const handleddfromsubmit=(e)=>{
    let fl=0;
    e.preventDefault();
     if(addrow.hasOwnProperty('consignmentid'))
     {  
        podtable.forEach(function(object){
            
            if(object.hasOwnProperty('consignmentid') && addrow['consignmentid']===object['consignmentid'])
                 {  
                    const newpodrow={
                                    id:nanoid(),
                                    consignmentid:object.consignmentid,
                                    timeperiod:object.timeperiod,
                                    routename:object.routename,
                                    pod:object.pod
                                };
                   
                    setrow(row=>[...row,newpodrow]);
                    fl=1;
                
                 }
        })
     }
     else if(routedropdwon!=="")
     {
        podtable.forEach(function(object){
            
            if(object.hasOwnProperty('routename') && routedropdwon===object['routename'])
                 {  
                    const newpodrow={
                                    id:nanoid(),
                                    consignmentid:object.consignmentid,
                                    timeperiod:object.timeperiod,
                                    routename:object.routename,
                                    pod:object.pod
                                };
                   
                    setrow(row=>[...row,newpodrow]);
                    fl=1;
                
                 }
        })
     }
     if(fl===0)
     {
         alert("Record does not exist");
     }
}
    return(
        <div className="POD">
            <h2 className="PODmoduleheading">POD Generation</h2>
            <form onSubmit={handleddfromsubmit}>
            <span className="span">Time Period</span>
            <select className="selecttag" >
                    <option value="">Time duration</option>
                    <option value="month">Month</option>
                    <option value="day">Day</option>
                    <option value="timeperiod">Time Period</option>
                </select>
            <div className="or">or</div>
                <span className="span">Route Name</span>
                <select className="selecttag" value={routedropdwon} onChange={routechange}>
                    <option value="">Select Route</option>
                    <option value="DELHI-JAIPUR">DELHI-JAIPUR</option>
                    <option value="DELHI-KOLKATA">DELHI-KOLKATA</option>
                    <option value="DELHI-SURAT">DELHI-SURAT</option>
                    <option value="SURAT-VAPI">SURAT-VAPI</option>
                    <option value="SURAT-BHIWANDI">SURAT-BHIWANDI</option>
                </select>
            <div className="or">or</div>
            <span className="span" >Consignment id</span>
            <input type="text" className="inputfield" name="consignmentid" placeholder="Enter Consignment Id" onChange={handlesetaddrow}></input>
            <br/>
            <button className="Submitbtn" type="submit" >Submit</button>
            </form>
            <table className="podtable" border="1" cellSpacing="0">
            <thead>
                <tr colSpan={3}>
                <th>S.No.</th>
                <th>Consignment Id</th>
                <th>Download POD Link</th>
                </tr>
            </thead>
            {console.log(row)}
            <tbody style={{backgroundColor:"white",color:"black"}}>
                {row.map((r)=>(
                <tr>
                    <td>{i++}</td>
                    <td>{r.consignmentid}</td>
                    <td>{r.pod}</td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
    )
}
export default PODGeneration