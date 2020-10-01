import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import FileUpload from './component/FileUpload';
import FileUpload2 from './component/FileUpload2';
import ShowData from './component/ShowData';

function App() {

  const [parameter1, setParameter1] = useState("");
  const [parameter2, setParameter2] = useState("");
  return (
    <div>
      <h5>Hello ...Tenkei</h5>
      <FileUpload parameter ={parameter1} setParameter ={setParameter1}></FileUpload>
      <FileUpload2 parameter ={parameter2} setParameter ={setParameter2}></FileUpload2>
      { parameter1 && parameter2 ?
      <ShowData parameter1 ={parameter1} parameter2 ={parameter2}></ShowData>
      :""
}
    </div>
  );
}

export default App;
