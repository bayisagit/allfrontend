import React,{useState} from "react"



function Todolist(){
    const [tasks,settasks] = useState(["eatbreakfast","take a shower","walk the dog"]);
    const [newtask,setnewtask] = useState("");
    function handleinputchange(event){
        setnewtask(event.target.value);
    }
    function addtask(){ 
        if(newtask.trim()!==""){
            settasks(t =>[...t,newtask]);
            setnewtask("");
        }
    }
    function deletetask(index){
        const updatedtasks=tasks.filter((_,i)=>i!==index);
        settasks(updatedtasks);
    }
    function movetaskup(index){
        if(index>0){
            const updatedtasks=[...tasks];
            [updatedtasks[index],updatedtasks[index-1]]=[updatedtasks[index-1],updatedtasks[index]];
            settasks(updatedtasks);
        }
    }
    function movetaskdown(index){
        if(index<tasks.length-1){
            const updatedtasks=[...tasks];
            [updatedtasks[index],updatedtasks[index+1]]=[updatedtasks[index+1],updatedtasks[index]];
            settasks(updatedtasks);
        }
    }
    return (
        <div className="todolist">
            <h1>To-Do-List</h1>
            <div>
                <input type="text" placeholder="enter a task...." value={newtask} onChange={handleinputchange}/>
                <button className="addbutton" onClick={addtask}>
                    add
                </button>
            </div>
            <ol>
                {tasks.map((task,index) => 
                <li key={index}>
                    <span className="text">{task}</span>
                    <button className="deletebutton" onClick={()=>deletetask(index)}>
                        delete
                    </button>
                    <button className="deletebutton" onClick={()=>movetaskup(index)}>
                        👆
                    </button>
                    <button className="deletebutton" onClick={()=>movetaskdown(index)}>
                        👇
                    </button>
                </li>
                )}
            </ol>
        </div>
    );
}
export default Todolist