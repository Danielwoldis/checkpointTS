import { useState } from "react";
import { User, Team } from "./Form";
import { FunctionComponent } from 'react';


// const u1: User = { name: "daniel", team: "blue" };
// const u2: User = { name: "eva", team: "red" };

// const tA: Users = {users:[u1, u2]};

export type Users = {users:User[]};

const Table:FunctionComponent<Users> = ({users}) => {
    console.log(users)

  const addRows = (users: User[]) => {
    return users.map((u: User,index) => {
      return (
        <tr>
          <td key={(index+1)*(index+1)}>{u.name}</td>
          <td key={(index+2)*(index+1)}>{u.team}</td>
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
