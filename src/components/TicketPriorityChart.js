import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';

const TicketPriorityChart = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/ticket-priority')
      .then(response => response.json())
      .then(data => {
        //console.log(data);
        setData(data);
      });
  }, []);

  if (!data) return <p>Cargando...</p>;

  const labels = data.map(item => item.priority);
  const values = data.map(item => item.count);

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
        Tickets por prioridad
      </h2>
      <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#2c7be5' }}>
        {<Doughnut
      data={{
        labels,
        datasets: [{
          data: values,
          backgroundColor: ['#0a75ad', '#800080', '#FF0000', '#4BC0C0', '#fff68f'],
        }],
      }}
    />}
      </p>
    </div>
  );
};

export default TicketPriorityChart;
