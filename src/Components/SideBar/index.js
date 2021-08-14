import React,{useState} from 'react'
import {FaCaretDown} from 'react-icons/fa'
import {Link,useHistory} from 'react-router-dom'

import './styles.css'

function SideBar(props) {
    const history = useHistory();
    const [display,setDisplay] = useState({display:"none"});
    const [bg, setBg] = useState({background:"#0e489e"});

    const handleClick = (e) =>{
        history.push(e);
    }

    return (
        <div className="outer-div">
        <div className="inner-div">
            <div className="title" style={bg}>
                {props.title}
                <button className="drop-btn" onClick={()=>{return setDisplay({display:"block"}),setBg({background:"#1670f7"})}}><FaCaretDown/></button>
            </div>
            <div className="submenu-div" style={display}>
                {props.subMenu.map((item,index) => 
                    <p key={index} className="submenuLink" onClick={()=> handleClick(item.url)}> {item.name} </p>
                )}
            </div>
            <div className="close" style={display}>
                Collapse
                <button className="close-btn" onClick={()=>{return setDisplay({display:"none"}),setBg({background:"#0e489e"})}}>...</button>
            </div>
            </div>
        </div>
    )
}

export default SideBar
