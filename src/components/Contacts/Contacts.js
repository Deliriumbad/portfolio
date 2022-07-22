import React from 'react';
import s from './Contacts.module.css'
import sContainer from '../../common/styles/Container.module.css'


export const Contacts = () => {
    return (
        <div className={s.contactBlock}>
            <div className={`${sContainer.container} ${s.contactContainer}`}>
                <h2>Contacts</h2>
                <div className={s.contacts}>
                    <form className={s.form}>
                        <input type={'text'} className={s.input} placeholder={'Your Name'}/>
                        <input type={'number'} className={s.input} placeholder={'Your telephone'}/>
                        <input type={'email'} className={s.input} placeholder={'Your email'}/>
                        <textarea className={s.textarea} placeholder={'Message'} rows="4"/>
                        <button type="submit"className={s.button}>Submit</button>
                    </form>

                </div>
            </div>
        </div>
    );
};
