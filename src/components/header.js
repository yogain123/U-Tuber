import React from "react";

export default function header() {
  return (
    <nav
      style={{
        marginTop: "20px",
        backgroundColor: "rgba(43,187,173,1.5)"
      }}
      className="navbar navbar-expand-lg navbar-light bg-light"
    >
      <div className="container">
        <a
          className="navbar-brand"
          href="#"
          style={{
            marginTop: "10px",
            textShadow: "1px 2px 2px #1C6EA4",
            fontSize: "35px"
          }}
        >
          U-Tuber
        </a>
        <a href="https://github.com/yogain123/U-Tuber" target="_blank"><i className="fa fa-github" style={{fontSize:36,float:"right",marginTop:10,color:"black"}}></i></a>
        
      </div>
    </nav>
  );
}
