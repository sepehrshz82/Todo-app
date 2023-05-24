import React, { useState, createContext } from 'react';

 export const TaskContext = createContext();

const TaskContextProvider = ({children}) => {
    const [task, setTask] = useState(['sepehr']);
    const val = {task, setTask};
    return (
        <TaskContext.Provider value={val}>
            {children}
        </TaskContext.Provider>
    );
};

export default TaskContextProvider;