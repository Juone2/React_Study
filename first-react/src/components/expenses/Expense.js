import React, { useState } from 'react'
import '../style/Expense.css'
import Card from './Card';
import ExpensesFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';

function Expense({ data }) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const handleFilterChange = selectedYear => {
    setFilteredYear(selectedYear);
  }  

  const filtered = data.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  })

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={handleFilterChange}
        />
        <ExpenseChart expenses={filtered} />
        <ExpenseList item={filtered} />
      </Card>
    </div>
  )
}

export default Expense