import React, { useState, useContext } from 'react';
import './model.css';
import { data } from '../../App';

export const Model = ({ show, setshow, title, description, id }) => {
  const { setTodo } = useContext(data);
  const [firstdata, setfirstdata] = useState(title);
  const [firstdescription, setfirstdescription] = useState(description);

  const handleTitleChange = (e) => {
    setfirstdata(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setfirstdescription(e.target.value);
  };

  const updateTodo = () => {
    setTodo((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, title: firstdata, description: firstdescription };
        }
        return todo;
      });
    });


    setshow(false);
  };


  const hide = () => {
    setshow(false);
  };

  return (
    <>
      {show && (
        <div className='model p-2 rounded-md bg-slate-200'>
          <div className='cross' onClick={hide}><i className="ri-close-line"></i></div>
          <h4>Edit Mode</h4>
          <input
            type='text'
            className='text-gray-900 w-full p-2 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  outline-0'
            value={firstdata}
            onChange={handleTitleChange}
            name="firstname"
          />
          <input
            type='text'
            className='text-gray-900 w-full p-2 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  outline-0'
            value={firstdescription}
            onChange={handleDescriptionChange}
            name="secondname"
          />
          <div className='flex gap-3'>
            <button
              onClick={updateTodo}
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >
              <i className="ri-pencil-line mr-2"></i>Save
            </button>
            <button
              onClick={hide}
              className="bg-transparent hover:bg-red-500 text-red-500 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
            >
              <i className="ri-pencil-line mr-2"></i>Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};
