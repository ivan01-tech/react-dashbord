import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useThemeContextProvider } from "../../context/ThemeContext";

function Feature() {
  const percent = 0.8;
  const { themeMode } = useThemeContextProvider();
  const mode = themeMode.isDarkMode ? "dark" : "";
  return (
    <div className={`right ${""}`}>
      <div className="header">
        <h3>Total Revenue</h3>
        <div>
          <MoreVertIcon />
        </div>
      </div>
      <div className="content">
        <div className="progress-wrap">
          <div
            className={`progress-bar ${""}`}
            style={{
              background: `conic-gradient(teal ${percent}turn, #e0e1e2 ${percent}turn ${
                1 - percent
              }turn)`,
            }}
            percent={`${percent * 100}%`}
          ></div>
        </div>
        <h4>Total Sales made today</h4>
        <div className={`title ${mode}`}> $ 430</div>

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
  );
}

export default Feature;
