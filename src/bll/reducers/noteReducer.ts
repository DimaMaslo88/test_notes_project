import {v1} from "uuid";
import {NotesActionStateType} from "bll/actions/noteActions";


const initialState: InitialStateType = {
    note: [],
    params:{
        title:''
    }

}
type InitialStateType = {
    note: NotesType[]
params:{
        title:string
}
}
export type NotesType = {
    id: string,
    title: string,
    text: string
}

export const noteReducer = (state: InitialStateType = initialState, action: NotesActionStateType): InitialStateType => {
    switch (action.type) {
        case "ADD-NOTE": {
            const newNote: NotesType = {
                id: v1(),
                title: action.payload.title,
                text: action.payload.text
            }
            return {...state, note: [ newNote,...state.note]}
        }
        case "EDIT-NOTE":{
            return {...state,note:state.note.map(m=>m.id === action.payload.id
                    ?{...m,title:action.payload.title,text:action.payload.text}:m)}
        }
        case "DELETE-NOTE":{
            return {...state,note: state.note.filter(n=>n.id!==action.payload.id)}
        }
        case "SEARCH-TITLE":{
            return{...state,note:state.note.filter(n=>n.title === action.payload.title)}
        }


        default:
            return state;
    }

}
