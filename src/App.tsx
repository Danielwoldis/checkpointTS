import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Form from "./components/Form";
import Table from "./components/Table";

import { User, Team, teamUnions } from "./components/Form";

// const u1: User = { name: "daniel", team: "blue" };
// const u2: User = { name: "eva", team: "red" };

// const tA: Users ={users:[u1, u2]};

function App() {
  const [usersState, setUsers] = useState<User[]>([]);
  const [won, setWon]=useState(false)

  

  useEffect(() => {

    const winners=usersState.filter(u=>u.score>=5)
    if(winners.length>=1){
      console.log("we got a winner",winners)
      setWon(true)
    }
  }, [usersState]);

  const updateScore = (team: Team) => {
    return () => {
      usersState.forEach((user) => {
        if (user.team == team) {
          user.score += 1;
        }
      });
      setUsers([...usersState])
    };
  };

  const someOneWon=()=>{
    if(won){

      const winners=usersState.filter(u=>u.score>=5)

      return(<div className="winnerScreen">
        <h3> we got {winners.length==1? "a winner": "winners"}</h3>
        {winners.map((u)=><div>{u.name} !!!</div>)}
        <button onClick={()=>{
          setUsers([])
          setWon(false)
          
          }}>play again</button>
        </div>
      )
      
    }else{
      return null
    }

  }

  return (
    <div className="main">
      <h2>Welcome to my awesome team game!</h2>
      <h3>Add a new Player</h3>
      <Form users={usersState} setter={setUsers} />
      <Table users={usersState} setter={setUsers} />

      <div className="buttons">
        {teamUnions().map((t:Team)=><button disabled={won} onClick={updateScore(t)}>{t}</button>) }
      </div>
      {someOneWon()}
      
    </div>
  );
}

export default App;
