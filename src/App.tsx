import React from 'react';
import './App.css';
import {Notes} from "../src/ui/components/Notes";
import s from "../src/ui/styles/mainBlock.module.css"

import {MenuItem} from "ui/components/menuItem/menuItem";
import {Footer} from "ui/components/footer/footer";

function App() {

    return (
        <div className={s.mainBlock}>
            <MenuItem/>
            <Notes/>

            <Footer/>


        </div>
    );
}

export default App;
