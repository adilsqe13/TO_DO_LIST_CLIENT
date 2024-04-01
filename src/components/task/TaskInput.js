import React, { useState, useContext } from 'react';
import axios from 'axios';
import taskContext from '../../CONTEXT/context/taskContext';

export default function TaskInput() {
    const apiUrl = process.env.REACT_APP_API_URL;
    const { allTask, setAllTask, showAlert, getAllTasks } = useContext(taskContext);
    const [task, setTask] = useState('');

    //Handle Add TASK
    const addTask = async () => {
        let trimmedTask = task.trim();
        try {
            if (trimmedTask !== '') {
                await axios.post(`${apiUrl}/api/allTask`, { trimmedTask });
                showAlert("Success", "A new task added", "success");
                setTask('');
                getAllTasks();
            } else {
                showAlert("Failed", "Please enter a valid task..", "danger");
            }
        } catch (error) {
            //Error Handling
            console.log(error);
            showAlert("Network Error", "Something went wrong", "danger");
        }
    };

    //Function to add a task using press Enter key
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    };

    //Function to delete all tasks
    const resetApp = async () => {
        try {
            await axios.delete(`${apiUrl}/reset-data`);
            setAllTask([]);
            setTask("");
            showAlert("Success", "All tasks have been deleted ", "danger");
        } catch (error) {
            console.log(error);
            showAlert("Network Error", "Some went wrong ", "danger");
        }
    };
    return (
        <>
            <div className="row">
                <input
                    className='input-task text-center'
                    type="text"
                    placeholder="Enter a task here"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    onKeyPress={handleKeyPress} />
            </div>
            <div className="row my-1 py-2">
                <div className="col-6">
                    <button title='Add Task' className='btn btn-warning w-100 add-task-btn' onClick={addTask} disabled={task === ''} >Add Task</button>
                </div>
                <div className="col-6">
                    <button title='Delete all tasks' className='btn btn-danger w-100 reset-btn' onClick={resetApp} disabled={allTask && allTask.length === 0}>Reset App</button>
                </div>
            </div>
        </>
    )
}
