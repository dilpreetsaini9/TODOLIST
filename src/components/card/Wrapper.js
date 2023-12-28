import React from 'react';
import './wrapper.css';
import { Card } from './Card';
import { useContext } from 'react'
import  {data} from '../../App'





export const Wrapper = () => {
    let {todo} = useContext(data)

 
  return (
    <div className='wrapper-card card'>
        { todo && todo.map((item)=>(
            <Card todos={item} key={item.id}/>

        ))}
    </div>
  );
};
