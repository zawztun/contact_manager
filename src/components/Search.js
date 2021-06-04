import React,{useRef} from 'react'

const Search = (props) => {
    const inputE = useRef('');
    
    const getSearchTerm = () => {
        props.searchKeyWord(inputE.current.value)
     }
    return (
        <div className = 'ui  icon input'>
            <input 
                ref = {inputE}
                type = 'text' placeholder= 'Search Contacts' 
                className = 'prompt'
                value = {props.term}
                onChange = {getSearchTerm}
            />
            <i className = 'search icon'></i>
      </div> 
    )
}

export default Search
