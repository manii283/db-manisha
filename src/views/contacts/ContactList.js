import React, { useState, useEffect } from 'react'

const ContactList = () => {
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    loadContactsFromServer()
  }, [])

  const loadContactsFromServer = async () => {
    const response = await fetch('http://localhost:8000/contacts')
    const resData = await response.json()
    console.log(resData)
  }

  return <div>ContactList</div>
}

export default ContactList
