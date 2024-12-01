import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

import { Chart as ChartJS, ArcElement, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, LinearScale, BarElement, Title, Tooltip, Legend);

const CSATChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/csat')
      .then(response => response.json())
      .then(data => {
        //console.log(data);
        if (Array.isArray(data)) {
          setData(data);
        } else if (data && Array.isArray(data.data)) {
          setData(data.data); // Adjust if wrapped in a "data" field
        } else {
          console.error('Invalid data format:', data);
          setData([]); // Fallback to an empty array
        }
      });
  }, []);

  if (!data) return <p>Cargando...</p>;

  const labels = data.map(item => item.score);
  const values = data.map(item => item.ticket_count);
  
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      width: '300px',
      //height: '380px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#f9f9f9',
    }}>
      <h2 style={{ margin: '0 0 10px 0', fontSize: '18px', color: '#333' }}>
      Satisfacción del Cliente (CSAT)
      </h2>
      <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#2c7be5' }}>
        {<Bar
      data={{
        labels: labels,
        datasets: [{
          label: '',
          data: values,
          backgroundColor: ['#36A2EB', '#800080', '#008000', '#4BC0C0', '#fff68f'],
          borderColor: 'rgba(153, 102, 255, 1)',
          borderWidth: 1,
        }],
      }}
    />}
      </p>
    </div>
    
  );
};

export default CSATChart;
