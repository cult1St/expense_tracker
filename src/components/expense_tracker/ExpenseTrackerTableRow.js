import React from 'react'

const ExpenseTrackerTableRow = ({expense, index}) => {
  return (
    <tr key={index}>
        <td>{expense.name}</td>
        <td>{expense.amount}</td>
        <td>{expense.date}</td>
    </tr>
  )
}

export default ExpenseTrackerTableRow