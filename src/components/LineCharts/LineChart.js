import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line, } from "react-chartjs-2";
export function LineChart() {


  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
  );

  const options = {
    responsive: true,
    PointStyle: 'circle',
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        postMessage: "top",
        text: "Last 6 month (income)",
      },
    },
  };

  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Sales for 2023 (M)",
        data: [7, 2, 5, 3, 4, 1],
        borderColor: "rgb(255, 206,86)",
        backgroundColor: "rgba(255, 206,86, 0.6)",
        pointColor: "rgba(255, 206,86, 0.6)",
        pointBorderColor: "rgba(255, 206,86, 0.6)",
      }, {
        fill: true,
        label: "Sales for 2022 (M)",
        data: [5, 7, 1, 3, 2, 7],
        borderColor: "rgb(54, 162, 235)",
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        pointColor: "rgba(54, 162, 235, 0.5)",
        pointBorderColor: "rgba(54, 162, 235, 0.5)"
      }
    ],
  };


  return <Line options={options} data={data} />;
}
