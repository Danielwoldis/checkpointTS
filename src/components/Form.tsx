import { useState,useEffect } from "react";
import { FunctionComponent } from 'react';


import "./Form.css";

const team=["blue","yellow","red"] as const

export const teamUnions=()=>{
    return team
}

export type Team=typeof team[number]

export type User={
    name:string
    team:Team
    score:number

}

const Form= ({users,setter}:{users:User[],setter:React.Dispatch<React.SetStateAction<User[]>>}) => {
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
            team:optionValue,
            score:0,
            
        }


        setter([...users, u])

        console.log(users)
        setInputtextValue("")
    }





  return (
    <div className="mainBox">
      <div className="miniBox">
        <h5>Player name</h5>
        <input value={inputTextValue} onChange={(e)=>{setInputtextValue(p=>e.target.value)}}></input>
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
