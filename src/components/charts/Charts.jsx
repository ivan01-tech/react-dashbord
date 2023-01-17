import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import "./chart.scss";
// import { Line } from "react-chartjs-2";
import { LineChart } from "../LineCharts/LineChart";

function MyCharts() {
  const percent = 0.8;
  return (
    <div className="charts">
      <div className="right">
        <div className="header">
          <h3>Total Revenue</h3>
          <div>
            <MoreVertIcon />
          </div>
        </div>
        <div className="content">
          <div className="progress-wrap">
            <div
              className="progress-bar"
              style={{
                background: `conic-gradient(#6299cf ${percent}turn, #e0e1e2 ${percent}turn ${
                  1 - percent
                }turn)`,
              }}
              percent={`${percent * 100}%`}
            ></div>
          </div>
          <h4>Total Sales made today</h4>
          <div className="title"> $ 430</div>

          <div className="footer">
            <div>
              Previous transaction, Processing last payments may not be include
            </div>
            <div>
              <div className="footer-item">
                <p>Target</p>
                <div className="positive">
                  <KeyboardArrowUpIcon /> <span>$ 12.4K</span>
                </div>
              </div>
              <div className="footer-item">
                <p>Last Month</p>
                <div className="negative">
                  <KeyboardArrowDownIcon /> <span>$ 12.4K</span>
                </div>
              </div>
              <div className="footer-item">
                <p>Last Week</p>
                <div className="positive">
                  <KeyboardArrowUpIcon /> <span>$ 12.4K</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* the chart */}
      <div className="left">
        {/* <Line
          data={{
            labels: ["Jan", "Fev", "Mar", "Apr", "May", "Jun"],
            datasets: [
              {
                label: "Sales for 2023 (M)",
                data: [3, 2, 1, 5, 3],
              },
            ],
          }}
        /> */}
        <LineChart />
      </div>
    </div>
  );
}

export default MyCharts;
