import React from 'react';
import {NotesType} from "bll/reducers/noteReducer";
import DeleteBox from "assets/image/DeleteBox";
import {useDispatch} from "react-redux";
import {deleteNoteAction} from "bll/actions/noteActions";
import s from "../styles/note.module.css"

type NoteType = {
    note: NotesType
    edit:(title:string,text:string,id:string)=>void
}
export const Note = ({note,edit}: NoteType) => {
const  dispatch= useDispatch()
const deleteNoteHandler=()=>{
    dispatch(deleteNoteAction(note.id))
}
    return (
        <div className={s.noteCard}>
            <div onClick={()=>edit(note.title,note.text,note.id)}>
                <h2>{note.title}</h2>
                <p className={s.text}>{note.text}</p>

            </div>
            <div>
                <DeleteBox onClick={deleteNoteHandler}/>
            </div>


        </div>
    );
};

