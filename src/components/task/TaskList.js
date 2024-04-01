import React, { useContext } from 'react';
import axios from 'axios';
import RightArrowIcon from '../dynamic/RightArrowIcon';
import DeleteIcon from '../dynamic/DeleteIcon';
import EmptyList from '../dynamic/EmptyList';
import taskContext from '../../CONTEXT/context/taskContext';
import Spinner from '../dynamic/Spinner';

export default function TaskList(props) {
    const apiUrl = process.env.REACT_APP_API_URL;
    const { allTask, setAllTask, showAlert } = useContext(taskContext);

    //Remove a task using Delete-Request
    const removeTask = async (taskId) => {
        await axios.delete(`${apiUrl}/api/allTask/${taskId}`);
        let updatedTasks = allTask.filter((el) => {
            return el._id !== taskId;
        });
        setAllTask(updatedTasks);
        showAlert("Success", "One task deleted ", "warning");
    };


    return (
        <>
            <div className="row result py-3">
                <ol className="text-light">
                    {!allTask && <div className='p-3 display-screen'><Spinner height={25} width={25}/></div>}
                    {allTask && allTask.length === 0 ? <EmptyList /> : ''}
                    {allTask && allTask.map((el, index) => (
                        <div key={index} className=' p-3 display-screen'>
                            <div className="row">
                                <div className="col-1">
                                    <RightArrowIcon />
                                </div>
                                <div className="col-10 tasks">
                                    {el.task}
                                </div>
                                <div className="col-1 dfjcac">
                                    <button title='delete' className='dlt-btn dfjcac' onClick={() => removeTask(el._id)}>
                                        <DeleteIcon />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </ol>
            </div></>
    )
}
