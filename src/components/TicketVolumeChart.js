import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';

import { Chart as ChartJS, ArcElement, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, LinearScale, BarElement, Title, Tooltip, Legend);

const TicketVolumeChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/ticket-volume')
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
      })
      .catch(err => console.error('Error fetching data:', err));
  }, []);

  if (!data) return <p>Cargando...</p>;

  const labels = data.map(item => item.category);
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
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#f9f9f9',
    }}>
      <h2 style={{ margin: '0 0 10px 0', fontSize: '18px', color: '#333' }}>
        Total de tickets: {data.reduce((acc, item) => acc + item.ticket_count, 0)}
      </h2>
      <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#2c7be5' }}>
        {<Doughnut
      data={{
        labels,
        datasets: [{
          data: values,
          backgroundColor: ['#008000', '#0a75ad', '#008000', '#4BC0C0', '#fff68f'],
        }],
      }}
    />}
      </p>
    </div>
    
    
  );
};

export default TicketVolumeChart;
