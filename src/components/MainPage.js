import React from 'react'
import Table from './Table'
import Form from './Form'

const MainPage = () => {
  return (
    <>
    <div className='container d-flex justify-content-center align-items-center flex-column my-5'>
        <h4 className='fs-4 fw-bold'>Octdaily Test</h4>
        <Form/>
        <Table/>
    </div>
    </>
  )
}

export default MainPage
