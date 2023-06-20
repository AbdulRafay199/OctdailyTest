import React, { useContext, useState } from 'react'
import '../style/form.css'
import { usercontext } from '../context/Userstate'

const Form = () => {

    const [data,setdata] = useState({name:"", email:"", rollno:""})
    const {adduser} = useContext(usercontext)

    const changehandler = (e)=>{
        setdata({...data, [e.target.id]:e.target.value})
    }

    const submithandler = (e)=>{
        e.preventDefault()
        adduser(data)
    }

  return (
    <>
    <>
        <form onSubmit={submithandler} className='container mt-4 outerdiv'>
            <div class="mb-3 d-flex justify-content-center flex-row" style={{width:"50%"}}>
                <label for="inputPassword" class="col-sm-2 col-form-label">Name:</label>
                <input type="text" class="form-control" id="name" onChange={changehandler} value={data.name}/>
            </div>
            <div class="mb-3 d-flex justify-content-center flex-row" style={{width:"50%"}}>
                <label for="staticEmail" class="col-sm-2 col-form-label">Email:</label>
                <input type="email" class="form-control" id="email" onChange={changehandler} value={data.email}/>
            </div>
            <div class="mb-3 d-flex justify-content-center flex-row" style={{width:"50%"}}>
                <label for="staticEmail" class="col-sm-2 col-form-label">Roll No:</label>
                <input type="text" class="form-control" id="rollno" onChange={changehandler} value={data.rollno}/>
            </div>
            <div class="mb-3 d-flex justify-content-center align-items-center flex-row">
                <button className="btn btn-dark" type='submit'>Submit</button>
            </div>
        </form>
    </>
    </>
  )
}

export default Form
