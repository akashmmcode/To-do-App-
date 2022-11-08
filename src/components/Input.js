import React from "react";
import { v4 as uuidv4 } from 'uuid';
import {Main} from "./Main"
import {useRef} from 'react';
import "../App.css"


function Input(){

    const titleRef = useRef(null);
    const noteRef = useRef(null);

    
    const [inputData,setInputData] = React.useState({id:uuidv4(),title:"",note:""})

    const [tododata,setTodoData] = React.useState([{id: uuidv4(), title: "Read", note: "Harry Potter"}])

    const initialState = {
        id : uuidv4(),
        title: "",
        note: ""
      };

    // tododata: [{ id: uuidv4(), title: "Read", note: "Harry Potter" }]

    function handleChange(event){
        setInputData((prev)=>{
            return{
                ...prev,
                [event.target.name]: event.target.value
            }
        })
        
    }
    console.log(inputData);

    function addTodo(){
        setTodoData(prev => [...prev,inputData])
        setInputData(() => initialState)
        titleRef.current.value="";
        noteRef.current.value="";
    }

    
    function handleDelete(id){
        setTodoData(() => tododata.filter((prev)=>{
            return prev.id !== id;
        }))
    }
    

    return(
      <>
      <div className="input-div">
      <div>
        <label className="title">Title</label>
        <input  
                ref={titleRef}
                name="title"
                type="text"
                placeholder="Title"
                onChange = {handleChange}
        />
      </div>
      <div>
        <label className="note">Note</label>
        <input  
                ref={noteRef}
                name="note"
                type="text"
                placeholder="Note"
                onChange = {handleChange}
        />
      </div>
      <button className="addButton" onClick={addTodo}><b>ADD TASK</b></button>
      </div>
      {tododata.map((item) => {
          return (
              <Main
                key={item.id}
                title={item.title}
                note={item.note}
                onDeleteClick={()=>handleDelete(item.id)}
              />
          );
        })}
      </>
    )
}


export {Input}


