import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './App.css';

// const list=[{id:1,item:"baseball bat",itemqty:3,isPacked:false},{id:1,item:"Russian",itemqty:2,isPacked:true},{id:1,item:"food",itemqty:1,isPacked:false}]

const App = () => {
    const [list,setList]=useState([]);

    const AddTask=(item)=>{
        setList((e)=>[...e,item])
    }
    const delTask=(id)=>{
        setList(items=>items.filter((item)=>id!==item.id));
    }
  return (<div className='app'>
  <Logo/>
    <Form add={AddTask}/>
    <List list={list} del={delTask}/>
    <Stats/>

  </div>
    
  )
}

export default App

const Logo=()=>{
    return<h1>💻To Do List</h1>
}
const Form=({add})=>{
    const [qty,setQty]=useState(1);
    const [item,setItem]=useState("");
    
    const form=(e)=>{
        console.log(e);
        e.preventDefault();
        if(!item){
            return;
        }
        let obj={id:uuidv4(),item:item,itemqty:qty,isPacked:false}
        add(obj);
    }
    return<>
    <form className='add-form' onSubmit={form}>What are your tasks???
    <select value={qty} onChange={(e)=>setQty(+e.target.value)}>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
        </select>
        <input type="text" name="" id="" value={item} onChange={(e)=>{setItem(e.target.value)}}/>
        <button type='submit'>Submit</button>
        </form>
        

    </>
}
const List=({list,del})=>{
    
    
    return<div className='list'><ul >{list.map((item)=><Task key={item.id}item={item} delTask={del}/>)}</ul></div>
}

const Stats=()=>{
    return <><h4 className='stats'>Your tasks</h4></>
}
const Task=({item,delTask})=>{
    return <li>
        <span style={item.isPacked?{textDecoration:"line-through"}:{}}>{item.itemqty +" "+ item.item}</span><button onClick={()=>delTask(item.id)}>❌</button></li>
}