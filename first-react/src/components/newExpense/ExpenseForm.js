import React, { useState } from 'react'
import './NewExpenseForm.css';

const ExpenseForm = ({ onSaveExpenseData, onCencel }) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState(0);

  const titleChangeHandler = e => {
    setEnteredTitle(e.target.value);
  }

  const handlechangeAmount = e => {
    setEnteredAmount(e.target.value); 
  }

  const handlechangeDate = (e) => {
    setEnteredDate(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input 
            type='text' 
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input 
            type='text' 
            min="0.01" 
            step="0.01" 
            value={enteredAmount}
            onChange={handlechangeAmount} 
          />
        </div>
        <div className='new- expense__control'>
          <label>Date</label>
          <input 
            type='date' 
            min='2019-01-01' 
            max="2022-12-31" 
            value={enteredDate}
            onChange={handlechangeDate}
          />
        </div>
      </div>
        <div className='new-expense__actions'>
          <button type='submit' onClick={onCencel}>Cancel</button>
          <button type='submit'>Add expense</button>
        </div>
      </form>
  )
}

export default ExpenseForm