import React from 'react';
import {useContext} from "react"; 
import './Visualisations.css';
import { EmissionContext } from '../../EmissionContext';
import { Pie, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const Visualisation = () => {
  const { emissionData } = useContext(EmissionContext);

  const pieData = {
  labels: ['Coal Burning', 'Methane Emission', 'Renewable Offset', 'Tree Absorption'],
  datasets: [
    {
      label: 'Emission Sources',
      data: [
        emissionData.coal,
        emissionData.methane,
        emissionData.renewable,
        emissionData.trees
      ],
      backgroundColor: [
        '#FF6384',   
        '#FFCE56',   
        '#36A2EB',   
        '#4BC0C0'    
      ],
      borderColor: '#fff',
      borderWidth: 1
    }
  ]
};


  const barData = {
    labels: ['Coal Burning', 'Methane', 'Renewables', 'Trees'],
    datasets: [
      {
        label: 'Emission Quantity (MT)',
        data: [1200, 800, 300, 400], // sample data
        backgroundColor: [
        '#c90255',   
        '#dad103',   
        '#023ab1',   
        '#029a94'    
      ],
      }
    ]
  };

  return (
    <div className="visualisation-container">
      <h1>Emission Visualisation</h1>
      <div className="chart-wrapper">
        <div className="chart-box">
          <h2>Emission Share (Pie)</h2>
          <Pie data={pieData} />
        </div>
        <div className="chart-box">
          <h2>Activity-wise Emissions (Bar)</h2>
          <Bar data={barData} />
        </div>
      </div>
    </div>
  );
};

export default Visualisation;
