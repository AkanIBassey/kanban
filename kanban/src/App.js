import React from "react";
import Authenticate from './components/Authenticate';
import './App.css';

class Kanban extends React.Component {
  render(){
    return(
      <div>
        <Authenticate />
      </div>
    )
  }
}

export default Kanban;