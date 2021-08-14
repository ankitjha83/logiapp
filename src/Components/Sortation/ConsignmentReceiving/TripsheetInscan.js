import React,{useState} from 'react'
import './styleconsignmentreceiving.css'
// getting data for consignment table from tripsheet inscan's json file
import data from './tripsheetinscan-data.json'
// for making an unique id for any object that we create
import {nanoid} from 'nanoid'
//scan barcode package 
import BarcodeScannerComponent from "react-webcam-barcode-scanner";
// sa global variable is used in scan again alert implementation if scanner camera is unable to scan barcode
let sa=0;
// global variable to store barcode data on succesfull scan
let barcodedata="";
// global variable to store which route is chosen in select tag among the given options of route names like delhi-jaipur,delhi-kolkata..
let routedropdwon="";
// global array variable to store those consignments(Select consignment column in consignment table) which are checked in checkbox and we can send it to backend
// to make them know which bags are selected for tripsheet inscan out of the total tripsheets.Note:-tripsheet is same as consignment
let checkedconsignments=[];
function TripsheetInscan(){
     // variable used as S.No. in tripsheet inscan table
    let i=1;
    // an array of objects variable to store and manipulate the json data for tripsheet inscan module in tripsheetinscan-data.json
    const [tripsheetdata,settripsheetdata] = useState(data)
    // variable to control rendering of barcode scanner on click of button Scan Here
    const [scanactive,setactive]=useState(false)
    // an array of objects variable to store those consignment id's data which are getting scanned and then used for adding row to table on successful scan
    const [row,setrow]=useState([]);
    // variable to store remarks entered in a partcular row in tripsheet inscan table
    const[remarks,setremarks]=useState("");
      // this variable is used to control when to show or not show submit button
    const[showsubmitbtn,setshowsubmitbtn]=useState(false);
    // thsi function is used to store input entered in remarks column for a particular row with consignment id as cid.
    const inputchange=(cid,e)=>{
        e.preventDefault();
       const newinput=e.target.value;
       setremarks(newinput);
    }
   // style for barcode scanner so that it appears on center of the screen
    const mystle = {
    marginLeft: "600px",
     };
     // this function is called when the route in the select tag gets changed,then the whole data of table which was present 
     // prior to this gets deleted using setrow([]).the value of route gets stored in routedropdown variable and then a whole new table is built
     // which contains the details of those consignments which have their route names equal to routedropdown value,means all
     // consignments of a particular route like Delhi-Kolkata gets rendered on the tripsheet inscan table
     const routechange=(e)=>{
        e.preventDefault();
        setrow([]);
        routedropdwon=e.target.value;
        appendtable();
    }
     // this function is called when scan here button is clicked,then the camera appers when scan active is made true 
    // using setactive.  'sa' variable is used as a flag to see that if in 30 seconds scanner does not read then it should show
    // an alert of "Scan Again" and stop the scanner camera. 
    const scaneffect=(e)=>{
        sa=0;
        e.preventDefault();
        setactive(true);
        setTimeout(function(){
            if(sa==0)
            { setactive(false);
              alert('Scan Again');
           
            }
        },30000)
     
    }
    // this function is called when the submit button gets clicked then the whole tsble gets deleted using setrow([]).An alert
    // of succesfully submiited is shown to user.the submit button is made to disappear using setshowsubmitbtn(false).Routedropdwon
    // is made equal to "" by which it will show 'Select Route' in the select tag.Here we can send all those consignments which
    // were chekced in the checkboxes to the backend and then make checked consignment array as empty again for again repeating
    // tripsheets inscan process.  
    const submitconsignment=(e)=>{
        e.preventDefault();
        alert('Successfully Submitted');
        setrow([]);
        setshowsubmitbtn(false);
        routedropdwon="";
        checkedconsignments=[];
    }
    // This function is used to push all those consignments to the checkconsignments array which have their checkbox values as checked
    // and if the user unchecks a already checked checkbox then it is searched in the checkconsignments array and if found it is deleted
    // from that array
    const handlecheckbox=(cid,e)=>{
        const checked=e.target.checked;
        if(checked===true)
        {
            checkedconsignments.push(cid);
            console.log(checkedconsignments);
         
        }
        else{
            const index = checkedconsignments.indexOf(cid);
            if(index>-1)
            checkedconsignments.splice(index, 1);
            console.log(checkedconsignments);
        }
          

    }
    // This function is used to add row in the consignment table in case of one among the given conditions.
    // if both barcodedata and routedropdown is not empty that means both route and consignment id is there then we will
    // linearly search in the json data of tripsheet inscan and if there is a match then add a row to the table with details about
    // the consignment.After adding that consignment to the table we make its scan status as true means it has been scanned which
    // helps us to not scan a duplicate bag.Other case is that if routedropdown is empty but barcode data is not then also we simply
    // search for that consignment id in the json data.Last case is if only route is selected then the whole table gets deleted first and then all those consignments are added in the table having route value as 
    //routedropdown
    const appendtable=()=>{
        if(barcodedata!=="" && routedropdwon!=="")
        {   let fl=0;// flag variable to denote if we are able to find a consignment with the consignment id or not in json data.
            let cnt=0;// counter for loop as we are looping through whole json file to find a match(like linear search)
            tripsheetdata.forEach(function(object){
                if(object.consignmentid===barcodedata && routedropdwon===object.routename && object.scannedstatus==false)
                {   const newtripsheetrow={
                         id:nanoid(),
                         consignmentid:object.consignmentid,
                         routename:object.routename,
                         initalconsignwt:object.initalconsignwt,
                         finalconsignwt:object.finalconsignwt,
                         vehicleno:object.vehicleno,
                         partnername:object.partnername,
                         startkm:object.startkm,
                         endkm:object.endkm,
                         bagcount:object.bagcount,
                      }
                  
                    setrow(row=>[...row,newtripsheetrow]);
                    setshowsubmitbtn(true);
                    // making scanned staus of connsignment as true uptil fl=1;
                   let temp_state=[...tripsheetdata];
                   let temp_object={...temp_state[cnt]};
                   temp_object.scannedstatus=true;
                   temp_state[cnt]=temp_object
                   settripsheetdata(temp_state);
                    fl=1;
                
                }
                // consignment has scanned status as true which means it has been already scanned.
              else if(object.consignmentid===barcodedata && routedropdwon===object.routename && object.scannedstatus==true){
                fl=1;
                alert(`Consignment Id ${barcodedata} already scanned`);

              }
                   cnt++;
            })
            // no consignmentid containing such barcode data exists in json file
            if(fl===0)
            alert(`No such tripsheet exists`);
             
        }
        else if(routedropdwon==="" && barcodedata!=="")
        {   let fl=0;
            let cnt=0;
            tripsheetdata.forEach(function(object){
                if(object.consignmentid===barcodedata && object.scannedstatus===false)
                {
                    const newtripsheetrow={
                        id:nanoid(),
                        consignmentid:object.consignmentid,
                        routename:object.routename,
                        initalconsignwt:object.initalconsignwt,
                        finalconsignwt:object.finalconsignwt,
                        vehicleno:object.vehicleno,
                        partnername:object.partnername,
                        startkm:object.startkm,
                        endkm:object.endkm,
                        bagcount:object.bagcount,

                     }
                 
                   setrow(row=>[...row,newtripsheetrow]);
                   setshowsubmitbtn(true);
                   let temp_state=[...tripsheetdata];
                   let temp_object={...temp_state[cnt]};
                   temp_object.scannedstatus=true;
                   temp_state[cnt]=temp_object
                   settripsheetdata(temp_state);
                   fl=1;
                   
                }
                else if(object.consignmentid===barcodedata && object.scannedstatus===true)
                {
                 fl=1;
                 alert(`Consignment Id ${barcodedata} already scanned`);
                }
                cnt++;

            })
            if(fl===0)
            {
                alert(`No such tripsheet exists`);
            }
        }
        // if only route is selected then all those consignments are added in the table having route value as routedropdown
        else if(routedropdwon!="")
        {  let fl=0;
            tripsheetdata.forEach(function(object){
                if(object.routename===routedropdwon)
                {
                    const newtripsheetrow={
                        id:nanoid(),
                        consignmentid:object.consignmentid,
                        routename:object.routename,
                        initalconsignwt:object.initalconsignwt,
                        finalconsignwt:object.finalconsignwt,
                        vehicleno:object.vehicleno,
                        partnername:object.partnername,
                        startkm:object.startkm,
                        endkm:object.endkm,
                        bagcount:object.bagcount,

                     }
                  fl=1;
                   setrow(row=>[...row,newtripsheetrow]);
                   setshowsubmitbtn(true);
                }

            })
            if(fl==0)
            setshowsubmitbtn(false);
        }

        barcodedata="";// making barcode data as "" at end as it is a global variable and  if we want to add another row then barcode 
        // data should not have any previous barcode value

      
    }
    return(
            <div className="tripsheet">
                <h2 className="tripsheetmoduleheading">Tripsheet Inscan</h2>
            <span className="Routename">Route Name</span>
            <select className="selecttagtripsheet"  value={routedropdwon} onChange={routechange}>
                    <option value="">Select Route</option>
                    <option value="DELHI-JAIPUR">DELHI-JAIPUR</option>
                    <option value="DELHI-KOLKATA">DELHI-KOLKATA</option>
                    <option value="DELHI-SURAT">DELHI-SURAT</option>
                    <option value="SURAT-VAPI">SURAT-VAPI</option>
                    <option value="SURAT-BHIWANDI">SURAT-BHIWANDI</option>
                </select>
                <span className="Routename">Consignment Id</span><button className="scan" onClick={scaneffect}>Scan Here </button>
                {/* <button className="addtripsheetrow" onClick={appendtable} style={{marginLeft:"50px"}}>Add Scanned Consignment</button> */}
                <span className="scancomponent">
                    {scanactive===true && <div style={mystle}><BarcodeScannerComponent
          width={400}
          height={400}
          onUpdate={(err, result) => {
            if (result){ 
                sa=1;// barcode scanner has successfully read the data
                barcodedata=result.text;//result.text contains scanned value
                setactive(false);// close the camera
                alert(`Barcode with value ${result.text} successfully scanned.`);// shown an alert to user on succesful scan
                appendtable();// add row to table
             
            }

          }}
        /></div>}
                </span>
                <div className="tablediv">
                <table className="maintable" border="1" cellSpacing="0">
                    <thead>
                    <tr colSpan={12} >
                        <th >S.No.</th>
                        <th>Consignment Id</th>
                        <th>Route Name</th>
                        <th>Consignment weight(Ini)</th>
                        <th>Consignment weight(Fin)</th>
                        <th>Vehicle No</th>
                        <th>Partner Name</th>
                        <th>Start KM</th>
                        <th>End KM</th>
                        <th>No of Bags</th>
                        <th>Remarks</th>
                        <th>Scan Status</th>
                        <th>Select Consignment</th>
                    </tr>
                    </thead>
                    <tbody style={{backgroundColor:"white",color:"black"}}>
                    {row.map((r)=>(
                <tr colSpan={12}>
                    <td>{i++}</td>
                    <td>{r.consignmentid}</td>
                    <td>{r.routename}</td>
                    <td>{r.initalconsignwt}</td>
                    <td>{r.finalconsignwt}</td>
                    <td>{r.vehicleno}</td>
                    <td>{r.partnername}</td>
                    <td>{r.startkm}</td>
                    <td>{r.endkm}</td>
                    <td>{r.bagcount}</td>
                    <td><input type="text"  name="remarks" onBlur={(e)=>inputchange(r.consignmentid,e)}></input></td>
                    <td>Success</td>
                    <td><input type="checkbox"  name="selectconsignment" onChange={(e)=>handlecheckbox(r.consignmentid,e)} ></input></td>
                </tr>
                ))}
                    </tbody>
                </table>
                </div>
                {showsubmitbtn===true &&  <button className="Submitbtn" type="submit" onClick={submitconsignment}>Submit</button>}
            </div>
    )
}
export default TripsheetInscan