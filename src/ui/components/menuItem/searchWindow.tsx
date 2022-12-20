import React, {ChangeEvent, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {searchNoteTitleAction} from "bll/actions/noteActions";
import {selectTitle} from "ui/components/selectors/selectors";


export const SearchWindow = () => {
const dispatch = useDispatch()

   const  onChangeHandler=(e:ChangeEvent<HTMLInputElement>)=>{
dispatch(searchNoteTitleAction(e.currentTarget.value))
       console.log(e.currentTarget.value)
    }
    return (
        <div>
            <input
                placeholder={'Поиск заметки'}

                onChange={onChangeHandler}
            />
        </div>
    );
};

