import React from 'react';
import s from './Contacts.module.scss';
import sContainer from '../../common/styles/Container.module.css';
import {Title} from '../../common/components/Title';

export const Contacts = () => {
    return (
        <div className={s.contactBlock}>
            <div className={`${sContainer.container} ${s.contactContainer}`}>
                <Title text={'Contacts'}/>
                <form>
                    <div className={s.row}>
                        <div className={s.inputGroup}>
                            <input type={'text'} required/>
                            <label for={'name'}>Your Name</label>
                        </div>
                        <div className={s.inputGroup}>
                            <input type={'text'} required/>
                            <label for='number'>Phone No.</label>
                        </div>
                    </div>
                    <div className={s.inputGroup}>
                        <input type={'email'} required/>
                        <label for='email'>Email Id</label>
                    </div>
                    <div className={s.inputGroup}>
                        <textarea rows='8' required></textarea>
                        <label for='message'>Message</label>
                    </div>
                    <button type={'submit'}>SUBMIT</button>
                </form>
            </div>
        </div>
    );
};
