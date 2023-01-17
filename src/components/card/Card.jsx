import React from "react";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import "./card.scss";

function Card({ type }) {
  let content = {};
  switch (type) {
    case "users":
      content = {
        color: "255, 165, 0",
        title: "users",
        icon: <PersonOutlineIcon style={{ color: `rgb(255, 165, 0)` }} />,
        text: "see all users",
        price: 260,
        percent: 40,
        arrow: <KeyboardArrowUpIcon />,
      };
      break;
    case "balance":
      content = {
        title: "my balance",
        icon: (
          <AccountBalanceWalletOutlinedIcon style={{ color: `rgb(255,0,0)` }} />
        ),
        text: "see details",
        percent: 5,
        arrow: <KeyboardArrowUpIcon />,
        price: 78.2,
        color: "255,0,0",
      };
      break;
    case "earnings":
      content = {
        title: "earnings",
        icon: (
          <MonetizationOnOutlinedIcon style={{ color: `rgb(0, 128, 0)` }} />
        ),
        text: "view net earnings",
        percent: 12,
        arrow: <KeyboardArrowDownIcon />,
        price: 4.6,
        color: "0, 128, 0",
      };
      break;
    case "orders":
      content = {
        title: "orders",
        icon: <ShoppingCartIcon style={{ color: `rgb(128, 0, 128)` }} />,
        text: "view all orthers",
        percent: 2,
        arrow: <KeyboardArrowUpIcon />,
        price: 578,
        color: "128, 0, 128",
      };
      break;

    default:
      break;
  }

  let price = type === "earnings" || type === "balance" ? "$ " : "";
  price += content.price;
  price += type === "earnings" || type === "balance" ? "k" : "";

  return (
    <article className="card">
      <div className="left">
        <div className="title">{content.title}</div>
        <div className="content">{price}</div>
        <div className="footer">{content.text}</div>
      </div>
      <div className="right">
        <div>
          {content.arrow}
          <span>+12 %</span>
        </div>

        <div
          style={{ backgroundColor: `rgba(${content.color},0.4)` }}
          className="icon"
        >
          {content.icon}
        </div>
      </div>
    </article>
  );
}

export default Card;
