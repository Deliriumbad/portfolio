import React from "react";
import s from './Skills.module.scss';
import sContainer from '../../common/styles/Container.module.css';
import {Skill} from './Skill/Skill';
import {Title} from '../../common/components/Title';
import typeScriptImage from '../../assets/image/typeScript.png';
import javaScriptImage from '../../assets/image/javaScript.png';
import htmlCssImage from '../../assets/image/htmlCss.png';
import gitImage from '../../assets/image/git.png';
import reactImage from '../../assets/image/react.png';
import reduxImage from '../../assets/image/redux.png';
import unitTestImage from '../../assets/image/unitTest.png';

export const Scills = () => {

    const htmlCss = {
        backgroundImage: `url(${htmlCssImage})`
    }

    const javaScript = {
        backgroundImage: `url(${javaScriptImage})`
    }

    const typeScript = {
        backgroundImage: `url(${typeScriptImage})`
    }

    const git = {
        backgroundImage: `url(${gitImage})`
    }

    const react = {
        backgroundImage: `url(${reactImage})`
    }

    const redux = {
        backgroundImage: `url(${reduxImage})`
    }

    const unitTest = {
        backgroundImage: `url(${unitTestImage})`
    }

    return (
        <div className={s.skillsBlock}>
            <div className={`${sContainer.container} ${s.skillsContainer}`}>
                <Title text = {'Skills'}/>
                <div className={s.skills}>
                    <Skill title={'HTML, CSS'}
                           image={htmlCss}
                           description={''}/>
                    <Skill title={'JavaScript'}
                           image={javaScript}
                           description={''}/>
                    <Skill title={'TypeScript'}
                           image={typeScript}
                           description={''}/>
                    <Skill title={'Git'}
                           image={git}
                           description={''}/>
                    <Skill title={'React'}
                           image={react}
                           description={''}/>
                    <Skill title={'Redux'}
                           image={redux}
                           description={''}/>
                    <Skill title={'Unit testing'}
                           image={unitTest}
                           description={''}/>
                </div>
            </div>
        </div>
    );
}