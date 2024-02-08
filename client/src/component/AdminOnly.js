import React from "react";

const AdminOnly = (props) => {
  return (
    <div className="container-item attention" style={{ borderColor: "tomato" }}>
      <center>
        <div style={{ margin: "17px" }}>
          <h1>{props.page}</h1>
        </div>
        <p>Restricted access</p>
      </center>
    </div>
  );
};

export default AdminOnly;
