import React from 'react'
import ExpenseTrackerForm from './expense_tracker/ExpenseTrackerForm'
import ExpenseTrackerTable from './expense_tracker/ExpenseTrackerTable'

const ExpenseTracker = () => {
    const [expenses, setExpenses] = React.useState([]);
    const addExpense = (expense) => {
        setExpenses([...expenses, expense]);
    }
  return (
    <div className='container' >
       
        <ExpenseTrackerForm addExpense={addExpense} />

        <ExpenseTrackerTable expenses={expenses} />
    </div>
  )
}

export default ExpenseTracker