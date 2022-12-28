import { useState } from 'react';
import logo from "./img/logo.png";
import {ReactComponent as Signup} from './img/signup.svg';
import { FaBars, FaTimes } from "react-icons/fa";

function App() {

  const [showSidebar, setSidebar] = useState(false);

  const handleClick = () => {
    setSidebar(!showSidebar);
  };

  return (
    <div className="">
        <div className=" h-24 px-12 py-10 flex flex-row items-center justify-between w-auto child:font-sans shadow-md sm:flex sm:justify-items-stretch sm:h-12">
          <span className="flex gap-2 ml-2 flex-row">
            <button className=" lg:hidden pt-1.5 flex self-center bg-white h-6 w-6" onClick={handleClick}>
              {showSidebar ? <FaTimes /> : <FaBars />}
            </button>
            <span className="sm:flex sm:justify-self-end ">
              <a href="#">
                <img className="w-44 h-14  sm:h-12" src={logo} alt="logo" />
              </a>
            </span>
          </span>
          <div className={showSidebar ? "lg:hidden sidebar-links relative first:h-full first:w-full child:flex child:flex-col child:h-full" : "sm:hidden"}>
            <ul className="flex flex-row items-center list-none child:min-h-11 child-hover:bg-1 child:font-semibold child:text-lg child:p-3 child:flex child:items-center child:w-max child:h-11">
              <li className=" top">
                <a  href="#">
                  <span>Paytm for Consumer</span>
                </a>
              </li>
              <li className="top">
                <a href="#">Paytm for Business</a>
              </li>
              <li className="bottom">
                <a href="#">Investor Relations</a>
              </li>
              <li className="bottom">
                <a href="#">Company</a>
              </li>
              <li className="bottom">
                <a href="#">Career</a>
              </li>
            </ul>
          </div>
          <button className={showSidebar ? "sm:hidden" : "max-h-12 max-w-28  bg-2 rounded-full flex justify-between pl-4 sm:justify-between hover:bg-3 hover:last:bg-2 "}>
            <span className=" text-base text-1 font-semibold self-center mr-1 ">Sign In</span>
            {/* <span className="h-9 w-9 rounded-full bg-3 flex self-center">
              <Signup/>
            </span> */}
            <div><Signup/></div>
          </button>
      </div>
  </div>
    
  
  );
}

export default App;
