import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';
import OpenAccount from '../OpenAccount';

function HomePage() {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/");
        return;
      }
      try {
        const { data } = await axios.post(
          "https://growstocks.onrender.com/", // Adjust if necessary
          {},
          { withCredentials: true }
        );
        const { status, user } = data;
        if (status) {
          setUsername(user);
          toast(`Hello ${user}`, { position: "top-right" });
        } else {
          removeCookie("token");
          navigate("/login");
        }
      } catch (error) {
        console.log("Error verifying cookie:", error);
        removeCookie("token");
        navigate("/login");
      }
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);

 

  return (
    <>
      <Hero />
      <Awards />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
      <ToastContainer />
    </>
  );
}

export default HomePage;
