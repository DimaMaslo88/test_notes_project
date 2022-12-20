import {AppStateType} from "../../../bll/store";
import {NotesType} from "../../../bll/reducers/noteReducer";

export const selectNotes=(state:AppStateType):NotesType[] => state.notes.note
export const selectTitle=(state:AppStateType):string => state.notes.params.title


