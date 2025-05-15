import React from 'react'

const CartTable = ({cart}) => {
    console.log(cart)
  return (
    <table className='table table-primary table-responsive'>
        <thead>
            <tr>
                <th>S/N</th>
                <th>Product</th>
                <th>Quantity</th>
                <th>Amount</th>
            </tr>
        </thead>
        <tbody>
            {
                cart.map((item, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.title}</td>
                        <td>{item.qty}</td>
                        <td> &#8358; {(Number(item.price) * Number(item.qty))}</td>
                    </tr>
                ))
            }
        </tbody>
        <tfoot>
            <tr>
                <td colSpan={3}>Total</td>
                <td>&#8358; {cart.reduce((total, item) => Number(total) + (Number(item.price) * Number(item.qty)), 0)}</td>
                
            </tr>
        </tfoot>

    </table>
  )
}

export default CartTable