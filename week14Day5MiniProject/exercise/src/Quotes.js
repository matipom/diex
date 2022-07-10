import React from 'react'
import quotes from './QuotesDatabase'

class Quotes extends React.Component{
    constructor(){
        super()
        console.log(quotes)

    }

    render(){
        return(
            <div style={{ border : "1px solid white"}}>
                <h1></h1>
                <p></p>
                <button>New quote</button>
            </div>
        )
    }
}

export default Quotes