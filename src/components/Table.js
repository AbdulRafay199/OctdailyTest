import React, { useContext, useEffect, useState } from 'react'
import '../style/Table.css'
import Tableitem from './Tableitem'
import { usercontext } from '../context/Userstate'


const Table = () => {

    const {getuser,userdata} = useContext(usercontext)

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

  return (
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
        <div className='container' style={{height:"35vh", overflowY:'scroll'}}>
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
                        filter==="1" &&(filtereduser.map((item,index)=>{
                            return <Tableitem item={item} index={index} key={index} />
                        }))
                        
                    }
                    {
                        filter==="0"&&(filtereduser.reverse().map((item,index)=>{
                            return <Tableitem item={item} index={index} key={index} />
                        }))
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Table
