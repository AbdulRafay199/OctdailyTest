import React from 'react'
import Table from './Table'
import Form from './Form'

const MainPage = () => {
  return (
    <>

    <div className='container d-flex justify-content-center align-items-center flex-column mt-3'>
      {/* this inner div is for rendering two logo and one heading in a row */}
        <div className="container d-flex justify-content-center align-items-center flex-row">
          <img src={require('../assets/octdaily.png')} alt="octdaily" width="100px"/>
          <h4 className='fs-4 fw-bold mx-5'>Octdaily Test</h4>
          <img src={require('../assets/NEDLogo.png')} alt="octdaily" width="100px"/>
        </div>

        {/* this component contains the code for adding data through form */}
        <Form/>
        {/* this component contains the code for a html table that shows user data */}
        <Table/>
    </div>
    </>
  )
}

export default MainPage
