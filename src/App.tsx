import React from 'react';
import './App.css';

interface Props {
  name: string;
  age?: number;
}


const App: React.FC<Props> = ({ name, age }) => {
  return (

    <div className="App">
      <h2>{name}</h2>
      {age !== undefined && <p>Age: {age}</p>}
      <div className='border border-gray-300'>
        <h2 className='bg-slate-500'>Hello This is TailwindCSS</h2>
      </div>
    </div>
  );
};

export default App;
