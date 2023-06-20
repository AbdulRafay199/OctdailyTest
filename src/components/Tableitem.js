import React from 'react'
import { BiEditAlt } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

const Tableitem = ({item,index}) => {
  return (
    <>
    <tr>
        <th scope="row">{index+1}</th>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.rollno}</td>
        <td><BiEditAlt size="1.5rem" color='darkyellow'/></td>
        <td><MdDelete size="1.5rem" color='darkred'/></td>
    </tr>
    </>
  )
}

export default Tableitem