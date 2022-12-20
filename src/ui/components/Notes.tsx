import React, {ChangeEvent, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectNotes} from "../../../src/ui/components/selectors/selectors";
import {Note} from "ui/components/Note";
import {changeNoteAction} from "bll/actions/noteActions";
import {EditModalWindow} from "ui/components/modalWindow/editmodalWindow";
import s from "../styles/notes.module.css"

export const Notes = () => {
    const dispatch = useDispatch()
    const notes = useSelector(selectNotes)
    // const [open, setOpen] = useState<boolean>(false)
    const [openEditModal, setOpenEditModal] = useState<boolean>(false)
    const [titleModal, setTitleModal] = useState<string>('')
    const [textModal, setTextModal] = useState<string>('')
    const [modalId, setModalId] = useState<string>('')
    // const setModalWindow = () => {
    //     setOpen(true)
    // }
    // const onDiscardHandler = () => {
    //     setOpen(false)
    // }
    const onDiscardHandlerEditModal = () => {
        setOpenEditModal(false)
        setTextModal('')
        setTitleModal('')
    }
    const onTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitleModal(e.currentTarget.value)

    }
    const onTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setTextModal(e.currentTarget.value)
    }
    const editNoteChangeHandler = (title: string, text: string, id: string) => {
            dispatch(changeNoteAction(title, text, id))
        setModalId(id)
        setOpenEditModal(true)
        setTitleModal(title)
        setTextModal(text)



    }

    return (
        <div className={s.notesBlock}>


            {/*{open && <AddModalWindow title={titleModal}*/}
            {/*                         text={textModal}*/}
            {/*                         onDiscard={onDiscardHandler}*/}
            {/*                         onTitleChange={onTitleChangeHandler}*/}
            {/*                         onTextChange={onTextChangeHandler}*/}
            {/*                         modalId={modalId}*/}


            {/*/>}*/}
            {openEditModal && <EditModalWindow title={titleModal}
                                     text={textModal}
                                     onDiscard={onDiscardHandlerEditModal}
                                     onTitleChange={onTitleChangeHandler}
                                     onTextChange={onTextChangeHandler}
                                     modalId={modalId}


            />}
            <div >

            </div>
            {notes.map(n => <Note key={n.id}
                                  note={n}
                                  edit={editNoteChangeHandler}

            />)}
        </div>
    );
};


