import {createContext, useState} from 'react'

export const TeamContext = createContext()

export const TeamProvider = ({children}) =>{
  const[teamDetails, setTeamDetails] = useState({
    name:'',
    teamPic:'',
    position:'',
    about:''
  })
  const addTeamMember = (details) => {
    setTeamDetails(details);
    localStorage.setItem("Team Details", JSON.stringify(details));
  };
  return (
    <TeamContext.Provider value={{teamDetails, setTeamDetails, addTeamMember}}>
      {children}
    </TeamContext.Provider>
)
}