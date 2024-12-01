import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ResponseTimeChart = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/average-response-time')
      .then(response => response.json())
      .then(data => setData(data.avg_response_time));
  }, []);

  if (!data) return <p>Cargando...</p>;

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
          Promedio de Atención
        </h2>
        <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#2c7be5' }}>
          {[data]} horas
        </p>
      </div>
    // <Bar
    //   data={{
    //     labels: ['Promedio'],
    //     datasets: [{
    //       label: 'Tiempo de Respuesta Promedio (horas)',
    //       data: [data],
    //       backgroundColor: 'rgba(75, 192, 192, 0.6)',
    //       borderColor: 'rgba(75, 192, 192, 1)',
    //       borderWidth: 1,
    //     }],
    //   }}
    // />
  );
};

export default ResponseTimeChart;
