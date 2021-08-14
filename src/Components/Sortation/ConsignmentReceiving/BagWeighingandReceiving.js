import React,{useState} from 'react'
import './styleconsignmentreceiving.css'
// for making an unique id for any object that we create
import {nanoid} from 'nanoid'
//scan barcode package 
import BarcodeScannerComponent from "react-webcam-barcode-scanner";
// getting data for bag weighing and receiving table from json file
import data from './bagweighingandreceiving-data.json'
// getting data for consignment table from tripsheet inscan's json file
import datatripsheet from './tripsheetinscan-data.json'
// sa gloabl variable is used in scan again alert implementation if scanner camera is unable to scan barcode
let sa=0;
// global variable to store barcode data on succesfull scan
let barcodedata="";
//global parameter to decide for weight mismatch to be passed from admin
let tolerancepercent=0.1;
function BagWeighingandReceiving(){
  // variables used as S.No. in bagweighingandreceiiving table and scan summary table
    let i=1;
    let j=1;
    // variable to count number of bags which are inscanned
     const [bagsinscanned,setbagsinscanned]=useState(0);
     // variable to control rendering of barcode scanner on click of button Scan Here
    const [scanactive,setactive]=useState(false)
    // an array of objects variable to store json file data for bagweighingandreceiving table and in various functions
    const [bagweighingandreceivingbagsdata,setbagweighingandreceivingbagsdata] = useState(data);
    // an array of objects variable to store json file data for consignment table.This is the same json file which is used in tripshhet inscan module also
    const [bagweighingandreceivingconsignmentdata,setbagweighingandreceivingconsignmentdata]=useState(datatripsheet);
    // variable to store bagid when someone manually inputs the bag id in input field
    const [bagid,setbagid]=useState("");
    // an array of objects variable to store those bag id's data which are getting scanned and then used for adding row to table on successful scan
    const [row,setrow]=useState([]);
    // this variable is used when submit btn is clicked on first pg of this module to render scan summary pg and hide pg for bag scanning
    const[toggle,settoggle]=useState(false);
    // this variable is used to control when to show or not show submit button
    const[showsubmitbtn,setshowsubmitbtn]=useState(false);
    // variable to count excess number of bags
   const [excessbags,setexcessbags]=useState(0);
   // variable to count number of bags in which difference of expected and actual weight is more than 10% of expected weight
   const[weightmismatchbags,setweightmismatchbags]=useState(0);
   // variable to control when to show "Do you want to scan more bags" with yes and no buttons
   const[scanmorebags,setscanmorebags]=useState(true);
   // variable to control when to show generate otp button
   const[generateotp,setgenerateotp]=useState(false);
    // variable to control when to show submit otp button
   const[submitotp,setshowsubmitotp]=useState(false);
   // variable to store drivername
   const [drivername,setdrivername]=useState("");
   // variable to store driver mobileno.
   const [drivermobile,setdrivermobile]=useState("");
   // variable to store entered otp
   const [submittedotp,setsubmittedotp]=useState("")
   // style for barcode scanner so that it appears on center of the screen
    const mystle = {
        marginLeft: "600px",
         };
    // this function is called when scan here button is clicked,then the camera appers when scan active is made true 
    // using setactive.'sa' variable is used as a flag to see that if in 30 seconds scanner does not read then it should show
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
    // this function is used to store user's input for bag id in bagid variable using setbagid
    const handlechange = (e) => {
            e.preventDefault();
            setbagid(e.target.value);
          }
    // this variable is used when submit button is clicked to show scan summary pg and it is also used when someone clicks
    // the yes button for the question "do you want to scan more bags".submit button rendering is also controlled here
    const toggleeffect=(e)=>{
      e.preventDefault();
      settoggle(!toggle);
      setshowsubmitbtn(!showsubmitbtn);
    }
    // this function is called when user clicks no button for the question "do you want to scan more bags",then it hides the 
    // the div containing this question and buttons and generate otp div appears
    const hideyesnoshowgenerateotp=(e)=>{
      e.preventDefault();
      setscanmorebags(false);
      setgenerateotp(true);
    }
    // this function is called when user clicks on generate otp button to show submit otp div,and generate otp div disappears then
    const showsubmitotp=(e)=>{
      e.preventDefault();
      setgenerateotp(false);
      setshowsubmitotp(true);
    }
    // this function is called when the otp is submitted and it just prints drivername,drivermobile and submitted otp
    // this data can be send to the database
    const otpsubmit=(e)=>{
      e.preventDefault();
      console.log(drivername,drivermobile,submittedotp);
    }
    // this function is called when onblur event happens on input of actual weight.It takes in input a bag object which
    // contain all the attributes of bagweighing and receiving table,cnt denoting index of array in row variable in which actual 
    // weight input was entered by user.It checks the absolute difference of actual wt and expected wt and if above tolerance 
    // limit then shows an alert that this bag should be taken to issue resolution and then replace the bag next location column
    // value for that bagid to irt.also here count of weight mismatch bags is increased if above condition is met.
    //After that iteration is done in the json file to find that bagid for which weight mismatch happenend and then change its
    // issue type attribute to weight mismatch which is used in scan summary table in issue type column.
    const actualweightinput=(Bagobject,cnt,e)=>{
      e.preventDefault();
      const actualwt=e.target.value;
      if(Math.abs(Bagobject.expectedweight-actualwt)>=tolerancepercent*Bagobject.expectedweight)
      {
        setweightmismatchbags(weightmismatchbags+1);
        alert(`Send Bag ID ${Bagobject.bagid} for Issue Resolution.Weight Mismatch Tolerance exceeded`)
        let temp_state=[...row];
        let temp_object={...temp_state[cnt]};
        temp_object.bagnextlocation="IRT";
        temp_state[cnt]=temp_object;
        setrow(temp_state);
        // from here finding of bag in json file starts so that we can mark it as a weight mismatch bag and send it to issue resolution
        let count=0;
        for(count;count<bagweighingandreceivingbagsdata.length;count++)
        {
          if(Bagobject.bagid==bagweighingandreceivingbagsdata.bagid)
          break;
        }
        let temp_statesummary=[...bagweighingandreceivingbagsdata];
              let temp_objectsummary={...temp_statesummary[count]};
              temp_objectsummary.issuetype="Weight Mismatch";
              temp_objectsummary.bagid=Bagobject.bagid;
              temp_objectsummary.bagpreviouslocation=Bagobject.bagpreviouslocation;
              temp_objectsummary.bagoriginlocation=Bagobject.bagoriginlocation;
              temp_objectsummary.bagdestinationlocation=Bagobject.bagdestinationlocation;
              temp_statesummary[count]=temp_objectsummary
              setbagweighingandreceivingbagsdata(temp_statesummary);
      }

    }
    //this function is used when barcode data is succesfully read by scanner or when someone enters the bag id manually and clicks
    // the search here button then it checks that if barcode data is not equal to "" that means scanning using camera was succesful
    // so then search for that barcode in  bagweighingandreceivingbagsdata array and if that barcode data is equal to some bag id
    // then it checks if that bag id's consignment id is equal to to the consignment id whose bags we are receiving.If it is the 
    // case then succesfully add a row(add an object) to table and increase the count of inscan bags by one and also show an alert
    // for making the user know the next location of bag(Inbound,Outbound,Processing or IRT in case of excess or weight mismatch bags)
    //also make the scanned status of the bag as true meaning it is scanned.if the barcode data is equal to some bag id but the bag's
    // consignment id is not equal to consignment id for which bag weighing and receiving is happening then it is an excess bag
    //(handled in else if condition).So increase the count of excess bag by one .Also,In that case we have to mark too that it is an excess bag so that we can show it in scan summary
    const appendtable=()=>{
      if(barcodedata!=""){
        let fl=0;// variable to denote if we are able to find a bag with the barcode data or not
        let cnt=0;
        bagweighingandreceivingbagsdata.forEach(function(object){
            if(object.bagid===barcodedata && object.consignmentid===bagweighingandreceivingconsignmentdata[0].consignmentid){
              const newbagrow={
                id:nanoid(),
                bagid:object.bagid,
                expectedweight:object.expectedweight,
                bagnextlocation:object.bagnextlocation,
                consignmentid:object.consignmentid,
                routename:object.routename,
                typeofbag:object.typeofbag,
                bagoriginlocation:object.bagoriginlocation,
                bagdestinationlocation:object.bagdestinationlocation,
                bagpreviouslocation:object.bagpreviouslocation,
                countofshipments:object.countofshipments,
              }
              alert(`Bag Id ${object.bagid} scanned for ${object.bagnextlocation}`)
              setrow(row=>[...row,newbagrow]);
              setshowsubmitbtn(true);
              setbagsinscanned(bagsinscanned+1);
              let temp_state=[...bagweighingandreceivingbagsdata];
              let temp_object={...temp_state[cnt]};
              temp_object.scannedstatus=true;
              temp_state[cnt]=temp_object
              setbagweighingandreceivingbagsdata(temp_state);
              fl=1;
            }
            else if(object.bagid===barcodedata && object.consignmentid!==bagweighingandreceivingconsignmentdata[0].consignmentid){
              const newbagrow={
                id:nanoid(),
                bagid:object.bagid,
                expectedweight:object.expectedweight,
                bagnextlocation:object.bagnextlocation,
                consignmentid:object.consignmentid,
                routename:object.routename,
                typeofbag:object.typeofbag,
                bagoriginlocation:object.bagoriginlocation,
                bagdestinationlocation:object.bagdestinationlocation,
                bagpreviouslocation:object.bagpreviouslocation,
                countofshipments:object.countofshipments,
              }
              alert(`Bag Id ${object.bagid} of Consignment Id ${object.consignmentid} scanned for ${object.bagnextlocation}`)
              setrow(row=>[...row,newbagrow]);
              setshowsubmitbtn(true);
              setexcessbags(excessbags+1);
              //uptil fl=1 is used to set issue type attribute of bag as Excess and scanned status as true
              let temp_state=[...bagweighingandreceivingbagsdata];
              let temp_object={...temp_state[cnt]};
              temp_object.scannedstatus=true;
              temp_object.issuetype="Excess";
              temp_state[cnt]=temp_object
              setbagweighingandreceivingbagsdata(temp_state);
              fl=1;
            }
            cnt++;// counter for loop as we are looping through whole json file to find a match(like linear search)
        })
        // no bagid containing such barcode data exists in json file
        if(fl===0)
        {
          alert('No such Bag Id exists');
        }
      }
      // if the barcode data is "" but bagid is not equal to "" that means manual entry is done by user in that case too the logic
      //is similar as above if condition just that barcode data is changed with  bagid by input from the user
      else if(bagid!="")
      { let fl=0;// flag variable to denote if we are able to find a bag with the bagid or not in json data.
        let cnt=0;
        bagweighingandreceivingbagsdata.forEach(function(object){
            if(object.bagid===bagid && object.consignmentid===bagweighingandreceivingconsignmentdata[0].consignmentid){
                const newbagrow={
                    id:nanoid(),
                    bagid:object.bagid,
                    expectedweight:object.expectedweight,
                    bagnextlocation:object.bagnextlocation,
                    consignmentid:object.consignmentid,
                    routename:object.routename,
                    typeofbag:object.typeofbag,
                    bagoriginlocation:object.bagoriginlocation,
                    bagdestinationlocation:object.bagdestinationlocation,
                    bagpreviouslocation:object.bagpreviouslocation,
                    countofshipments:object.countofshipments,
                  }
                  alert(`Bag Id ${object.bagid} scanned for ${object.bagnextlocation}`)
                  setrow(row=>[...row,newbagrow]);
                  setshowsubmitbtn(true);
                  setbagsinscanned(bagsinscanned+1);
                  let temp_state=[...bagweighingandreceivingbagsdata];
                  let temp_object={...temp_state[cnt]};
                  temp_object.scannedstatus=true;
                  temp_state[cnt]=temp_object
                  setbagweighingandreceivingbagsdata(temp_state);
                  fl=1;
            }
            else if(object.bagid===bagid && object.consignmentid!==bagweighingandreceivingconsignmentdata.consignmentid){
              const newbagrow={
                id:nanoid(),
                bagid:object.bagid,
                expectedweight:object.expectedweight,
                bagnextlocation:object.bagnextlocation,
                consignmentid:object.consignmentid,
                routename:object.routename,
                typeofbag:object.typeofbag,
                bagoriginlocation:object.bagoriginlocation,
                bagdestinationlocation:object.bagdestinationlocation,
                bagpreviouslocation:object.bagpreviouslocation,
                countofshipments:object.countofshipments,
              }
              alert(`Bag Id ${object.bagid} of Consignment Id ${object.consignmentid} scanned for ${object.bagnextlocation}`)
              setrow(row=>[...row,newbagrow]);
              setshowsubmitbtn(true);
              setexcessbags(excessbags+1);
              let temp_state=[...bagweighingandreceivingbagsdata];
              let temp_object={...temp_state[cnt]};
              temp_object.scannedstatus=true;
              temp_object.issuetype="Excess";
              temp_state[cnt]=temp_object
              setbagweighingandreceivingbagsdata(temp_state);
              fl=1;
            }
           cnt++; 
        })
        if(fl===0)
        {
            alert('No such Bag Id exists');
          
        }
      }
      barcodedata=""; // making barcode data as "" at end as it is a global variable and  if we want to add another row then barcode 
      // data should not have any previous barcode value
      setbagid("");// making bagid as "" at end because if we want to add another row then bag id
      // data should not have any previous value else it will duplicate the row
    }
    return(
        <div className="bagweighingandreceiving">
        <h2 className="bagweighingandreceivingmoduleheading">Bag Weighing and Receiving</h2>
            {toggle===false && <div className="BagId"><span >Bag ID</span>
        <button className="scan" onClick={scaneffect}>Scan Here</button><input type="text" className="searchhere" placeholder="Enter Bag Id" onChange={handlechange}></input> <button className="scan" onClick={appendtable}>Search Here</button></div>}
       { toggle===false && <span className="scancomponent">
                    {scanactive===true && <div style={mystle}><BarcodeScannerComponent
          width={400}
          height={400}
          onUpdate={(err, result) => {
            if (result){ 
                sa=1;// barcode scanner has successfully read the data
                barcodedata=result.text;//result.text contains scanned value
                setactive(false);// close the camera
                appendtable();  // add row to table
            }

          }}
        /></div>}
                </span>}
            { toggle===false && 
                <table className="consignmenttable" border="1" cellSpacing="0">
            <thead>
                <tr colSpan={7}>
                <th >S.No</th>
                <th>Consignment Id</th>
                <th>Count of Bags expected</th>
                <th>Count of Bags Inscanned</th>
                <th>Short Bags</th>
                <th>Excess Bags</th>
                <th>Weight Mismatch Bags</th>
                </tr>
            </thead>
            { toggle===false &&
            <tbody style={{backgroundColor:"white",color:"black"}}>
            <tr colSpan={7}>
                <td>1</td>
                <td>{bagweighingandreceivingconsignmentdata[0].consignmentid}</td>
                <td>{bagweighingandreceivingconsignmentdata[0].bagcount}</td>
                <td>{bagsinscanned
                  }</td>
                <td>{bagweighingandreceivingconsignmentdata[0].bagcount-bagsinscanned}</td>
                <td>{excessbags}</td>
                <td>{weightmismatchbags}</td>
            </tr>
            </tbody>

           }
        </table>
        }
        { toggle===false && 
        <div className="bagreceivingtablediv">
            <table className="bagtable" border="1" cellSpacing="0">
                <thead>
                    <tr colSpan={14}>
                        <th>S.No</th>
                        <th>Bag ID</th>
                        <th>Expected Weight</th>
                        <th>Actual weight</th>
                        <th>Bag Next Location</th>
                        <th>Consignment Id</th>
                        <th>Route Name</th>
                        <th>Type of Bag</th>
                        <th>Bag Origin Location</th>
                        <th>Bag Destination Location</th>
                        <th>Count of Shipments</th>
                        <th>Scan Status</th>
                        <th>Bag Status</th>
                        <th>Remarks</th>
                    </tr>
                </thead>
                <tbody style={{backgroundColor:"white",color:"black"}}>
                {row.map((r)=>( <tr colSpan={14}>
                    <td>{i++}</td>
                    <td>{r.bagid}</td>
                    <td>{r.expectedweight}</td>
                    <td><input type="number" onBlur={(e)=>actualweightinput(r,i-2,e)}></input></td>
                    <td>{r.bagnextlocation}</td>
                    <td>{r.consignmentid}</td>
                    <td>{r.routename}</td>
                    <td>{r.typeofbag}</td>
                    <td>{r.bagoriginlocation}</td>
                    <td>{r.bagdestinationlocation}</td>
                    <td>{r.countofshipments}</td>
                    <td>Success</td>
                    <td>Received</td>
                    <td><input type="text"  name="remarks"></input></td>
                </tr>))}
                </tbody>
            </table>
        </div>
       }
        {showsubmitbtn===true &&  <button className="Submitbtn" type="submit" onClick={toggleeffect}>Submit</button>}
        {toggle===true && <div><u style={{paddingLeft:"20px",fontWeight:"bold"}}>Scan Summary</u>
        <table border="1" cellSpacing="0" className="scansummarytableone">
        <thead>
                <tr colSpan={5}>
                <th>Consignment Id</th>
                <th>Count of Bags Inscanned</th>
                <th>Short Bags</th>
                <th>Excess Bags</th>
                <th>Weight Mismatch Bags</th>
                </tr>
            </thead>
          <tbody style={{backgroundColor:"white",color:"black"}} >
          <tr colSpan={5}>
                <td>{bagweighingandreceivingconsignmentdata[0].consignmentid}</td>
                <td>{bagsinscanned
                  }</td>
                <td>{bagweighingandreceivingconsignmentdata[0].bagcount-bagsinscanned}</td>
                <td>{excessbags}</td>
                <td>{weightmismatchbags}</td>
            </tr>
          </tbody>
        </table>
        <table border="1" cellSpacing="0" className="scansummarytableone">
           <thead>
                <tr colSpan={7}>
                <th>S.No</th>
                <th>Bag Id</th>
                <th>Issue Type</th>
                <th>Bag Previous Location</th>
                <th>Bag Origin Location</th>
                <th>Bag Destination Location</th>
                <th>User Remarks</th>
                </tr>
            </thead>
            <tbody style={{backgroundColor:"white",color:"black"}}>
              {
                bagweighingandreceivingbagsdata.map((bagobj)=>((bagobj.scannedstatus==false && bagobj.consignmentid===bagweighingandreceivingconsignmentdata[0].consignmentid) || (bagobj.issuetype==="Excess") || (bagobj.issuetype==="Weight Mismatch")) && (<tr colSpan={6}>
                  <td>{j++}</td>
                  <td>{bagobj.bagid}</td>
                  <td>{bagobj.issuetype}</td>
                  <td>{bagobj.bagpreviouslocation}</td>
                  <td>{bagobj.bagoriginlocation}</td>
                  <td>{bagobj.bagdestinationlocation}</td>
                  <td><input type="text"  name="remarks"></input></td>
                </tr>))
              }
            </tbody>
        </table>
       { scanmorebags===true && <div><span className="scanmorebagquestion">Do you want to scan more bags?</span><button className="scanmorebagbutton" onClick={toggleeffect}>Yes</button><button className="scanmorebagbutton" onClick={hideyesnoshowgenerateotp}>No</button></div>}
       {generateotp===true && <div className="center"><span className="drivernamelabel">Enter Driver Name</span><input type="text" name="drivername" className="otpinput" onChange={(e)=>setdrivername(e.target.value)}></input><br/><span className="drivernamelabel">Enter Driver Mobile</span><input type="tel" maxLength={10} name="drivermobile" className="otpinput" onChange={(e)=>setdrivermobile(e.target.value)}></input><br/><br/><button className="scanmorebagbutton" onClick={showsubmitotp}>Generate OTP</button></div>}
       {submitotp===true && <div className="center"><span className="drivernamelabel">Enter OTP</span><input type="number" name="otpsubmit" className="otpinput" onChange={(e)=>setsubmittedotp(e.target.value)}></input><br/><br/><button className="scanmorebagbutton" onClick={otpsubmit}>Submit OTP</button><br/><br/><button className="scanmorebagbutton">Generate & Print POD</button></div>}
        </div>}
        </div>
        
        
    )
}
export default BagWeighingandReceiving