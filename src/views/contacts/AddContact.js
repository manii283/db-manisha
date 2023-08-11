import React, { useState, useEffect } from 'react'
import { CCol, CFormInput, CForm } from '@coreui/react'

const AddContact = () => {
  // const [contact, setContact] = useState({})

  const [name, setName] = useState({})

  useEffect(() => {
    // uploadContactDetails()
  }, [])

  const uploadContactDetails = async (event) => {
    event.preventDefault()

    const requestOptions = {
      method: 'POST',
      // headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify[{ name: 'name' }],
    }

    const response = await fetch('http://localhost:8000/contacts', requestOptions)
    const resData = await response.json()
    console.log(resData)
    // setContacts(resData)
  }
  return (
    <>
      <CForm className="row g-3" method="post" onSubmit={uploadContactDetails}>
        <CCol md={12}>
          <CFormInput
            type="text"
            id="name"
            name="name"
            label="Name"
            onChange={(event) => {
              setName(event.target.value)
            }}
          />
        </CCol>
        <CCol md={6}>
          <CFormInput type="text" id="email" name="email" label="Email" />
        </CCol>
        <CCol md={6}>
          <CFormInput type="number" id="phone" name="phone" label="Phone" />
        </CCol>
        <CCol md={12}>
          <CFormInput type="text" id="message" name="message" label="Message" />
        </CCol>
        <CCol md={12}>
          <CFormInput type="submit" name="submit" />
        </CCol>
      </CForm>
    </>
  )
}

export default AddContact