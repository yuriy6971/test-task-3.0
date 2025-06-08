import React from 'react'
import s from "./Buttons.module.css"
import { NavLink } from 'react-router-dom'

const Butt_Sign = () => {

    return(
        <>
         <NavLink to="/login"> 
        <button type='button' className={s.butt}  >Sign up</button>
        </NavLink>
        </>
    )
}
export default Butt_Sign