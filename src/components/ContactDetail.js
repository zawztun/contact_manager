import React from 'react'
import {Link} from 'react-router-dom'
import avatar from '../images/avatar.jpg'

const ContactDetail = (props) => {
   const {name, email,address} = props.location.state.contact;
    return (
        <div className="ui link cards">
            <div className="card">
                <div className="image">
                    <img src= {avatar} alt = 'user'/>
                </div>
                <div className="content">
                    <div className="header">{name}</div>
                    <div className="description">{email}</div>
                    <div className = "description">{address}</div>
                </div>
                <div className = 'center'>
                <Link to = '/'>
                <button className = ' ui button blue center'>Go back to Contact List</button>
                </Link>
                </div>
            </div>
        </div>
    )
}

export default ContactDetail
