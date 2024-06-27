import Navbar from './Navbar'
import { PiArrowsLeftRightFill } from "react-icons/pi";
import TasksList from './TasksList';
import { useState } from 'react';





const Dashboard = ({ show, setShow }) => {
   
    const [planedTasks, setPlanedTasks]= useState([])

    const [upcomingTasks, setUpcomingTask]= useState([]);

    

    return (
        <>
            <div className='w-100'>
                <div className='d-flex align-items-center'>
                    {/* <button className='px-2 py-1 mt-5 border-0 bg-light mx-1' onClick={() => setShow(!show)}><PiArrowsLeftRightFill /></button> */}
                    <Navbar className='' />
                </div>
                {/* <Taskbar title={"Planed Stage"} length={planedTasks.filter((cur)=>cur.isCompleted==false).length}/> */}
                <TasksList tasks={planedTasks } setTasks={setPlanedTasks} title={"Planed Stage"} done={false} />
                <TasksList tasks={upcomingTasks } setTasks={setUpcomingTask} title={"Upcoming Tasks"} done={false} />
                <div>
                    {/* {planedTasks.filter((curTask)=>curTask.isCompleted==true).map((val)=><Task task={val} />)} */}
                    <TasksList tasks={planedTasks } setTasks={setPlanedTasks} title={"Completed Task"} done={true} />
                    <TasksList tasks={upcomingTasks } setTasks={setUpcomingTask} title={""} done={true} />
                </div>
            </div>

        </>

    )
}

export default Dashboard
