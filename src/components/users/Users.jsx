import React, { useState, useEffect } from "react";
import s from "./Users.module.css"
import {  useSelector, useDispatch } from 'react-redux'
import { getUsersThunkCreator } from "../../redux/users_reducer";
import { setIsProfileActionCreator } from "../../redux/login_reducer";
import UserItem from "./UserItem";
import Preloader from "../common/Preloader";


const Users = () => {

    const { users, isFetching } = useSelector(state => state.users)

    const dispatch = useDispatch()

    useEffect(() => {
        { !users.length && dispatch(getUsersThunkCreator()) }
        dispatch(setIsProfileActionCreator(false))
    }, [])

    if(isFetching) {
        return (
            <Preloader />
        )
    }


    return (
        <div className={s.block_card_users} >
            
            {
            //    users.sort((a, b) => a.registration_timestamp < b.registration_timestamp ? 1 : -1)
             users.map((item) => (
                <UserItem 
                key = {item.id}
                name = {item.name}
                email = {item.email}
                photo = {item.photo}
                position = {item.position}
                phone = {item.phone}
                
                />
              ))
            }
    
        </div>
    )
}

export default Users