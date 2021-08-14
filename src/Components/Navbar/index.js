import React,{useState,useRef} from 'react'
import {Link} from 'react-router-dom'

import './styles.css';

function Navbar() {
    const inputRef = useRef(null);
    const handleClick = (e) =>{
        inputRef.current.children[0].firstChild.classList.remove("highlist");
        inputRef.current.children[1].firstChild.classList.remove("highlist");
        inputRef.current.children[2].firstChild.classList.remove("highlist");
        inputRef.current.children[3].firstChild.classList.remove("highlist");
        inputRef.current.children[4].firstChild.classList.remove("highlist");
        inputRef.current.children[5].firstChild.classList.remove("highlist");
        e.target.classList.add("highlist");
    }

    return (
        <nav className="navbar" ref={inputRef} >
            <li className="items" onClick={(e)=> handleClick(e)}>
                <Link className="link" to="/warehouse">Warehouse</Link>
            </li>
            <li className="items" onClick={(e)=> handleClick(e)}>
                <Link className="link" to="/pickup">Pickup</Link>
            </li>
            <li className="items" onClick={(e)=> handleClick(e)}>
                <Link className="link" to="/hubsystem">HubSystem</Link>
            </li>
            <li className="items" onClick={(e)=> handleClick(e)}>
                <Link className="link" to="/transport">Transport</Link>
            </li>
            <li className="items" onClick={(e)=> handleClick(e)}>
                <Link className="link" to="/delivery">Delivery</Link>
            </li>
            <li className="items" onClick={(e)=> handleClick(e)}>
                <Link className="link" to="/admin">Admin</Link>
            </li>
        </nav>
    )
}

export default Navbar
