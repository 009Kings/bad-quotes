import React from 'react'
import GetQuote from './GetQuote'

function Quote(props) {
  return (
    <div>
      <p>{props.quote}</p>
      <GetQuote 
        getQuote={props.callKanye}
        msg="Give me your wisdom, Kanye" />
      <GetQuote
        getQuote={props.callDad}
        msg="Nice to meet you, I'm Dad" />
    </div>
  )
}

export default Quote