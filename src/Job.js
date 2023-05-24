import React, { useState, useContext } from 'react';
import styles from './Job.module.css';
import { TaskContext } from './TaskContextProvider';
import trash from './trash.png';

const Job = ({text}) => {
    let [isActive, setIsActive] = useState(false);
    const {task, setTask} = useContext(TaskContext);
    const change = () => {
        if(isActive == true) setIsActive(false);
        else setIsActive(true);
    }
    const remove = () => {
        setIsActive(false);
        setTask(task.filter(item => item !== text));
    }
    const diactive = {
        textDecoration : 'none'
    }
    const active = {
        textDecoration : 'line-through',
        textDecorationColor: 'red'
    }
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <span style={isActive ? active : diactive}>{text}</span>
            </div>
            <input className={styles.check} type="checkbox" onChange={change} checked={isActive}/>
            <img src={trash} onClick={remove} />
        </div>
    );
};

export default Job;