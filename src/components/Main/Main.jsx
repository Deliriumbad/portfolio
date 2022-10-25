import React from "react";
import s from './Main.module.scss';
import sContainer from '../../common/styles/Container.module.css';

export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={`${sContainer.container} ${s.mainContainer}`}>
                <div>
                    <div className={s.mainBlockPrintedText}>
                        <h1 className={s.title}>I am Vitali Valadzko</h1>
                    </div>
                    <div className={s.text}>
                        <h3>A frontend developer</h3>
                    </div>
                </div>
                <div className={s.mainBlockPhoto}>

                </div>
            </div>
        </div>
    );
}