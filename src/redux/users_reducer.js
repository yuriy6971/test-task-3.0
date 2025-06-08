
import { usersApi } from "../api/api"


const SET_USERS = "SET_USERS"
 const SET_TOTAL_USERS = 'SET_TOTAL_USERS'
const ADD_USERS = 'ADD_USERS'
const SET_FETCHING = "SET-FETCHING"
const SET_DISABLED = "SET_DISABLED"

const initialState = {
    users : [],
    count : 6,
    page : 0,
    total_users : 0,
    isFetching : false,
    isDisabled : false,
    count_page : null
}

const user_Reducer = (state = initialState, action) => {
    switch(action.type){

        case SET_USERS :
          return {
            ...state,
            users : action.users,
            total_users : action.total_users,
            page : 1
          }

          case SET_TOTAL_USERS : 
            return {
              ...state,
              total_users : action.total_users,
              count_page : Math.ceil(action.total_users / state.count)
            }
          

          case ADD_USERS : 
          return {
            ...state,
            users : [ ...action.users, ...state.users].reduce((acc, item) => {
                if(!acc.find(elem => elem.name == item.name)){
                  acc.push(item)
                }
                return acc
            }, []),
            //  total_users : action.total_users,
            page : state.page + 1
          }

          case SET_FETCHING : {
            return {
              ...state,
              isFetching : action.isFetching
            }
          }

          case SET_DISABLED : 
          return {
            ...state,
            isDisabled : action.isDisabled
          }

        default : return state
    }
}



const setUsersActionCreator = ( users, total_users) => {
  return {
    type : SET_USERS,
    users,
    total_users
  }
}

const setTotalUsersActionCreator = (total_users) => {
  return {
    type : SET_TOTAL_USERS,
    total_users
  }
}

const addUsersActionCreator = (users) => {
  return {
    type : ADD_USERS,
    users
  }
}

export const setFetchingActionCreator = (boolFetch) => {
  return {
    type : SET_FETCHING,
    isFetching : boolFetch

  }
}

export const setDisabledActionCreator = (bool) => {
  return {
    type : SET_DISABLED,
    isDisabled : bool
  }
}

export const getUsersThunkCreator = () => {
    return (dispatch) => {
      dispatch(setFetchingActionCreator(true))
      usersApi.getUsers()
      .then(response => {
        let { total_users, users } = response.data
        dispatch(setTotalUsersActionCreator(total_users))
        dispatch(setUsersActionCreator( users))
        dispatch(setFetchingActionCreator(false))
      })
    }
}

export const addUsersThunkCreator = (page, count) => {
  return (dispatch) => {
    dispatch(setFetchingActionCreator(true))
    usersApi.addUsers(page, count)
    .then(response => {
      let { users } = response.data
      dispatch(addUsersActionCreator( users))
      dispatch(setFetchingActionCreator(false))
    })
  }
}

export default user_Reducer