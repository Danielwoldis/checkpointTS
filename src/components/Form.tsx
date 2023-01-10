import { useState,useEffect } from "react";
import { FunctionComponent } from 'react';
import { Users } from "./Table";

import "./Form.css";

const team=["blue","yellow","red"] as const

export type Team=typeof team[number]

export type User={
    name:string
    team:Team
}

const Form: FunctionComponent<Users>  = ({users}) => {
    const[inputTextValue,setInputtextValue]=useState("")
    const[optionValue,setOptionValue]=useState<Team>(team[0])
    const[btnEnable,setBtnEnable]=useState(true)

    useEffect(()=>{


        if(inputTextValue){
            setBtnEnable(()=>false)
        }else{
            setBtnEnable(()=>true)

        }

    },[inputTextValue])


    const btnAction=()=>{

        const u: User={
            name:inputTextValue,
            team:optionValue
        }

        users.push(u)
        console.log(users)
    }





  return (
    <div className="mainBox">
      <div className="miniBox">
        <h5>Player name</h5>
        <input onChange={(e)=>setInputtextValue(p=>e.target.value)}></input>
      </div>

      <div className="miniBox">
        <h5>Player team</h5>
        <select value={optionValue} onChange={((e)=>setOptionValue((p:Team)=>e.target.value as Team))} >
          {/* <option value="blue">blue</option>
          <option value="red">red</option>
          <option value="yellow">yellow</option> */}
          {team.map((v,index)=><option value={v} key={index}>{v}</option>)}
        </select>
      </div>
      <div className="miniBox">
        <button disabled={btnEnable} onClick={btnAction}>add Player</button>
      </div>
    </div>
  );
};

export default Form;
