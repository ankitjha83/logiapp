import React from 'react'

function Logo(props) {
    const styles = {
        height:"80px",
        width:"200px",
        marginLeft:"20px",
        background:"#0b377d",
        color:"#fff",
        position:"relative",
        bottom:"120px",
        right:"-37%"
    }
    return (
        <img src={props.url} style={styles} alt="logo" />
    )
}

export default Logo
