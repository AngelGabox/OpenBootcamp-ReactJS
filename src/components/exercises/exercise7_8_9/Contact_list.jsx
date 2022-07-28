import React from 'react'
import { useState } from 'react'
import Contact from '../../../models/contact.class'
import ContactComponent from './Contact'
import ContactForm from './ContactForm'
const Contact_list = () => {

  const contact_1 = new Contact('Pedro', 'Ramirez', 'pedro@pedro.com', false )
  const contact_2 = new Contact('Ivan', 'Pardo', 'ivan@ivan.com', false)
  const contact_3 = new Contact('Angel', 'Martinez', 'angelosky@gmail.com', false)

  const [ contacts, setContacts] = useState([contact_1, contact_2, contact_3])

  const removeContact = (contact) => { 
      console.log('This contact is:', contact);
      const index = contacts.indexOf(contact);
      const tempContacts = [...contacts];
      tempContacts.splice(index, 1);
      setContacts(tempContacts);
   }

  const changeStatusOnline = (contact) => {
      console.log('This contact is:', contact);
      const index = contacts.indexOf(contact);
      const tempContacts = [...contacts];
      tempContacts[index].online = !tempContacts[index].online;
      setContacts(tempContacts);
   } 

  const addContact = (newContact) => { 
      const tempContacts = [...contacts]
      tempContacts.push(newContact)
      setContacts(tempContacts)
   }

  let contactsTable;

  const Table = () => {
    return (
        <table>
            <thead>
                <tr>
                    <th scope='col'>Name</th>
                    <th scope='col'>Lastname</th>
                    <th scope='col'>Email</th>
                    <th scope='col'>Status</th>
                </tr>
            </thead>
            <tbody>
                { contacts.map((contact, index) => {
                    return (
                            <ContactComponent
                                key={index} 
                                contact={contact}
                                changeStatusOnline={changeStatusOnline}
                                remove = {removeContact}
                            >
                            </ContactComponent>
                        )
                    }
                )}
            </tbody>
        </table>
    )
  }
  if(contacts.length > 0){
    contactsTable = <Table></Table>
  }else{
    contactsTable = (
      <div>
          <h3> There are no contacts to show</h3>
          <h4>Please, add one</h4>
      </div>
      )
  }
  return (
    <div>
      <div className='col-12'>
                <div className='card'>
                    {/* Card Header (title) */}
                    <div className='card-header p-3'>
                        <h5>
                            Your Tasks:
                        </h5>
                    </div>
                    {/* Card Body (content) */}
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={ {position: 'relative'} }>
                        {contactsTable}
                    </div>
                </div>
            </div>
      <ContactForm add={ addContact } length={contacts.length}></ContactForm>
    </div>
  )
}

export default Contact_list