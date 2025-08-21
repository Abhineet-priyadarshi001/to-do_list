import { useState } from "react"

function To_do(){

    const [Task , newTask] = useState(["eat"])
    const[Input,setnewInput] = useState()

    function handleinput(event){
        setnewInput(event.target.value)
    }

    function addTask(){
        if(Input.trim() !== ""){
            newTask([...Task,Input])
            setnewInput("")
        }
    }

    function MoveUp(index){
        if(index !== 0){
            const up = [...Task];
            [up[index] , up[index-1]] = [up[index - 1] , up[index]]
            newTask(up)
        }
        
    }

    function RemoveTask(index){
        const remove = Task.filter((_,i) => i!== index)
        newTask(remove)
    }

    function MoveDown(index){
        if(index < Task.length -  1){
            const down = [...Task];
            [down[index] , down[index+1]] = [down[index+1] , down[index]]
            newTask(down)
        }
        
    }

    return(
        <div className="first">
            <h1>Your Task</h1>

            <div className="second">
                <ol>
                    {Task.map((newTask,index) => 
                    <li key={index}>{newTask}
                    <button id="RemoveTask" onClick={()=> RemoveTask(index)}>Remove</button>
                    <button id="MoveUp" onClick={()=>MoveUp(index)}>UP</button>
                    <button id="MoveDown" onClick={()=>MoveDown(index)}>DOWN</button></li>)}
                </ol>
                <input type="text" value={Input}  placeholder="Enter Your Task" onChange={handleinput} />
                <button id="addButton" onClick={addTask}>Add</button>
            </div>
        </div>
    )
}

export default To_do