import React from 'react'
import { usercontext } from '../context/Userstate';
import { useRef } from 'react';
import { useContext } from 'react';

const Confirmationmodal = ({userid}) => {

    // Used context API here and using dltuser function defined in Userstate.js for API calling
    const {dltuser} = useContext(usercontext);

    const dismiss = useRef(0);
    const spinnerref = useRef(0);

    // function for calling delete API. Same logic implemented as in Form.js
    const confirmdlt = async ()=>{
        spinnerref.current.classList.remove("d-none")
        let check = await dltuser(userid);
        spinnerref.current.classList.add("d-none")
        if(check?.success===true){
            dismiss.current.click();
        }
        else{
            alert("Some Error Occurred! Please try again later")
        }
    }

  return (
    <>
    <div class="modal fade" id="confirmmodal" tabindex="-1" aria-labelledby="confirmmodallabel" aria-hidden="true">
    <div class="modal-dialog  modal-dialog-centered">
        <div class="modal-content">
        <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Confirmation</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            Are you Sure you want to proceed?
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-success" data-bs-dismiss="modal" ref={dismiss}>No</button>
            <button className="btn btn-danger d-flex justify-content-center align-items-center" onClick={confirmdlt}>
                <div className="spinner-border spinner-border-sm text-light d-none" ref={spinnerref} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <p className="fs-6 m-0 mx-2">Yes</p>
            </button>
        </div>
        </div>
    </div>
    </div>
      
    </>
  )
}

export default Confirmationmodal
