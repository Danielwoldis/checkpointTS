import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Form from './components/Form'
import Table from './components/Table' 

import { User, Team } from "./components/Form";
import {Users} from "./components/Table"

// const u1: User = { name: "daniel", team: "blue" };
// const u2: User = { name: "eva", team: "red" };

// const tA: Users ={users:[u1, u2]};

function App() {

  const [users,setUsers]=useState<Users>({users:[]})

  useEffect(()=>{
    console.log(users,"yoyo")

  },[users])


  return (
    <div className='main'>
      <h2>Welcome to my awesome team game!</h2>
      <h3>
        Add a new Player
      </h3>
      <Form users={users.users} />
      <Table users={users.users}/>






    </div>

  )
}

export default App
