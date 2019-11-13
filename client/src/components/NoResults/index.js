import React from 'react'

const headerstyled = {
    textAlign:"center"
}
const NoResults = () =>{
    return(
        <div style={headerstyled} className="no-results-wrapper"><h4>No Books To Display</h4></div>
    )
}

export default NoResults