import React from 'react'
import { useRef } from 'react';
import { useContext } from 'react';
import { usercontext } from '../context/Userstate';
import '../style/Editmodal.css'


const Editmodal = ({editdata,seteditdata,userid}) => {

    // Used context API here and using updateuser function defined in Userstate.js for API calling
    const {updateuser} = useContext(usercontext);

    const dismiss = useRef(0);
    const spinnerref = useRef(0);

    //function to store updated data in the state
    const changehandler = (e)=>{
        seteditdata({...editdata, [e.target.id]:e.target.value})
    }

    //form submission function
    const confirmupdate = async ()=>{
        spinnerref.current.classList.remove("d-none")
        let check = await updateuser(userid,editdata);
        spinnerref.current.classList.add("d-none")
        if(check.success===true){
            dismiss.current.click();
        }
        else{
            alert("Some Error Occurred! Please try again later")
        }
    }

  return (
    <>
      <div class="modal fade" id="editmodal" tabindex="-1" aria-labelledby="editmodallabel" aria-hidden="true">
        <div class="modal-dialog  modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="editModalLabel">Edit User Data</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form onSubmit={confirmupdate} className='container mt-4 outerdiv1 mx-0'>
                        <div class="mb-3 d-flex justify-content-center flex-row">
                            <div className="col-3">
                                <label for="inputPassword" class="form-label fw-bold">Name</label>  
                            </div>
                            <div className="col-9">
                                <input type="text" class="form-control" id="name" value={editdata.name} onChange={changehandler}/>
                            </div>
                        </div>
                        <div class="mb-3 d-flex justify-content-center flex-row">
                            <div className="col-3">
                                <label for="staticEmail" class="form-label fw-bold">Email</label>
                            </div>
                            <div className="col-9">
                                <input type="email" class="form-control" id="email" value={editdata.email} onChange={changehandler}/>
                            </div>
                        </div>
                        <div class="mb-3 d-flex justify-content-center flex-row">
                            <div className="col-3">
                                <label for="rollno" class="form-label fw-bold">Roll No</label>  
                            </div>
                            <div className="col-9">
                                <input type="text" class="form-control" id="rollno" value={editdata.rollno} onChange={changehandler}/>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" ref={dismiss}>Close</button>
                    <button className="btn btn-success d-flex justify-content-center align-items-center" onClick={confirmupdate}>
                        {/* spinner */}
                        <div className="spinner-border spinner-border-sm text-light d-none" ref={spinnerref} role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <p className="fs-6 m-0 mx-2">Save</p>
                    </button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Editmodal
