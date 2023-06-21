import React from 'react'
import Table from './Table'
import Form from './Form'

const MainPage = () => {
  return (
    <>
    <div className='container d-flex justify-content-center align-items-center flex-column my-4'>
        <div className="container d-flex justify-content-center align-items-center flex-row">
          <img src={require('../assets/octdaily.png')} alt="octdaily" width="100px"/>
          <h4 className='fs-4 fw-bold mx-5'>Octdaily Test</h4>
          <img src={require('../assets/NEDLogo.png')} alt="octdaily" width="100px"/>
        </div>
        <Form/>
        <Table/>
    </div>
    </>
  )
}

export default MainPage
