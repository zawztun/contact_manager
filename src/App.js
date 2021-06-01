import React,{useState, useEffect} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {v4 as uuid} from "uuid"
import api from './API/api'
import Header from './components/Header'
import AddContact from './components/AddContact'
import ContactList from './components/ContactList'
import ContactDetail from './components/ContactDetail'
import EditContact from './components/EditContact'
import './App.css'

const App = () => {
  //const LOCAL_STORAGE_KEY =  'contacts'
  const [contacts, setContacts] = useState([])


  const apiContacts = async ()=> {
    const response = await api.get('/contacts')
    return response.data
  }
  const addContactHandler = async (contact) => {
    const request = {
      id:uuid(),
      ...contact
  
    }
  const response = await api.post('/contacts', request)
    //setContacts([...contacts, {id: uuid(),...contact}])
    setContacts([...contacts, response.data]);

  }

  const removeContactHandler = async(id)=> {
      await api.delete(`/contacts/${id}`)
      setContacts(contacts.filter(contact=> contact.id !==id))
  }

  const updateContactHandler = async(contact)=> {
   const response = await api.put(`/contacts/${contact.id}`, contact)

    setContacts(contacts.map(contact=>{
      const {id} = response.data
      return contact.id === id ? {...response.data} : contact;
    }))
}


  useEffect(()=>{
    const getAllContacts = async ()=> {
      const allcontacts = await apiContacts();
      if(allcontacts) setContacts(allcontacts)
    }
    getAllContacts()
    // const reContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    // if(reContacts) setContacts(reContacts)
  },[])
  useEffect(()=> {
    // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
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
              <Route exact path = '/edit'  
                    render = {(props)=>(
                      <EditContact {...props}  updateContactHandler = {updateContactHandler}/>
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
