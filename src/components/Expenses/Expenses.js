import React, { useState } from 'react';
import './Expenses.css'
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';

function Expenses(props) {
    const [selectedYear, changeSelectedYear] = useState('All')
    let filteredExpenses = []

    const saveFilteredYear = (year) => {
        changeSelectedYear(year)
    }

    if(selectedYear === 'All') {
        filteredExpenses = props.expenses
    } else {
        filteredExpenses = props.expenses.filter(expense => String(expense.date.getFullYear()) === selectedYear)
    }

    let expensesContent = <p>No expenses found.</p>

    if(filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map(expense => 
            <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
        )
    }

    return(
        <Card className='expenses'>
            <ExpensesFilter selected = {selectedYear} onFilteredYearChange = {saveFilteredYear}/>
            {expensesContent}
        </Card>
    )
}

export default Expenses;