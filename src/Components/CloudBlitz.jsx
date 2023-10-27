import React from 'react';


const mystyle = {
  padding: "10px",
  fontFamily: "Arial",
  position:"relative",
  height:"80vh",
  width:"80vw",
  margin:"22px auto 22px auto",
  color:"brown",
  fontWeight:"900",
  textShadow:"2px 2px 5px green"
};

const greetStyle = {
  position:"absolute",
  top:"23%",
  left:"30%",
  fontSize:"90px"
}

const logoStyle = {
  position :"absolute",
  top:"37%",
  left:"17%",
  fontSize:"90px"
}


const CloudBlitz = () => {
  return (
    <div style={mystyle}>
        <h1 style={greetStyle}>Welcome To</h1>
        <h1 style={logoStyle}>CloudBlitz Technology</h1>
    </div>
  )
}

export default CloudBlitz;
