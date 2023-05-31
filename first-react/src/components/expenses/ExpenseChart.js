import React from 'react'
import Chart from '../Chart/Chart'

function ExpenseChart({ expenses, amount }) {

  const chartDataPoint = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Set', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ]

  for (const expense of expenses) {
    const expenseMonth = expense.date.getMonth();
    chartDataPoint[expenseMonth].expense += amount;

  }

  return (
    <div>
      <Chart dataPoint={chartDataPoint} />
    </div>
  )
}

export default ExpenseChart