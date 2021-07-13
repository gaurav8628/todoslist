import React from 'react'
// import './footer.css'  write this if we want to include css from other css file

export const Footer = () => {
    var style = {
        backgroundColor: "black",
        color:"white",
        borderTop: "1px solid #E7E7E7",
        textAlign: "center",
        padding: "20px",
        position: "fixed",
        left: "0",
        bottom: "0",
        height: "60px",
        width: "100%",
    }
    
    var phantom = {
      display: 'block',
      padding: '20px',
      height: '60px',
      width: '100%',
    }
    return (
        <div>
        <div style={phantom} />
        <div style={style}>
        Copyright &copy; MyTodosList.com
        </div>
    </div>

       
    )
}
