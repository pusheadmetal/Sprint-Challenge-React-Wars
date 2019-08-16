import React, { useState, useEffect } from 'react';
import axios from "axios";
import DisplayCard from "./components/DisplayCard";
import "semantic-ui-css/semantic.min.css";
import TabExampleBasic from "./components/Tab";
import './App.css';

const App = () => {
  const [people, setPeople] = useState();

  useEffect( () => {
    axios.get("https://swapi.co/api/people/")
         .then( (response) => setPeople(response.data.results) )
         .catch( (err) => console.log(err) );
  },[]);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <TabExampleBasic getPeople = {people} />
    </div>
  );
}

export default App;
