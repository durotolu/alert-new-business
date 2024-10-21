import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "../styles/Chart.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const [filter, setFilter] = useState("last30Days");
  const [selectedOption, setSelectedOption] = useState("moneyIn");

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value);
  };

  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: selectedOption === "moneyIn" ? "Money In" : "Money Out",
        data: [
          100000, 500000, 300000, 200000, 450000, 600000, 300000, 200000,
          450000, 600000, 450000, 600000, 300000,
        ],
        backgroundColor: "rgba(250, 250, 255, 1)",
        borderColor: "rgba(85, 64, 235, 1)",
        borderWidth: { top: 2 },
        borderRadius: { topLeft: 4, topRight: 4 },
        borderSkipped: false,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (tickValue: string | number) => {
            if (typeof tickValue === "number") {
              return `N${tickValue.toLocaleString()}`;
            }
            return tickValue;
          },
        },
      },
    },
  };

  return (
    <div className="bar-chart-container">
      <div className="controls">
        <div className="radio-buttons">
          <label>
            <button
              name="moneyOption"
              value="moneyIn"
            >
              Money In
            </button>
          </label>
          <label>
            <button
              name="moneyOption"
              value="moneyOut"
            >
              Money Out
            </button>
          </label>
        </div>
        <div className="filter-dropdown">
          <select value={filter} onChange={handleFilterChange}>
            <option value="last30Days">Last 30 Days</option>
            <option value="last60Days">Last 60 Days</option>
            <option value="last90Days">Last 90 Days</option>
            <option value="yearToDate">Year to Date</option>
          </select>
        </div>
      </div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
