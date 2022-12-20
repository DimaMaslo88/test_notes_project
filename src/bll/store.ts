import {combineReducers, legacy_createStore as createStore} from "redux";
import {noteReducer} from "../bll/reducers/noteReducer";


const rootReducer=combineReducers({
    notes:noteReducer,
})
export const store=createStore(rootReducer)
export type AppStateType = ReturnType<typeof rootReducer>

//@ts-ignore
window.store=store
