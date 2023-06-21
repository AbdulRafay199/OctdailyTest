import React from 'react'
import { BiEditAlt } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

const Tableitem = ({item,index,openConfirmationModal,confirmedit}) => {

  //props passed to this component are destructered above

  return (
    <>
    {/* this is the one row for one user. This component is returned for each user in map method, thus multiple rows are rendered */}
    <tr>
        <th scope="row">{index+1}</th>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.rollno}</td>

        {/* edit button */}
        <td><BiEditAlt size="1.5rem" color='darkyellow' onClick={()=>confirmedit(item)} data-bs-toggle="modal" data-bs-target="#editmodal"/></td>

        {/* delete button */}
        <td><MdDelete size="1.5rem" color='darkred' onClick={()=>openConfirmationModal(item._id)} data-bs-toggle="modal" data-bs-target="#confirmmodal"/></td>
    </tr>
    </>
  )
}

export default Tableitem