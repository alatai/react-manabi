import React, { useState } from 'react'

import './ExpenseForm.css'

const ExpenseForm = (props) => {
  // const [enteredTitle, setEnteredTitle] = useState('')
  // const [enteredAmount, setEnteredAmount] = useState('')
  // const [enteredDate, setEnteredDate] = useState('')

  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
  })

  const titleChangeHandler = (event) => {
    // setEnteredTitle(event.target.value)

    // setUserInput({
    //   ...userInput,
    //   enteredAmount: '',
    //   enteredDate: '',
    //   enteredTitle: event.target.value,
    // })

    // If you use this approach, React will guarantee that
    // the state snapshot it gives you here in this inner function,
    // will always be the latest state snapshot, keeping all scheduled
    // state updates in mind.
    // It's the safe way to ensure that you always operate on the latest state snapshot.
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value }
    })
  }

  const amountChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: event.target.value }
    })
  }

  const dateChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredDate: event.target.value }
    })
  }

  const submitHandler = (event) => {
    // Default JavaScript behavior
    // Blocking default click handing
    event.preventDefault()

    const expenseData = {
      title: userInput.enteredTitle,
      amount: +userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    }

    props.onSaveExpenseData(expenseData)

    setUserInput({
      enteredTitle: '',
      enteredAmount: '',
      enteredDate: '',
    })
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={userInput.enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        {/* Now we could add a click listener here to this add expense button.
            But this world not be the best way of listening here.
            Because indeed there is a default behavior built into the browser
            and built into form on web pages. 

            If a button especially with type submit is pressed instead of a form
            this overall form element will emit an event to which we can listen
            and that's the submit event. */}
        <button type="submit" onClick={() => {}}>
          Add Expense
        </button>
      </div>
    </form>
  )
}

export default ExpenseForm
