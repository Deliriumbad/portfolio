import React, {useState, useEffect} from "react";
import s from './Nav.module.scss';

export const Nav = () => {
    return (
        <div className={s.nav}>
            <a href="">Main</a>
            <a href="">Skills</a>
            <a href="">Portfolio</a>
            <a href="">Contacts</a>
        </div>
    );
}