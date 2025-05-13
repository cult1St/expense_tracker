import React, {useState} from 'react'



const ExpenseTrackerForm = ({addExpense}) => {
    const [expense, setExpense] = useState({
        name: '',
        amount: '',
        date: ''
    });
    const handleChange = (e) => {
        var {name, value} = e.target;
        setExpense({
            ...expense,
            [name]: value
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(expense);
        // Add logic to save the expense
        addExpense(expense);
        setExpense({
            name: '',
            amount: '',
            date: ''
        });
    }
  return (
    <div className='row justify-content-center mb-3'>
                  
        <div className='col-md-8'>
            <form onSubmit={handleSubmit} className="p-4 border rounded bg-light">
                <h2 className="text-center mb-4">Expense Tracker</h2>
                <div className="mb-3">
                    <label htmlFor="expense" className="form-label">Expense</label>
                    <input type="text" name='name' value={expense.name} onChange={handleChange} className="form-control" id="expense" />
                </div>
                <div className="mb-3">
                    <label htmlFor="amount" className="form-label">Amount</label>
                    <input type="number" name='amount' value={expense.amount} onChange={handleChange} className="form-control" id="amount" />
                </div>
                <div className="mb-3">
                    <label htmlFor="date" className="form-label">Date</label>
                    <input type="date" name='date' value={expense.date} onChange={handleChange} className="form-control" id="date" />
                </div>
                <button type="submit" className="btn btn-primary">Add Expense</button>
            </form>
        </div>
    </div>
  )
}

export default ExpenseTrackerForm