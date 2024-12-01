import React from 'react';
import ResponseTimeChart from './components/ResponseTimeChart';
import TicketVolumeChart from './components/TicketVolumeChart';
import CSATChart from './components/CSATChart';
import TicketStatusChart from './components/TicketStatusChart';
import TicketPriorityChart from './components/TicketPriorityChart';
import RequirementsPriorityChart from './components/RequirementsPriorityChart';

const App = () => {
  return (
    <div>
      <h1>Reporte de mesa de ayuda</h1>
      <p></p>
      {/* <ResponseTimeChart /> */}
      {/* <TicketVolumeChart /> */}
      <table>
      <tbody>
        <tr>
          <td>
          <TicketVolumeChart />
          </td>
          <td>
          
          </td>
          <td>

          </td>
          <td>
          </td>
        </tr>
        <tr>
        <td>
        <TicketStatusChart />
          </td>
          <td>
          <RequirementsPriorityChart />

          </td>
          <td>
          <ResponseTimeChart />
          <CSATChart />
          </td>
          <td>

          </td>
        </tr>
        <tr>
          <td>
          </td>
          <td>
          <TicketPriorityChart />
          </td>
          <td>
          </td>
          <td>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};

export default App;
// -----

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;




