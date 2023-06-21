import React, { useContext, useEffect, useState } from 'react'
import '../style/Table.css'
import Tableitem from './Tableitem'
import { usercontext } from '../context/Userstate'
import Confirmationmodal from './Confirmationmodal'
import { BiChevronRight,BiChevronLeft } from "react-icons/bi";
import Editmodal from './Editmodal'



const Table = () => {

    const {getuser,userdata} = useContext(usercontext)
    const [userid,setuserid] = useState("")
    const [editdata,seteditdata] = useState({name:"", email:"", rollno:""})
    const [searchValue,setsearchvalue] = useState("")
    const [filter,setfilter] = useState("0")

    const filtereduser = userdata?.filter(element => {return element.name.toLowerCase().includes(searchValue.toLowerCase())})

    const handleSearch = (e)=>{
        setsearchvalue(e.target.value)
    }

    const handlefilter = (e)=>{
        setfilter(e.target.value)
    }

    useEffect(()=>{
        getuser();
    })

    const openConfirmationModal = (userid)=>{
        setuserid(userid)
    }

    const confirmedit = (data)=>{
        seteditdata({name:data.name, email:data.email, rollno:data.rollno})
        setuserid(data._id)
    }

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedResponses = filtereduser.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filtereduser.length / itemsPerPage);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
    <Confirmationmodal userid={userid}/>
    <Editmodal userid={userid} editdata={editdata} seteditdata={seteditdata}/>
    <div className='container'>
        <div className="row my-4">
            <div className="col-8">
                <div className="input-group mx-2" style={{borderRadius:"20px"}}>
                    <span className="input-group-text" id="basic-addon1" style={{backgroundColor:"transparent",border:"0px"}}><i className="bi bi-search"></i></span>
                    <input style={{backgroundColor:"transparent",border:"0px"}} type="text" value={searchValue} onChange={handleSearch} className="form-control" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
            </div>
            <div className="col-4">
                <div className="input-group mx-2" style={{borderRadius:"20px"}}>
                    <select className="form-select form-select-md mx-2" defaultValue="0" id='filter1' onChange={handlefilter} aria-label=".form-select-sm example" style={{backgroundColor:"transparent",border:"0px"}}>
                        <option value="0">Newest</option>
                        <option value="1">Oldest</option>
                    </select>
                </div>
            </div>
        </div>
        <div className='container'>
            <table class="table table-light">
                <thead>
                    <tr>
                    <th scope="col">Sr.</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Roll No.</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filter==="1" &&(displayedResponses.map((item,index)=>{
                            return <Tableitem item={item} index={index} key={index} openConfirmationModal={openConfirmationModal} confirmedit={confirmedit}/>
                        }))
                        
                    }
                    {
                        filter==="0"&&(displayedResponses.reverse().map((item,index)=>{
                            return <Tableitem item={item} index={index} key={index} openConfirmationModal={openConfirmationModal} confirmedit={confirmedit}/>
                        }))
                    }
                    <tr>
                        <td>
                            <b>Total Users:</b> {filtereduser.length}
                        </td>
                        <td>
                            <b>Items per page:</b> {itemsPerPage}
                        </td>
                        <td colSpan={5}>
                            <div className="container d-flex justify-content-end align-items-center">
                                <button className='btn btn-dark btn-sm mx-2' onClick={handlePreviousPage} disabled={currentPage === 1}>
                                    <BiChevronLeft/>
                                </button>
                                <span>{currentPage}/{totalPages}</span>
                                <button className='btn btn-dark btn-sm mx-2' onClick={handleNextPage} disabled={endIndex >= filtereduser.length}>
                                    <BiChevronRight/>
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    </>
  )
}

export default Table
