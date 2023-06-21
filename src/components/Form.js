import React, { useContext, useState } from 'react'
import '../style/form.css'
import { usercontext } from '../context/Userstate'
import { useRef } from 'react'

const Form = () => {

    const [data,setdata] = useState({name:"", email:"", rollno:""})
    const {adduser} = useContext(usercontext)
    const spinnerref = useRef(0);

    const changehandler = (e)=>{
        setdata({...data, [e.target.id]:e.target.value})
    }

    const submithandler = async (e)=>{
        spinnerref.current.classList.remove("d-none")
        e.preventDefault()
        let json = await adduser(data)
        if(json?.success===true){
            spinnerref.current.classList.add("d-none")
        }
        else{
            spinnerref.current.classList.add("d-none")
            alert("Error Occured! Please try again later")
        }
    }

  return (
    <>
        <form onSubmit={submithandler} className='container mt-4 outerdiv mx-0'>
            <div class="mb-3 d-flex justify-content-space-evenly align-items-center flex-row">
                <div className="col-3 mx-2">
                    <label for="inputPassword" class="form-label fw-bold">Name</label>  
                    <input type="text" class="form-control" id="name" onChange={changehandler} value={data.name}/>
                </div>
                <div className="col-3 mx-2">
                    <label for="staticEmail" class="form-label fw-bold">Email</label>
                    <input type="email" class="form-control" id="email" onChange={changehandler} value={data.email}/>
                </div>
                <div className="col-3 mx-2">
                    <label for="rollno" class="form-label fw-bold">Roll No</label>  
                    <input type="text" class="form-control" id="rollno" onChange={changehandler} value={data.rollno}/>
                </div>
                <div className="col-3 mx-2">
                    <label for="rollno" class="form-label fw-bold" style={{visibility:"hidden"}}>Roll No</label>
                    <button className="btn btn-success d-flex justify-content-center align-items-center" type='submit'>
                        <div className="spinner-border spinner-border-sm text-light d-none" ref={spinnerref} role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <p className="fs-6 m-0 mx-2">Submit</p>
                    </button>   
                </div>
            </div>
        </form>

        {/* <form onSubmit={submithandler} className='container mt-4 outerdiv mx-0'>
            <div class="mb-3 d-flex justify-content-center flex-row">
                <div className="col-3">
                    <label for="inputPassword" class="form-label fw-bold">Name</label>  
                </div>
                <div className="col-9">
                    <input type="text" class="form-control" id="name" onChange={changehandler} value={data.name}/>
                </div>
            </div>
            <div class="mb-3 d-flex justify-content-center flex-row">
                <div className="col-3">
                    <label for="staticEmail" class="form-label fw-bold">Email</label>
                </div>
                <div className="col-9">
                    <input type="email" class="form-control" id="email" onChange={changehandler} value={data.email}/>
                </div>
            </div>
            <div class="mb-3 d-flex justify-content-center flex-row">
                <div className="col-3">
                    <label for="rollno" class="form-label fw-bold">Roll No</label>  
                </div>
                <div className="col-9">
                    <input type="text" class="form-control" id="rollno" onChange={changehandler} value={data.rollno}/>
                </div>
            </div>
            <div class="container d-flex justify-content-center align-items-center flex-row">
                <button className="btn btn-success d-flex justify-content-center align-items-center" type='submit'>
                    <div className="spinner-border spinner-border-sm text-light d-none" ref={spinnerref} role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <p className="fs-6 m-0 mx-2">Submit</p>
                </button>
            </div>
        </form> */}
    </>
  )
}

export default Form
