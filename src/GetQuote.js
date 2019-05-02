import React from 'react'
import './GetQuote.css'

function GetQuote(props) {
  return (
    <button 
      className="GetQuote-btn"
      onClick={props.getQuote}>
      {props.msg}
    </button>
  )
}

export default GetQuote