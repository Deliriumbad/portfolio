import React from "react";
import s from './Main.module.css';
import sContainer from '../../common/styles/Container.module.css';

export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={`${sContainer.container} ${s.mainContainer}`}>
                <div className={s.mainBlockText}>
                    <span>Hi There!</span>
                    <h1>I am Vitali Valadzko</h1>
                    <p>A frontend developer</p>
                </div>
                <div className={s.mainBlockPhoto}>

                </div>
            </div>
        </div>
    );
}