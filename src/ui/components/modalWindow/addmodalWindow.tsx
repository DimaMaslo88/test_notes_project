import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {Button} from "ui/universalcomponents/Button";
import {useDispatch} from "react-redux";
import {addNoteAction} from "bll/actions/noteActions";
import s from '../../styles/addmodalWindow.module.css'

export type ModalWindowType = {
    title: string
    text: string
    onDiscard?: () => void
    onTitleChange: (e: ChangeEvent<HTMLInputElement>) => void
    onTextChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
    modalId: string
}
export const AddModalWindow = ({title, text, onDiscard, onTitleChange, onTextChange}: ModalWindowType) => {
    const dispatch = useDispatch()

    const addNoteHandler = () => {
        dispatch(addNoteAction(title, text))
        onDiscard && onDiscard()

    }

    return (
        <div className={s.modal}>
            <div className={s.modalBlock}>
                <input className={s.inputStyle}
                       value={title}
                       onChange={onTitleChange}
                />
                <textarea className={s.textAreaStyle}
                          value={text}
                          onChange={onTextChange}
                />
                <div className={s.ButtonBox}>
                    <Button title={'Cancel'} red = {true} callback={() => onDiscard && onDiscard()}/>
                    <Button title={'Save'} callback={addNoteHandler}/>

                </div>

            </div>

        </div>
    );
};


