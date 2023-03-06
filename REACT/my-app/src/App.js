import './App.css';
import { useState } from 'react';


function App() {
    //STATES
    const [input,setInput]=useState("");
    const [tasks,setTasks]=useState([]);
    const[edit,setEdit]=useState({flag:false,idx:""});

    //FUNCTIONS

    //ADD TASK
    const handleAdd=()=>{
      if(input){
        setTasks([...tasks,input]);
        setInput("");
        console.log(input);
      }
    }

    //DELETE TASK
    const handleDelete=(e)=>{
      const index=tasks.indexOf(e);
      //console.log(index);
      const newTasks=tasks.filter((val,id)=>{
        return id !== index;
      })
      setTasks(newTasks);
    }

    //EDIT TASK
    const handleEdit=(editedTask)=>{
      let index=tasks.indexOf(editedTask)
      //console.log(index);
      setEdit({...edit,flag:true,idx:index});
      setInput(editedTask);
    }

    //HANDLE OK
    const handleOk=()=>{
      const updatedTask=tasks.map((taskName,id)=>{
        if(id==edit.idx){
          return input;
        }else{
          return taskName;
        }
      })
      setTasks(updatedTask);
      setEdit({...edit,flag:false});
      setInput("");
    }


return(
  <div>
    <h1>ToDo List</h1>
    {<div>
      <textarea cols="50" rows="1" value={input} placeholder="Enter your task" onChange={(e)=>{setInput(e.target.value)}}></textarea>
      {edit.flag==false && <input type="button" value="Add-Todo" onClick={handleAdd}/>}
      {edit.flag && <input type="button" value="Save" onClick={handleOk} />}
    </div>}
    <div>
      {
        tasks.map((taskName,id)=>{
          return(
            <div key={id+1}>
              <span>
                {taskName}
              </span>
              <div>
                <button onClick={()=>{handleEdit(taskName)}}>Edit</button>
                <button onClick={()=>{handleDelete(taskName)}}>Delete</button>
              </div>
            </div>
          )
        })
      }
    </div>
  </div>
  );
}

export default App;
