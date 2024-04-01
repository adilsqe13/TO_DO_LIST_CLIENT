import React from 'react';
import './../App.css';
import TaskInput from './task/TaskInput';
import TaskList from './task/TaskList';

export default function DataForm() {

  return (
    <>
      <div className="container">
        <div className="row">
          <h1 className='heading fs-1'>To Do List App</h1>
        </div>
        <TaskInput />
        <TaskList />
      </div>
    </>
  )
}


