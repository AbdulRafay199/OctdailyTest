import {createContext, React,  useState } from "react";
const usercontext = createContext();

const Userstate = (props) => {

    const [userdata,setuserdata] = useState([]);
    const host = "http://localhost:5000"

    const getuser = async ()=>{

      const url = `${host}/user/fetchuser`

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
          
        }
      });
      const json = await response.json();
      setuserdata(json)
    }

    const adduser = async (data)=>{

      const url = `${host}/user/adduser`

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const json = await response.json();
      console.log(json)
    }
    

  return (
    <usercontext.Provider value={{getuser,userdata,adduser}}>
        {props.children}
    </usercontext.Provider>
  )
}

export default Userstate;
export {usercontext};