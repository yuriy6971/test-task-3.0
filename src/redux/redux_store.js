import { createStore, combineReducers, applyMiddleware } from "redux"
import { composeWithDevTools } from "@redux-devtools/extension"
import { thunk } from "redux-thunk"
import user_Reducer from "./users_reducer"
import login_Reducer from "./login_reducer"


const reducers = combineReducers({
    users : user_Reducer,
    login : login_Reducer
})

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

export default store