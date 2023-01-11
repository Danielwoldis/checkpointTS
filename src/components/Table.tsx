import { useState } from "react";
import { User, Team } from "./Form";
import { FunctionComponent } from 'react';
import "./Table.css"


// const u1: User = { name: "daniel", team: "blue" };
// const u2: User = { name: "eva", team: "red" };

// const tA: Users = {users:[u1, u2]};



const Table= ({users,setter}:{users:User[],setter:React.Dispatch<React.SetStateAction<User[]>>}) => {
    console.log(users, "tableUser")


    const deleter=(index:number)=>{

        return ()=>{

            users.splice(index,1)

        

            setter([...users])

            console.log(users)

        }

    }



  const addRows = (users: User[]) => {
    return users.sort((a,b)=>b.score-a.score).map((u: User,index) => {
      return (
        <tr>
          <td key={(index*3)+1}>{u.name}</td>
          <td key={(index*3)+2}>{u.team}</td>
          <td key={(index*3)+3}>{u.score}</td>
          <td key={(index*3)+4}><button onClick={deleter(index)}>Delete</button></td>
        </tr>
      );
    });
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Team</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>{addRows(users)}</tbody>
      </table>
    </div>
  );
};
export default Table;
