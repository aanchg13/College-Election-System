import React from "react";


const StartEnd = (props) => {
  const btn = {
    display: "block",
    padding: "0px 21px",
    margin: "auto",
    minWidth: "max-content",
    textAlign: "center",
    width: "333px",
    alignSelf: "center"
  };
  return (
    <div
      className="container-main"
      style={{ marginTop: "0px" ,width:'70%'}}
    >
      {!props.elStarted ? (
        <>
          {!props.elEnded ? (
            <>
              
                <button type="submit" style={btn}>
                  Start Election {props.elEnded ? "Again" : null}
                </button>
            </>
          ) : (
            <div className="container-item">
              <center>
                <p>Re-deploy the contract to start the election again.</p>
              </center>
            </div>
          )}
          {props.elEnded ? (
            <div className="container-item">
              <center>
                <p>The election has ended.</p>
              </center>
            </div>
          ) : null}
        </>
      ) : (
        <>
          <div className="container-item">
            <center>
              <p>The election has started.</p>
            </center>
          </div>
          <div className="container-item">
            <button
              type="button"
              // onClick={this.endElection}
              onClick={props.endElFn}
              style={btn}
            >
              End
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default StartEnd;
