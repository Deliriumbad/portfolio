import React from 'react';
import s from './Footer.module.scss';
import sContainer from '../../common/styles/Container.module.css';
import {Title} from '../../common/components/Title';

export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${sContainer.container} ${s.footerContainer}`}>
                <Title text = {'Vitali Valadzko'}/>
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