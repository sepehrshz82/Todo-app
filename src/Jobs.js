import React, { useState, useContext } from 'react';
import styles from './Jobs.module.css';
import Job from './Job';
import { TaskContext } from './TaskContextProvider';
const Jobs = () => {
    const [title, setTitle] = useState("");
    const {task, setTask} = useContext(TaskContext);
    const myfun = event => {
        setTitle(event.target.value);
    }
    const add = () => {
        setTask(prevState => [...prevState, title]);
        setTitle('');
    }
    const handleKeyDown = (t) => {
        if(t.key === 'Enter') {
          add();
        }
    };

    return(
        <div onKeyDown={handleKeyDown}>
            <div style={{display: "flex", justifyContent: "center", paddingTop: "30px"}}>
                <div className={styles.inputContainer}>
                    <input className={styles.type} type="text" placeholder='Add your task' value={title} onChange={myfun}/>
                    <button onClick={add}>Add</button>
                </div>    
            </div>
            {task.map(e => <Job task={task} text={e}/>)}
        </div>
    );
};

export default Jobs;