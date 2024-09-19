import React from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
function OpenAccount() {
  const [cookies, removeCookie] = useCookies(["token"]);

  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">

      {!cookies.token && (
        <>
        <h1 className="mt-5">Open a Zerodha account</h1>
        <p>
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
        <Link to="/signup" style={{color: "white" ,textDecoration:"none"}}>Sign up Now</Link>  
        </button>
         </>
         )}
        
      </div>
    </div>
  );
}

export default OpenAccount;
