import React from 'react';
import './App.css';
import {Notes} from "../src/ui/components/Notes";
import s from "../src/ui/styles/mainBlock.module.css"

import {MenuItem} from "ui/components/menuItem/menuItem";

function App() {

    return (
        <div className={s.mainBlock}>
            <MenuItem/>
            <Notes/>


        </div>
    );
}

export default App;
