import React from 'react'
import PropTypes from 'prop-types'
import Contact from '../../../models/contact.class'

const ContactComponent = ({ contact, remove, changeStatusOnline }) => {
  const styleRemoveSpan = {
    marginLeft: '10px',
  }
  return (
    <tr className='fw-normal'>
            <th>
                <span className='ms-2'>{contact.name}</span>
            </th>
            <td className='align-middle'>
                <span>{contact.lastname}</span>
            </td>
            <td className='align-middle'>
                <span>{contact.email}</span>
            </td>
            <td className='align-middle'>
                <span>{contact.online? 'online': 'disconnect'}</span>
            </td>
            {/* <td className='align-middle'>
                <span >X</span>
            </td> */}
            <td className='align-middle'>
                <i className='bi-trash task-action' style={{color: 'tomato'}} onClick={() => remove(contact)}></i>
            </td>
        </tr>
  )
}

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact),
    changeStatus: PropTypes.func.isRequired
}

export default ContactComponent