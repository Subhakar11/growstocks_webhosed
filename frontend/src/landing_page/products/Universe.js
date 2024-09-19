import React from "react";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
function Universe() {
  const [cookies, removeCookie] = useCookies(["token"]);
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png" />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img style={{width: 130}} src="media/images/streakLogo.png" />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img style={{width: 130}}src="media/images/sensibullLogo.svg" />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img  style={{width: 130}}src="media/images/zerodhaFundhouse.png" />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/goldenpiLogo.png" />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img  style={{width: 100}}src="media/images/dittoLogo.png" />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        {!cookies.token && (
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
        <Link to="/signup" style={{color: "white" ,textDecoration:"none"}}>Signup Now</Link>  
        </button>
        )}
      </div>
    </div>
  );
}

export default Universe;
