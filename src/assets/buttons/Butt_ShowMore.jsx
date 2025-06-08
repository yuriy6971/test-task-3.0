
import React, { useEffect } from 'react'
import s from "./Buttons.module.css"
import cn from "classnames"
import { useDispatch, useSelector } from 'react-redux'
import { addUsersThunkCreator, setDisabledActionCreator} from '../../redux/users_reducer'

const Butt_ShowMore = (props) => {


    const { page, count, isDisabled, users, total_users, count_page } = useSelector(state => state.users)

    const dispatch = useDispatch()

     
    useEffect(() => {

        if(page == count_page){
            dispatch(setDisabledActionCreator(true))
        }

    }, [users, total_users])

    return(
        <div className={s.show_more_container}>
        <button type='button' disabled = {isDisabled} className={cn(s.butt, isDisabled && s.butt_disabled)} 
        onClick={() => dispatch(addUsersThunkCreator(page, count)) } >Show more</button>
        </div>
    )
}
export default Butt_ShowMore