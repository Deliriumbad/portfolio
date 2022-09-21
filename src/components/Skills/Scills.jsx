import React from "react";
import s from './Skills.module.css';
import sContainer from '../../common/styles/Container.module.css';
import {Skill} from './Skill/Skill';

export const Scills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${sContainer.container} ${s.skillsContainer}`}>
                <h2>Skills</h2>
                <div className={s.skills}>
                    <Skill title={'HTML, CSS'}
                           description={'Lorem ipsum dolor sit amet, consectetue eget dolor.'}/>
                    <Skill title={'JS'}
                           description={'Lorem ipsum dolor sitpiscing elit. Aenean commodo ligula eget dolor.'}/>
                    <Skill title={'TypeScript'}
                           description={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.'}/>
                    <Skill title={'Git'}
                           description={'Lorem ipsum dolor sit a Aenean commodo ligula eget dolor.'}/>
                    <Skill title={'React'}
                           description={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.'}/>
                    <Skill title={'Redux'}
                           description={'Lorem ips Aenean commodo ligula eget dolor.'}/>
                </div>
            </div>
        </div>
    );
}