import React from 'react'
import { BiEditAlt } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

const Tableitem = ({item,index,openConfirmationModal,confirmedit}) => {
  return (
    <>
    <tr>
        <th scope="row">{index+1}</th>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.rollno}</td>
        <td><BiEditAlt size="1.5rem" color='darkyellow' onClick={()=>confirmedit(item)} data-bs-toggle="modal" data-bs-target="#editmodal"/></td>
        <td><MdDelete size="1.5rem" color='darkred' onClick={()=>openConfirmationModal(item._id)} data-bs-toggle="modal" data-bs-target="#confirmmodal"/></td>
    </tr>
    </>
  )
}

export default Tableitem