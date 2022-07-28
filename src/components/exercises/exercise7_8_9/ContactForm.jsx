import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import Contact from '../../../models/contact.class';
import { Email } from '@mui/icons-material';

const ContactForm = ({add, length}) => {

    const nameRef = useRef('');
    const lastnameRef = useRef('');
    const emailRef = useRef('')

    function addContact(e){
        e.preventDefault();
        const newContact = new Contact(
            nameRef.current.value,
            lastnameRef.current.value,
            emailRef.current.value,
            false
        );
        add(newContact);
    }

    return (
        <form onSubmit={addContact} className='d-flex justify-content-center align-items-center mb-4'>
            <div className='form-outline flex-fill'>
                <h3>Add Contact</h3>
                <input ref={nameRef} id='inputName' type='text' className='form-control form-control-lg' required autoFocus placeholder='Name'/>

                <input ref={lastnameRef} id='inputLastname' type='text' className='form-control form-control-lg' required placeholder='Lastname'/>
                
                <input ref={emailRef} id='inputEmail' type='text' className='form-control form-control-lg' required placeholder='Email'/>
                <button type='submit' className='btn btn-success btn-lg ms-2'>
                    {length > 0 ? 'Add Contact' : 'Add your first contact'}
                </button>
            </div>
        </form>
    );
}

ContactForm.protoTypes = {
    add: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired
}

export default ContactForm;
