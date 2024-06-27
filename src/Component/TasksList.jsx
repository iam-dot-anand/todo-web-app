import React from 'react'
import { IoIosArrowUp } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import { useState } from 'react';
import { IoAdd } from "react-icons/io5";
import { GiCrossMark } from "react-icons/gi";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import { v4 as uniqueId } from 'uuid';


const TasksList = ({tasks, setTasks, title, done}) => {
    
    const [task, setTask] = useState({ id: "", isCompleted: false, name: "", time: "" })
    // console.log(task, "xyz");
    const [showDelete, SetShowDelete] = useState(false);
    
    
    // const [tasks, setTasks] = useState([])
    console.log(tasks);
    
    const [hide, setHide] = useState(true);
    const [showInputTask, SetShowInputTask] = useState(false);

    const onNameChange = (event) => {
        setTask({ ...task, name: event.target.value })
        // console.log(event.target.value, "abcd" );
    }

    const onDateChange = (e) => {
        setTask({ ...task, time: e.target.value })
    }

    //STORE INPUT-DATA IN ARRAY 
    const submit = (e) => {
        e.preventDefault()
        setTasks([...tasks, {...task, id:uniqueId()}])
        SetShowInputTask(false)
        // console.log(task, "xyz");
    }

    const checkHandle = (id) => {
        setTasks(tasks.map((curVal) => {
            if (curVal.id === id) {
                return { ...curVal, isCompleted: !curVal.isCompleted };
            }
            return curVal;
        }));
    }

    const deleteTask=(id)=>{
        console.log(id)
        setTasks(tasks.filter((curVal) => {
           return curVal.id !==id
        }));
    }


    return (
        <div className='mx-5 my-3'>

           {/* Title */}
            {title.length !==0 && <div className=' align-items-center mb-2'>
                <IoIosArrowUp className='mb-2' onClick={() => setHide(!hide)} /><GoDotFill className={title ==="Planed Stage" ? 'text-warning mb-2 fs-5'  : 'text-info mb-2 fs-5'} /><span className='me-2 h1 fs-5'>{title}</span><span >{tasks.filter((curr)=>curr.isCompleted===done).length} Open tasks</span>
            </div>}

            {/* Create Button */}
           {!done && <div className=' mb-3'>
                <button onClick={() => SetShowInputTask(true)} className='w-100 border-0 py-3 border-bottom shadow rounded-1'><IoAdd className='mb-1 me-1' />Create Tasks</button>
            </div>}


            {/* Task INput details */}
            {showInputTask &&
                <div className='w-100 h-100 bg-opacity-10 float-center'>
                    <div className='bg-dark opacity-75 mx-5 '>
                        <button onClick={() => SetShowInputTask(false)} className='text-end float-end'><GiCrossMark /></button>
                        <div className=''>
                            <h1 className='text-light text-center'>Task</h1>

                            <form action="" className='mx-5 pb-3' onSubmit={submit}>
                                <div className=' w-100 '>
                                    <div className='mb-1 '>
                                        <input className='w-100  px-2 py-1 border-0 ' onChange={onNameChange} type='text' placeholder='Enter Your Task' />
                                    </div>
                                    <div className='d-flex w-100 justify-content-between '>
                                        <div className='w-50'>
                                            <input className='  px-2 py-1 border-0' onChange={onDateChange} type='date' placeholder='Date' />
                                        </div>
                                        <button className='border-0' >Add Task</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>}


            {/* List of tasks */}
            {hide && <div>
                {tasks.filter((curTask)=>curTask.isCompleted===done).map((task, index,) => {
                    return (

                        <div key={index} className='border-1 border-bottom shadow rounded-1 mb-3 align-items-center'>
                            <div className='d-flex row p-3 '>
                                <div class="form-check checkbox-xl col ">
                                    <input class="form-check-input mx-2" type="checkbox" value="" id="checkbox-3" onClick={() => checkHandle(task.id)} checked={task.isCompleted} />
                                    <label class="form-check-label h1 fs-6" for="checkbox-3">{task.name}</label>
                                </div>
                                <div className='col d-flex'>
                                    <div className=' col'>
                                        <IoCalendarNumberOutline className='mb-1'/><span>Due Date{task.time}</span>
                                    </div>
                                    <div className='col d-flex ms-5'>
                                        <span className='px-2 py-1 rounded-1 text-white bg-warning me-2'>Event</span>
                                        <span className='px-2 py-1 rounded-1 text-white bg-danger me-2'>Urgent</span>
                                        <span className='px-2 py-1 rounded-1 text-white bg-dark me-2'>Marketing</span>
                                        <span className='px-2 py-1 rounded-1 text-white bg-info '>Internal</span>
                                    </div>
                                    <div className='col text-end'>
                                        {showDelete && <button onClick={()=>deleteTask(task.id)} className='me-2 px-2 py-1 border-0 rounded-1'>Delete</button>}
                                        <span onClick={() => SetShowDelete(!showDelete)} className=''><BsThreeDotsVertical /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )

                })}
            </div>}
        </div>
    )
}

export default TasksList;
