import React from "react";
import s from './Portfolio.module.scss';
import sContainer from '../../common/styles/Container.module.css';
import {Project} from './Project/Project';
import {Title} from '../../common/components/Title';
import todoImage from '../../assets/image/todolist.png';
import socialImage from '../../assets/image/socialNetwork.png';
import counterImage from '../../assets/image/counter.png';
import fridayImage from '../../assets/image/friday.png';

export const Portfolio = () => {

    const socialNetwork = {
        backgroundImage: `url(${socialImage})`
    }

    const todolist = {
        backgroundImage: `url(${todoImage})`
    }

    const counter = {
        backgroundImage: `url(${counterImage})`
    }

    const fridayProject = {
        backgroundImage: `url(${fridayImage})`
    }

    return (
        <div className={s.portfolioBlock}>
            <div className={`${sContainer.container} ${s.portfolioContainer}`}>
                <Title text={'Portfolio'}/>
                <div className={s.portfolio}>
                    <Project title={'Social network'}
                             image={socialNetwork}
                             description={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.'}/>
                    <Project title={'Todolist'}
                             image={todolist}
                             description={'Lorem ipsum dolor sit am eget dolor.'}/>
                    <Project title={'Counter'}
                             image={counter}
                             description={'Lorem ipsum  consectetuer adipiscing elit. Aenean commodo ligula eget dolor.'}/>
                    <Project title={'Friday project'}
                             image={fridayProject}
                             description={'In progres...'}/>
                </div>
            </div>
        </div>
    );
}