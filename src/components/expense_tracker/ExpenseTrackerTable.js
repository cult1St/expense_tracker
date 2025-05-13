import React from 'react'
import ExpenseTrackerTableRow from './ExpenseTrackerTableRow'

const ExpenseTrackerTable = ({expenses}) => {
  return (
    <div className="row ">
        <div className="col-12"></div>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Expense</th>
                        <th>Amount</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {expenses.length > 0 ? (expenses.map((expense, index) => (
                       <ExpenseTrackerTableRow expense={expense} index={index} />
                    )) ) : (
                        <tr>
                            <td colSpan="3" className="text-center">No expenses added yet</td>
                        </tr>
                    )}
                </tbody>
                <tfoot>
                    <tr>
                        <td>Total</td>
                        <td>{expenses.reduce((total, expense) => Number(total) + Number(expense.amount), 0)}</td>
                        
                    </tr>
                </tfoot>
            </table>

    </div>
  )
}

export default ExpenseTrackerTable