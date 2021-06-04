import React from 'react'
import {Link} from 'react-router-dom'
import ContactCard from './ContactCard'
import Search from './Search'

const ContactList = (props) => {
    const deleteContactHandler = id => {
        props.getContactId(id)
    }
    const renderContacts = props.contacts.map(contact=>{
        return (
            <ContactCard 
                key = {contact.id}  
                contact = {contact} 
                deleteContactHandler = {deleteContactHandler}
            />
        )
    })
   
    return (
            <div className = 'main'>
                <div className = 'ui celled list'>
                    <h2>Contact Lists</h2>
                    <div className = 'ui segment'> 
                         <Search {...props}/>                             
                    </div> 
                    <Link to = '/add'>
                            <button className = 'ui button green right'> Add Contact</button>
                    </Link>    
                    {renderContacts.length > 0  ? renderContacts : 'No contacts Avaliable'}
                </div>
            </div>  
    )
}

export default ContactList
