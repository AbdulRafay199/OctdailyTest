import React, { useContext, useEffect, useState } from 'react'
import '../style/Table.css'
import Tableitem from './Tableitem'
import { usercontext } from '../context/Userstate'
import Confirmationmodal from './Confirmationmodal'
import { BiChevronRight,BiChevronLeft } from "react-icons/bi";
import { FaSort } from "react-icons/fa";
import Editmodal from './Editmodal'



const Table = () => {

    //using context API for better state management.
    const {getuser,userdata} = useContext(usercontext)

    //this userid state is used to pass it to confirmationmodal where user data deletion task is performed
    const [userid,setuserid] = useState("")

    //this editdata state is used to pass it to editmodal where user data is updated
    const [editdata,seteditdata] = useState({name:"", email:"", rollno:""})

    //we use the below states for searching and sorting fetaure
    const [searchValue,setsearchvalue] = useState("")
    const [filter,setfilter] = useState("0")

    //in this line we filter the userdata using js built-in filter method and return those user's data whose name is matched with search value 
    const filtereduser = userdata?.filter(element => {return element.name.toLowerCase().includes(searchValue.toLowerCase())})

    //function to change the search state value
    const handleSearch = (e)=>{
        setsearchvalue(e.target.value)
    }

    //function to change the filter state value
    const handlefilter = (e)=>{
        setfilter(e.target.value)
        document.getElementsByClassName("name")[0].style.color = "black";
        document.getElementsByClassName("email")[0].style.color = "black";
    }

    //Sorting the data Alphabatically
    const [order,setorder] = useState("asc")
    const [alphasorteddata,setalphasorteddata] = useState([])
    const alphasorteddatafilt = alphasorteddata?.filter(element => {return element.name.toLowerCase().includes(searchValue.toLowerCase())})

    const sortAlphabatically = (colname)=>{

        if(colname==="name"){
            document.getElementsByClassName(colname)[0].style.color = "orange";
            document.getElementsByClassName("email")[0].style.color = "black";
        }
        else if(colname==="email"){
            document.getElementsByClassName(colname)[0].style.color = "orange";
            document.getElementsByClassName("name")[0].style.color = "black";
        }

        setfilter("2")
        if(order==="asc"){
            const sorted = [...filtereduser].sort((a,b)=>  a[colname].toLowerCase() > b[colname].toLowerCase()? 1:-1)
            setalphasorteddata(sorted)
            setorder("dsc")
        }
        else if(order==="dsc"){
            const sorted = [...filtereduser].sort((a,b)=> a[colname].toLowerCase() < b[colname].toLowerCase()? 1:-1)
            setalphasorteddata(sorted)
            setorder("asc")
        }
    }

    //useeffect hook is used to fetch all user's data by calling getuser() functon whenever this component is rendered.
    useEffect(()=>{
        getuser();
    })

    //function to change userid state
    const openConfirmationModal = (userid)=>{
        setuserid(userid)
    }

    //function to change editdata state and userid state 
    const confirmedit = (data)=>{
        seteditdata({name:data.name, email:data.email, rollno:data.rollno})
        setuserid(data._id)
    }

    // Pagination logic 
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    //getting index on the basis of current page number
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const totalPages = Math.ceil(filtereduser.length / itemsPerPage);
    
    //dividing the user data according to the starting and ending index of current page
    if(currentPage>totalPages){
        var displayedResponses = filtereduser
    }
    else{
        displayedResponses = filtereduser.slice(startIndex, endIndex);
    }

    //function to go on previous page or basically decrementing current page value
    const handlePreviousPage = () => {
        if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
        }
    };

    //function to go on next page or basically incrementing current page value
    const handleNextPage = () => {
        if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
        }
    };

  return (
    <>
    {/* these modals will be open whenever user clicks on edit or delete button defined in tableitem.js file */}
    <Confirmationmodal userid={userid}/>
    <Editmodal userid={userid} editdata={editdata} seteditdata={seteditdata}/>

    <div className='container'>
        {/* use bootstrap grid to show searchbar and filter menu in a row */}
        <div className="row mt-4">
            <div className="col-sm-12 col-md-8">
                <div className="input-group mx-2 my-2" style={{borderRadius:"20px"}}>
                    <span className="input-group-text" id="basic-addon1" style={{backgroundColor:"transparent",border:"0px"}}><i className="bi bi-search"></i></span>
                    <input style={{backgroundColor:"transparent",border:"0px"}} type="text" value={searchValue} onChange={handleSearch} className="form-control" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
            </div>
            <div className="col-sm-12 col-md-4">
                <div className="input-group mx-2 my-2" style={{borderRadius:"20px"}}>
                    <select className="form-select form-select-md mx-2" defaultValue="0" id='filter1' onChange={handlefilter} aria-label=".form-select-sm example" style={{backgroundColor:"transparent",border:"0px"}}>
                        <option value="0">Newest</option>
                        <option value="1">Oldest</option>
                    </select>
                </div>
            </div>
        </div>

        {/* html table to show data */}
        <div className='container customtable my-2'>
            <table class="table table-light">
                <thead>
                    <tr>
                    <th scope="col">Sr.</th>
                    <th scope="col">Name <FaSort className='name' style={{cursor:"pointer"}} onClick={()=>{sortAlphabatically("name")}}/></th>
                    <th scope="col">Email <FaSort className='email' style={{cursor:"pointer"}} onClick={()=>{sortAlphabatically("email")}}/></th>
                    <th scope="col">Roll No.</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                    </tr>
                </thead>

                {/* In body of table we showing all user data(filtered and paginated) stored in an array using js built-in map method which returns each element of an array one by one  */}
                <tbody>

                    {
                        filter==="0"&&(displayedResponses.reverse().map((item,index)=>{
                            return <Tableitem item={item} index={index} key={index} openConfirmationModal={openConfirmationModal} confirmedit={confirmedit}/>
                        }))
                    }
                    {
                        filter==="1" &&(displayedResponses.map((item,index)=>{
                            return <Tableitem item={item} index={index} key={index} openConfirmationModal={openConfirmationModal} confirmedit={confirmedit}/>
                        }))
                        
                    }
                    {filter==="2" && (
                            currentPage>totalPages?
                            (alphasorteddatafilt.map((item,index)=>{
                                return <Tableitem item={item} index={index} key={index} openConfirmationModal={openConfirmationModal} confirmedit={confirmedit}/>
                            }))
                            :
                            (alphasorteddatafilt.slice(startIndex, endIndex).map((item,index)=>{
                                return <Tableitem item={item} index={index} key={index} openConfirmationModal={openConfirmationModal} confirmedit={confirmedit}/>
                            }))
                        )
                    }

                    {/* this is the last row showing total users, itemsperpage and previous and next button for pagination */}
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
