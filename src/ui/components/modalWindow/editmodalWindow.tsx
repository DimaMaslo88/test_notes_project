import React, {ChangeEvent} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addNoteAction, changeNoteAction} from "bll/actions/noteActions";
import {Button} from "ui/universalcomponents/Button";
import {ModalWindowType} from "ui/components/modalWindow/addmodalWindow";
import s from "ui/styles/addmodalWindow.module.css";


export const EditModalWindow = ({title, text, onDiscard, onTitleChange, onTextChange, modalId}: ModalWindowType) => {
    const dispatch = useDispatch()


    const editNoteHandler = () => {
        dispatch(changeNoteAction(title, text, modalId))
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
                    <Button title={'Cancel'} callback={() => onDiscard && onDiscard()}/>
                    <Button title={'Save'} callback={editNoteHandler}/>
                </div>
            </div>


        </div>
    );
};


