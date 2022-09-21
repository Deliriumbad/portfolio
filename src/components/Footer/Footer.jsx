import React from 'react';
import s from './Footer.module.css';
import sContainer from '../../common/styles/Container.module.css';

export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${sContainer.container} ${s.footerContainer}`}>
                <h4>Vitali Valadzko</h4>
                <div className={s.items}>
                    <div className={s.icon}></div>
                    <div className={s.icon}></div>
                    <div className={s.icon}></div>
                    <div className={s.icon}></div>
                </div>
            </div>
        </div>
    );
};