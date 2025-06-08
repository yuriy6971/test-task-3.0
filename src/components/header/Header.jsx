import React from "react";
import s from "./Header.module.css";
import { useDispatch } from "react-redux";
import Butt_Users from "../../assets/buttons/Butt_Users";
import Butt_Sign from "../../assets/buttons/Butt_Sign"
import Logo from "../../assets/images/Logo.svg";
import { Link } from "react-router-dom";
import { setIsProfileActionCreator } from "../../redux/login_reducer";

const Header = () => {

   const dispatch = useDispatch() 

  return (
    <div className={s.head_container} >
     <div className={s.head_block} >

        <div className={s.head_logo} >
         <Link to = "" >
        <img  src={Logo} alt="Logo" />
         </Link>
        </div>

        <div className={s.head_buttons} >
          <Butt_Users />
          <Butt_Sign  />
        </div>

     </div>
    </div>
  );
};

export default Header;
