import {createContext, React,  useState } from "react";
const usercontext = createContext();

const Userstate = (props) => {

    //user data will be stored in this state whenever below getuser function is called.
    const [userdata,setuserdata] = useState([]);

    //just created host variable for our ease since we are using it on multiple places.
    const host = "http://localhost:5000"

    //functions that actually call api using js fetch method

    //fetch user data
    const getuser = async ()=>{

      try{
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
      catch(error){
        console.log(error)
      }
    }

    //Add user data
    const adduser = async (data)=>{

      try {
        const url = `${host}/user/adduser`
  
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
        const json = await response.json();
        return json
        
      } catch (error) {
        console.log(error)
      }
    }

    //Update user data
    const updateuser = async (userid,data)=>{

      try {
        const url = `${host}/user/updateuser/${userid}`
  
        const response = await fetch(url, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
        const json = await response.json();
        return json

      } catch (error) {
        console.log(error)
      }
    }

    //Delete user data
    const dltuser = async (userid)=>{

      try {
        const url = `${host}/user/deleteuser/${userid}`
  
        const response = await fetch(url, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const json = await response.json();
        return json

      } catch (error) {
        console.log(error)
      }
    }
    

  return (
    <usercontext.Provider value={{getuser,userdata,adduser,dltuser,updateuser}}>
        {props.children}
    </usercontext.Provider>
  )
}

export default Userstate;
export {usercontext};