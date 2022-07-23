import React from "react";
import s from './Portfolio.module.css';
import sContainer from '../../common/styles/Container.module.css';
import {Project} from './Project/Project';

export const Portfolio = () => {
    return (
        <div className={s.portfolioBlock}>
            <div className={`${sContainer.container} ${s.portfolioContainer}`}>
                <h2>Portfolio</h2>
                <div className={s.portfolio}>
                    <Project title={'Social network'}
                             description={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.'}/>
                    <Project title={'Todolist'}
                             description={'Lorem ipsum dolor sit am eget dolor.'}/>
                    <Project title={'Counter'}
                             description={'Lorem ipsum  consectetuer adipiscing elit. Aenean commodo ligula eget dolor.'}/>
                    <Project title={'Friday project'}
                             description={'Lorem ipsum dolor s'}/>
                </div>
            </div>
        </div>
    );
}