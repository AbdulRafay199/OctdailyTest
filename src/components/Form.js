import React, { useContext, useState } from 'react'
import '../style/form.css'
import { usercontext } from '../context/Userstate'
import { useRef } from 'react'

const Form = () => {

    //this state is responsible for storing form data and pass it to the body when API is hit
    const [data,setdata] = useState({name:"", email:"", rollno:""})

    //using context API for better state management. Destructuring the object provided by usercontext and using add user function defined in Userstate.js file
    const {adduser} = useContext(usercontext)
    const spinnerref = useRef(0);

    //this function is called on onChange event listner on every input tag
    const changehandler = (e)=>{
        //using spread operator we set each input tag value to the corresponding key. each key name should be same as given to the id of each input tag
        setdata({...data, [e.target.id]:e.target.value})
    }

    // function for form submit 
    const submithandler = async (e)=>{
        //spinner on button is shown
        spinnerref.current.classList.remove("d-none")

        //we use below line to prevent window refresh when form is submitted
        e.preventDefault()

        //using async await we store in json variable whatever is returned from adduser function
        let json = await adduser(data)

        //here we check if API hit is successful or not. if yes then spinner disappears but if not alert is shown for error
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
    {/* there is a form tag for data submission... onSubmit calls submithandler function to submit the data through API call */}
        <form onSubmit={submithandler} className='container mt-2 outerdiv mx-0'>
            {/* here we use bootstrap grid . use 3 column for 3 fields and fourth column for submit button */}
            <div class="mb-3 row d-flex justify-content-space-evenly align-items-center flex-row">

                <div className="col-sm-12 col-md-3 my-sm-2">
                    <label for="inputPassword" class="form-label fw-bold">Name</label>  
                    <input type="text" class="form-control" id="name" onChange={changehandler} value={data.name}/>
                </div>

                <div className="col-sm-12 col-md-3 my-sm-2">
                    <label for="staticEmail" class="form-label fw-bold">Email</label>
                    <input type="email" class="form-control" id="email" onChange={changehandler} value={data.email}/>
                </div>

                <div className="col-sm-12 col-md-3 my-sm-2">
                    <label for="rollno" class="form-label fw-bold">Roll No</label>  
                    <input type="text" class="form-control" id="rollno" onChange={changehandler} value={data.rollno}/>
                </div>

                <div className="col-sm-12 col-md-3 my-sm-2">

                    {/* this label has no work here. we use it just to give button proper styling  */}
                    <label for="rollno" class="form-label fw-bold" style={{visibility:"hidden"}}>ignore it</label>

                    <button className="btn btn-success d-flex justify-content-center align-items-center" type='submit'>
                        {/* here this button has spinner, so whenever API is hit, this spinner will be shown and when API finish its working d-none class will be added to it using useref hook*/}
                        <div className="spinner-border spinner-border-sm text-light d-none" ref={spinnerref} role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <p className="fs-6 m-0 mx-2">Submit</p>
                    </button>   

                </div>
            </div>
        </form>
    </>
  )
}

export default Form
