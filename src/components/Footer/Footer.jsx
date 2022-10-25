import React from 'react';
import s from './Footer.module.scss';
import sContainer from '../../common/styles/Container.module.css';
import {Title} from '../../common/components/Title';
import {FaInstagram, FaTelegram, FaLinkedin, FaTwitter} from 'react-icons/fa'

export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${sContainer.container} ${s.footerContainer}`}>
                <div className={s.socialMediaIcons}>
                    <a className={s.link} href="#">
                        <FaInstagram className={s.icon}/>
                    </a>
                    <a className={s.link} href="">
                        <FaLinkedin className={s.icon}/>
                    </a>
                    <a className={s.link} href="">
                        <FaTelegram className={s.icon}/>
                    </a>
                    <a className={s.link} href="">
                        <FaTwitter className={s.icon}/>
                    </a>
                </div>
            </div>
        </div>
    );
};