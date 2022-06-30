// This is a function provided by the React library
// and this function allows us to define values as
// state where changes to these values should reflect
// in the component function being called again, which
// is a key difference to the regular variable we're using here.
// import React, { useState } from 'react'

import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'

import './ExpenseItem.css'

// A component in React is just a JavaScript function.
// A special kind of function special regarding what it returns.

const ExpenseItem = (props) => {
  // so-called React hook
  // All these React hooks can be recognized by the fact
  // that start with the word 'use' in their names.
  // Must be called inside the function.
  // Must be called directly inside such component function.

  // A variable where changes will lead this component function
  // to be called again.
  // First element is a point at that managed value
  // Second element is a function which we can later call to set a new title.

  // And useState, this hook always returns an array with exactly two elements.
  // const [title, setTitle] = useState(props.title)

  // const clickHandler = () => {
    // setTitle('Updated')
  // }

  // Must only have one root element here per return statement
  // or per JSX code snippet.
  return (
    // Inside of JSX code snippets, in these curly braces between them,
    // you can run basic JavaScript expressions.
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* React exposes all these default events
          as props which start with on.
          If you would add parentheses here, JavaScript world execute this. */}
      {/* <button onClick={clickHandler}>Change Title</button> */}
    </Card>
  )
}

export default ExpenseItem
