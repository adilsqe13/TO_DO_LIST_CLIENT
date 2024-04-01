import React, { useState, useEffect } from 'react';
import taskContext from '../context/taskContext';
import axios from 'axios';


export default function TaskState(props) {
    const apiUrl = process.env.REACT_APP_API_URL;
    const [allTask, setAllTask] = useState('');
    const [alert, setAlert] = useState(null);

    //GET ALL TASKS
    const getAllTasks = async () => {
        try {
            let response = await axios.get(`${apiUrl}/api/allTask`);
            return setAllTask(response.data.reverse());
        } catch (error) {
            console.log(error);
            showAlert("Network Error", "Something went wrong ", "danger");
        }
    }

    //SHOW ALERT
    const showAlert = (Success, msg, type) => {
        setAlert({
            Success: Success,
            msg: msg,
            type: type
        })
        setTimeout(() => {
            setAlert(null);
        }, 2000);
    }


    useEffect(() => {
        getAllTasks();
    }, []);

    return (
        <>
            <taskContext.Provider value={{ allTask, setAllTask, getAllTasks, alert, showAlert }}>
                {props.children}
            </taskContext.Provider>
        </>
    )
}
