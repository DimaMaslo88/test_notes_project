import React, {ChangeEvent, useState} from 'react';
import {AddModalWindow} from "ui/components/modalWindow/addmodalWindow";
import AddIcon from "assets/image/AddIcon";
import s from "../../styles/icons.module.css"
import {SearchWindow} from "ui/components/menuItem/searchWindow";
import style from "../../styles/menuItem.module.css"
export const MenuItem = () => {
    const [open, setOpen] = useState<boolean>(false)
    const [newTitleModal, setNewTitleModal] = useState<string>('')
    const [newTextModal, setNewTextModal] = useState<string>('')
    const onTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitleModal(e.currentTarget.value)

    }
    const onTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setNewTextModal(e.currentTarget.value)
    }
    const setModalWindow = () => {
        setOpen(true)
    }
    const onDiscardHandler = () => {
        setOpen(false)
        setNewTextModal('')
        setNewTitleModal('')
    }
    return (
        <div >
<div className={style.menuItem}>
            <AddIcon className={s.iconStyle}
                     color={'white'}

                     onClick={setModalWindow}/>
            <SearchWindow/>
</div>
            {open && <AddModalWindow title={newTitleModal}
                                     text={newTextModal}
                                     onDiscard={onDiscardHandler}
                                     onTitleChange={onTitleChangeHandler}
                                     onTextChange={onTextChangeHandler}
                                     modalId={""}


            />}
        </div>
    );
};

