import "./chart.scss";
import { LineChart } from "../LineCharts/LineChart";
import Feature from "../feature/Feature";

function MyCharts() {
  return (
    <div className="charts">
      <Feature />
      <div className="left">
        <LineChart />
      </div>
    </div>
  );
}

export default MyCharts;
