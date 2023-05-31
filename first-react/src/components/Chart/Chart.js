import React from 'react'
import ChartBar from './ChartBar';
import './Chart.css'

const Chart = ({ dataPoint }) => {

  const dataPointValues = dataPoint.map((dataPoint) => (
    dataPoint.value
  ))

  const totalMax = Math.max(...dataPointValues)

  return (
    <div className='chart'>
      {dataPoint.map((item) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value} 
          maxValue={totalMax}
          label={dataPoint.label}
        />
      ))}
    </div>
  )
}

export default Chart;   