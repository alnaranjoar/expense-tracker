import React, { useState } from 'react';
import './Expenses.css'
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';

function Expenses(props) {
    const [selectedYear, changeSelectedYear] = useState('2020')

    const saveFilteredYear = (year) => {
        changeSelectedYear(year)
    }

    return(
        <Card className='expenses'>
            <ExpensesFilter selected = {selectedYear} onFilteredYearChange = {saveFilteredYear}/>
            {props.expenses.map(expense => 
                <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />
            )}
        </Card>
    )
}

export default Expenses;