import React,{useState, useEffect} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {v4 as uuid} from "uuid"
import Header from './components/Header'
import AddContact from './components/AddContact'
import ContactList from './components/ContactList'
import ContactDetail from './components/ContactDetail'
import './App.css'

const App = () => {
  const LOCAL_STORAGE_KEY =  'contacts'
  const [contacts, setContacts] = useState([])

  const addContactHandler = (contact) => {
    console.log(contact)
    setContacts([...contacts, {id: uuid(),...contact}])
  }

  const removeContactHandler =(id)=> {
      setContacts(contacts.filter(contact=> contact.id !==id))
  }

  useEffect(()=>{
    const reContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(reContacts) setContacts(reContacts)
  },[])

  useEffect(()=> {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  },[contacts])

  return (
   <div className = 'ui container'>
     <Router>
        <Header/>
        <Switch>
            <Route exact path = '/add' 
                  render = {(props)=> (
                    <AddContact {...props} addContactHandler = {addContactHandler}/>
                  )}
            />
            <Route exact path = '/'  
                    render = {(props)=>(
                      <ContactList {...props} contacts = {contacts} getContactId = {removeContactHandler}/>
                    )}
            />
            <Route
              exact path = '/contact/:id' component = {ContactDetail}/>
        </Switch>
     </Router>
     

   </div>
  )
}

export default App
