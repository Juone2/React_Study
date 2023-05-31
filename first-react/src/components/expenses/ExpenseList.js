import React from 'react'
import ExpenseItem from './ExpenseItem';
import '../style/ExpenseList.css'

const ExpenseList = ({ item }) => {
  if (item.length === 0) {
    return <h2 className='expenses-list__fallback'>Found no expenses</h2>
  } 

  return (
    <ui className="expense-list">
      {item.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ui>
  )
}

export default ExpenseList;