import React, { useState } from "react";
import './ExpenseForm.css'
import FillingAlert from "./FillingAlert";

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')
    const [fillingState, setFillingState] = useState(true)

    const submitHandler = (event) => {
        event.preventDefault()

        if(enteredTitle === '' || enteredAmount === '' || enteredDate === '') {
            setFillingState(false)
            return
        }

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        }

        props.onSaveExpenseData(expenseData)

        setEnteredAmount('')
        setEnteredDate('')
        setEnteredTitle('')
    }

    const inputChangeHandler = (identifier, value) => {
        if(identifier === 'title') {
            setEnteredTitle(value)
        } else if(identifier === 'amount') {
            setEnteredAmount(value)
        } else {
            setEnteredDate(value)
        }
    }

    const fillingHandler = () => {
        setFillingState(true)
    }
    return(
        <div className="expense-form">
            {!fillingState && <FillingAlert onAccept = {fillingHandler}/>}
            <form onSubmit={submitHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input type="text" value={enteredTitle} onChange={(event) => inputChangeHandler('title', event.target.value)}/>
                    </div>
                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input value={enteredAmount} type="number" min="0.01" step="0.01" onChange={(event) => inputChangeHandler('amount', event.target.value)}/>
                    </div>
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input value={enteredDate} type="date" min="2019-01-01" max="2022-12-31" onChange={(event) => inputChangeHandler('date', event.target.value)}/>
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button onClick={props.onCancel}>Cancel</button>
                    <button type="submit">Add Expense</button>
                </div>
            </form>
        </div>
    )
}

export default ExpenseForm