import React from 'react';
import './App.css';
import Form from './components/Form';

interface Props {
  name: string;
  age?: number;
}


const App: React.FC<Props> = ({ name, age }) => {
  return (

    <div>
      <Form />
    </div>
  );
};

export default App;
