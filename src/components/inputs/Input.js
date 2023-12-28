import React, { useState, useContext } from 'react';
import './input.css';
import toast, { Toaster } from 'react-hot-toast';
import { data } from '../../App';

export const Input = () => {
  const notify1 = (message) => toast.success(message);

  const { setTodo, todo } = useContext(data);
  const [handletodo, setHandletodo] = useState({
    title: '',
    description: '',
    id: '',
  });

  const handlechange = (e) => {
    setHandletodo({ ...handletodo, [e.target.name]: e.target.value });
  };

  const finalCreateTodo = () => {
    const generatedId = Math.floor(Math.random() * 3200000);
    setTodo((prevTodo) => [...prevTodo, { ...handletodo, id: generatedId }]);
    setHandletodo({
      title: '',
      description: '',
      id: '',
    });
  };
  

  const createtodo = () => {
    let trimtitle = handletodo.title.trim()
    let trimdescription = handletodo.description.trim()
    if (trimtitle || trimdescription) {
      finalCreateTodo();
    } else {
      setHandletodo({
        title: '',
        description: '',
        id: '',
      })
    }
  };

  const clearalltodo = () => {
    if (todo.length >= 1) {
      setTodo([]);
      notify1('Deleted All todos');
    }
  };

  return (
    <div className='inputwrapper mt-2 flex flex-col gap-2 items-center text-center'>
      <Toaster gutter={8}/>
      <textarea
        id='title'
        rows='1'
        minLength={4}
        className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  outline-0'
        placeholder='Title...'
        onChange={handlechange}
        value={handletodo.title}
        name='title'
      ></textarea>
      <textarea
        id='description'
        rows='1'
        minLength={4}
        className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border outline-0 border-gray-300 focus:ring-blue-500 focus:border-blue-500  '
        placeholder='Description...'
        onChange={handlechange}
        value={handletodo.description}
        name='description'
      ></textarea>
      <div>
        <button
          className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mr-4'
          onClick={createtodo}
        >
          Add Todo
        </button>
        {todo.length >= 1 && (
          <button
            className='bg-red-500 hover:bg-red-700 text-white font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded'
            onClick={clearalltodo}
          >
            Clear All
          </button>
        )}
      </div>
    </div>
  );
};
