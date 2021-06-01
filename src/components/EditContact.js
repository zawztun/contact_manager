import React, { Component } from 'react'

class EditContact extends Component {
    constructor(props){
        super(props)
        const {id, name, email} = props.location.state.contact;
        this.state= {
            id,
            name,
            email
        }
    }
    
    add = (e) => {
        e.preventDefault()
        if(this.state.name === '' && this.state.email === ''){
            alert('All the fields are mandatory')
            return;
        }
        this.props.updateContactHandler(this.state)
        this.setState({name:'', email:''});
            console.log(this.props)
            this.props.history.push('/')   
    }

    render() {
        return (
            <div>
                <h2>Update Contact</h2>
                <form className = 'ui form' onSubmit={this.add}>
                    <div className = 'field'>
                        <label>Name</label>
                        <input
                            type= 'text'
                            name = 'name'
                            placeholder= "Name"
                            value = {this.state.name}
                            onChange = {e => this.setState({name: e.target.value})}
                        />
                    </div>
                   
                    <div className = 'field'>
                        <label>Email</label>
                        <input
                            type= 'text'
                            name = 'email'
                            placeholder= "Email"
                            value = {this.state.email}
                            onChange = {e => this.setState({email: e.target.value})}
                        />
                    </div>
                    <button className = 'ui blue button'>Update</button>
                </form>
            </div>
        )
    }
}

export default EditContact
