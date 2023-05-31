import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = ({ onAddExpense }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleSaveData = enteredData => {
    const expenseData = {
      ...enteredData,
      id: Math.random.toString(),
    };
    onAddExpense(expenseData);
    setIsEditing(false);
  }

  const handleStartEdit = () => setIsEditing(true);

  const handleStopEdit = () => setIsEditing(false);

  return (
    <div className='new-expense'>
      {!isEditing && (
        <button onClick={handleStartEdit}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm 
          onSaveExpenseData={handleSaveData} 
          onCancel={handleStopEdit}
        />
      )}
    </div>
  )
}

export default NewExpense;