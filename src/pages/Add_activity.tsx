import { useState } from "react"
import '../style/add_activity.css'
export default function Add_activity(){
    const[task,setTask] =useState(["Go shopping"]);
    const[newTask,setNewTask]=useState("");

    function handleInputChange(event:any){

    }
    function addTask(){

    }
    function deleteTask(index:any){

    }
    function moveTaskUp(index:any){

    }
    function moveTaskDown(index: any){

    }
    return(
        <div className="container2">
            <div className="to-do-list">
                <div>
                    <input type="text" placeholder="Add a Task...." value={newTask} onChange={handleInputChange} />
                    <button className="add-button" onClick={addTask}>Add</button>
                </div>
                <ol>
                    {task.map((task,index) =>
                    <li key={index}>
                    <span className="text">{task}</span>
                    <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
                    <button className="move-button" onClick={() => moveTaskUp(index)}>Move Up</button>
                    <button className="move-button" onClick={() => moveTaskDown(index)}>Move Down</button>
                    </li>
                    )}
                </ol>
            </div>
        </div>
    )
}