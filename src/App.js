
import { createContext, useState } from 'react';
import './App.css';

import { Wrapper } from './components/card/Wrapper';
import { Header } from './components/header/Header';
import { Input } from './components/inputs/Input';


 export let data = createContext()



function App() {
  let [todo ,setTodo] = useState([])
  return (
    <div className="App">
  
      <data.Provider value={{todo ,setTodo }}>
      
      <Header />
      <Input />
      <Wrapper />
      </data.Provider>
     
    </div>
  );
}

export default App;
