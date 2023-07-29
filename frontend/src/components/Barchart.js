import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Barchart = () => {
    const data = [
        { category: '07/07/23', value1: 25, value2: 30 },
        { category: '09/07/23', value1: 40, value2: 35 },
        
      ];
    
  return (
    <BarChart width={800} height={500} data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="category" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="value1" fill="blue" name="Value 1" />
    <Bar dataKey="value2" fill="skyblue" name="Value 2" />
  </BarChart>
  )
}

export default Barchart