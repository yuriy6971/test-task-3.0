import { LoginAPI } from "../api/api";
import { setFetchingActionCreator,getUsersThunkCreator } from "./users_reducer";

const SET_POSITIONS = "SET_POSITIONS";
const SET_TOKEN = "SET_TOKEN"
const SET_IS_PROFILE = "SET_IS_PROFILE"

const initialState = {
  positions: [],
  token: "",
  toggleProfile: false,
};

const login_Reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POSITIONS: {
      return {
        ...state,
        positions: action.positions,
      };
    }

    case SET_TOKEN : 
    return {
        ...state,
        token : action.token
    }

    case SET_IS_PROFILE : {
      return {
        ...state,
        toggleProfile : action.toggleProfile
      }
    }

    default:
      return state;
  }
};

const setPositionsActionCreator = (server_positions) => {
  return {
    type: SET_POSITIONS,
    positions: server_positions,
  };
};

const setTokenActionCreator = (token) => {
    return {
        type : SET_TOKEN,
        token
    }
}

 export const setIsProfileActionCreator = (success) => {
  return {
    type : SET_IS_PROFILE,
    toggleProfile : success
  }
}

export const getPositionsThunkCreator = () => {
  return (dispatch) => {
    LoginAPI.getPositions().then((response) => {
      dispatch(setPositionsActionCreator(response.data.positions));
    });
  };
};

export const getTokenThunkCreator = () => {
    return dispatch => {
        LoginAPI.getToken()
        .then(response => {
            dispatch(setTokenActionCreator(response.data.token))
        })
    }
}

export const postUserThunkCreator = (formData, token) => {
  return (dispatch) => {
    dispatch(setFetchingActionCreator(true))

    LoginAPI.postUser(formData, token)
    .then(response => {
        if(response.data.success){
          dispatch(getUsersThunkCreator())
          dispatch(setIsProfileActionCreator(response.data.success))
          dispatch(setFetchingActionCreator(false))
        }
        else {
          alert (response.data.message)
        }
    })
  }
}

export default login_Reducer;
