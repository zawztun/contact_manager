import React from 'react'
import {Link} from 'react-router-dom'
import ContactCard from './ContactCard'

const ContactList = (props) => {

    const deleteContactHandler = id => {
        props.getContactId(id)
    }

    const renderContacts = props.contacts.map(contact=>{
        return (
            <ContactCard 
                key = {contact.id}  
                contact = {contact} 
                clickHandler = {deleteContactHandler}
            />
        )
    })
    return (
            <div className = 'main'>
                <div className = 'ui celled list'>
                    <h2>Contact Lists</h2>
                <Link to = '/add'>
                    <button className = 'ui button green right'> Add Contact</button>
                </Link>            
                {renderContacts}
            </div>
            </div>  
    )
}

export default ContactList
