import React from 'react';
import s from './Footer.module.scss';
import sContainer from '../../common/styles/Container.module.css';
import {Title} from '../../common/components/Title';
import linkedinImage from '../../assets/image/linkedin.png';
import telegramImage from '../../assets/image/telegram.png';
import mailImage from '../../assets/image/mail.png';
import viberImage from '../../assets/image/viber.png';

export const Footer = () => {

    const linkedin = {
        backgroundImage: `url(${linkedinImage})`
    }

    const telegram = {
        backgroundImage: `url(${telegramImage})`
    }

    const mail = {
        backgroundImage: `url(${mailImage})`
    }

    const viber = {
        backgroundImage: `url(${viberImage})`
    }

    return (
        <div className={s.footerBlock}>
            <div className={`${sContainer.container} ${s.footerContainer}`}>
                {/*<Title text={'Vitali Valadzko'}/>*/}
                <div className={s.items}>
                    <a className={s.link} href="#">
                        <div className={s.icon} style={linkedin}></div>
                    </a>
                    <a className={s.link}  href="">
                        <div className={s.icon} style={telegram}></div>
                    </a>
                    <a className={s.link}  href="">
                        <div className={s.icon} style={mail}></div>
                    </a>
                    <a className={s.link}  href="">
                        <div className={s.icon} style={viber}></div>
                    </a>
                </div>
            </div>
        </div>
    );
};