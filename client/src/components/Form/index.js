import React from 'react'
import './style.css'


const Form = ({ name, value, onChange, placeholder, onClick }) => {
    return (
        <div className="form-wrapper">

            <div className='header-wrapper'><h2 className="header">Google Books</h2>

            
           
            <form className='form'>
                <input className='search-input'
                    autoComplete="off"
                    value={value}
                    name={name}
                    onChange={onChange}
                    placeholder={placeholder} 
                    type="text" />

                <button type="submit" className="submit-btn" onClick={onClick}>Search</button>
            </form>
            </div>


        </div>
    )
}


export default Form