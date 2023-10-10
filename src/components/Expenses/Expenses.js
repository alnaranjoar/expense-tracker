import React, { useState } from 'react';
import './Expenses.css'
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

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

    return(
        <Card className='expenses'>
            <ExpensesFilter selected = {selectedYear} onFilteredYearChange = {saveFilteredYear}/>
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items={filteredExpenses}/>
        </Card>
    )

}

export default Expenses;