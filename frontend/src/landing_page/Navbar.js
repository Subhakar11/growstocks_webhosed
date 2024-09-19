// import React from "react";
// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <nav
//       class="navbar navbar-expand-lg border-bottom"
//       style={{ backgroundColor: "#FFF" }}
//     >
//       <div class="container p-2">
//         <Link class="navbar-brand" to="/">
//           <img
//             src="media/images/logo.svg"
//             style={{ width: "25%" }}
//             alt="Logo"
//           />
//         </Link>
//         <button
//           class="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span class="navbar-toggler-icon"></span>
//         </button>
//         <div class="collapse navbar-collapse" id="navbarSupportedContent">
//           <form class="d-flex" role="search">
//             <ul class="navbar-nav mb-lg-0">
//               <li class="nav-item">
//                 <Link class="nav-link active" aria-current="page" to="/Signup">
//                   Signup
//                 </Link>
                
//               </li>
//               <li class="nav-item">
//                 <Link class="nav-link active" aria-current="page" to="/login">
//                   Login
//                 </Link>
                
//               </li>
//               <li class="nav-item">
//                 <Link class="nav-link active" to="/About">
//                   About
//                 </Link>
//               </li>
//               <li class="nav-item">
//                 <Link class="nav-link active" to="/Product">
//                   Product
//                 </Link>
//               </li>
//               <li class="nav-item">
//                 <Link class="nav-link active" to="/Pricing">
//                   Pricing
//                 </Link>
//               </li>
//               <li class="nav-item">
//                 <Link class="nav-link active" to="/Support">
//                   Support
//                 </Link>
//               </li>
//             </ul>
//           </form>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;



import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

function Navbar() {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies(["token"]);

  // Function to handle logout
  const handleLogout = () => {
    removeCookie("token");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg border-bottom" style={{ backgroundColor: "#FFF" }}>
      <div className="container p-2">
        <Link className="navbar-brand" to="/">
          <img src="media/images/logo.svg" style={{ width: "25%" }} alt="Logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex" role="search">
            <ul className="navbar-nav mb-lg-0">
              {/* Conditionally show Signup and Login if no token */}
              {cookies.token && (
                <li className="nav-item">
                 <a
  aria-current="page"
  className="nav-link active"
  style={{ textDecoration: "none" }}
  href={`${process.env.REACT_APP_API_URL}/dashboard`}
>
  <b>Dashboard</b>
</a>  
                 
                </li>
              )}
              {!cookies.token && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/Signup">
                    <b>Signup</b>  
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/login">
                      <b>Login</b>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/login">
                      <b>Dashboard</b>
                    </Link>
                  </li>
                </>
              )}

              {/* Always visible */}
              <li className="nav-item">
                <Link className="nav-link active" to="/About">
                 <b>About</b> 
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/Product">
                 <b>Product</b> 
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/Pricing">
                 <b>Pricing</b> 
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/Support">
                 <b>Support</b> 
                </Link>
              </li>

              {/* Conditionally show Logout if token exists */}
              {cookies.token && (
                <li className="nav-item">
                  <button className="nav-link btn btn-link" onClick={handleLogout}>
                  <b>Logout</b>  
                  </button>
                </li>
              )}
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
