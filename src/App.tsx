import React from "react";
import "./App.css";
import Form from "./components/Form";

interface Props {
  name: string;
  age?: number;
}

const App: React.FC<Props> = ({ name, age }) => {
  return (
    <div className="bg-red-600">
      <Form />
    </div>
  );
};

export default App;
