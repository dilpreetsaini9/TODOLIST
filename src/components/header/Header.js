import React from 'react'
import './header.css'
export const Header = () => {
  return (
    <header className=' flex items-center justify-evenly header-background  h-12 w-full font-bold text-xl header'>
        <div >
            <h2 className='text-grey-200'> <i className="ri-calendar-todo-line mr-1"></i>To-do-App</h2>
        </div>
       
    </header>
  )
}
