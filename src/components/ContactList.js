import React,{ useRef } from 'react'
import {Link} from 'react-router-dom'
import ContactCard from './ContactCard'

const ContactList = (props) => {
    const inputE = useRef('');
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
    const getSearchTerm = () => {
       props.searchKeyWord(inputE.current.value)
    }
    return (
            <div className = 'main'>
                <div className = 'ui celled list'>
                    <h2>Contact Lists</h2>
                    <div className = 'ui search'>
                        <div className = 'ui icon input'>
                            <input 
                            ref = {inputE}
                            type = 'text' placeholder= 'Search Contacts' 
                            className = 'prompt'
                            value = {props.term}
                            onChange = {getSearchTerm}
                            />
                            <i className = 'search icon'></i>
                    </div> 
                <Link to = '/add'>
                    <button className = 'ui button green right'> Add Contact</button>
                </Link>   
              
                </div>   
         
                {renderContacts.length > 0  ? renderContacts : 'No contacts Avaliable'}
                </div>
            </div>  
    )
}

export default ContactList
