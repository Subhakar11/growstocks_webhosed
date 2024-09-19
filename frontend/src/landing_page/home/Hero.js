import React from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
function Hero() {
  const [cookies, removeCookie] = useCookies(["token"]);
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img
          src="media/images/homeHero.png"
          alt="Hero Image"
          className="mb-5"
        />
        <h1 className="mt-5">Invest in everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, and
          more
        </p>
        {!cookies.token && (
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
        <Link to="/signup" style={{color: "white" ,textDecoration:"none"}}>Sign up Now</Link> 
        </button>
        )}
      </div>
    </div>
  );
}

export default Hero;