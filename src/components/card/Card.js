import React, { useState } from 'react'
import { useContext } from 'react'
import  {data} from '../../App'
import './wrapper.css'
import {Model} from './Model'
import toast from 'react-hot-toast';


export const Card = ({todos}) => {
    let { setTodo , todo} = useContext(data)
    let [show ,setshow] = useState(false)
    const notify = (e) => toast.error(e);

    function handledelete(){
            let data = todo.filter((item)=> item.id !== todos.id)
          setTodo(data)
            notify("deleted")
            setshow(false)
    }   

    
    function handleshow(){
        setshow(true)
    }
    console.log(todo)
  return (
    <div>
     
    { show &&   <Model show={show} setshow={setshow} id={todos.id} title={todos.title} description={todos.description}/> }

<div className=" min  max-w-sm p-6 card-bg border  rounded-lg shadow  overflow-hidden">
 
    <p className="mb-3 font-normal text-red-500  text-sm text-right">ID : {todos.id}</p>
   
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{todos.title}</h5>
    
    <p className="mb-3  font-light text-sm text-gray-900  overflow-hidden">{todos.description}</p>

  

    <div className='flex items-center justify-between'>

    <button  onClick={handleshow} className="bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
    <i className="ri-pencil-line mr-2"></i>Edit
</button>
    <button onClick={handledelete} className="bg-transparent hover:bg-red-500  text-red-500 font-semibold hover:text-white py-2 px-4 border  border-red-400 hover:border-transparent rounded">
    <i className="ri-delete-bin-5-line mr-2"></i>delete
</button>


    </div>

</div>

    </div>
  )
}
