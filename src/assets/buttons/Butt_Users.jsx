import React from 'react'
import s from "./Buttons.module.css"
import cn from 'classnames'
import { NavLink } from 'react-router-dom'

const Butt_Users = (props) => {

    return(
        <>
      <NavLink to="/users"> 
        <button type='button' className={cn(
            s.butt
        )} >Users</button>
       </NavLink>
        </>
    ) 
}
export default Butt_Users