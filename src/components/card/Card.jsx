import React, { useEffect, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import "./card.scss";
import { collection, getDocs, query, where } from "firebase/firestore";
import { fireStore } from "../../firebase-config";
import { PRODUCTS, USERS } from "../../App";
import { useAuthContext } from "../../context/AuthContext";

function Card({ type }) {
  const { seterrMsg, setError, error, errMsg } = useAuthContext();

  const [Count, setCount] = useState(null);
  const [Diff, setDiff] = useState(null);
  let content = {};
  switch (type) {
    case USERS:
      content = {
        color: "255, 165, 0",
        title: "users",
        icon: <PersonOutlineIcon style={{ color: `rgb(255, 165, 0)` }} />,
        text: "see all users",
        price: 260,
      };
      break;
    case PRODUCTS:
      content = {
        title: "PROducts",
        icon: (
          <AccountBalanceWalletOutlinedIcon style={{ color: `rgb(255,0,0)` }} />
        ),
        text: "see details",
        price: 78.2,
        color: "255,0,0",
      };
      break;
    case "earnings":
      content = {
        title: "earnings",
        isMoney: true,

        icon: (
          <MonetizationOnOutlinedIcon style={{ color: `rgb(0, 128, 0)` }} />
        ),
        text: "view net earnings",
        price: 4.6,
        color: "0, 128, 0",
      };
      break;
    case "orders":
      content = {
        title: "orders",
        icon: <ShoppingCartIcon style={{ color: `rgb(128, 0, 128)` }} />,
        text: "view all orthers",
        price: 578,
        isMoney: true,
        color: "128, 0, 128",
      };
      break;

    default:
      break;
  }

  let price = content.isMoney ? "$ " + content.price + " k" : Count;
  const pahtType = type === USERS ? USERS : type === PRODUCTS ? PRODUCTS : "";

  useEffect(() => {
    const getData = async function () {
      const today = new Date();
      const lastMonth = new Date(new Date().setMonth(today.getMonth() - 1));
      const prevMonth = new Date(new Date().setMonth(today.getMonth() - 2));

      const lastMonthQuery = query(
        collection(fireStore, pahtType),
        where("timestamp", "<=", today),
        where("timestamp", ">", lastMonth)
      );
      const prevMonthQuery = query(
        collection(fireStore, pahtType),
        where("timestamp", "<=", lastMonth),
        where("timestamp", ">", prevMonth)
      );

      try {
        const lastMonthData = await getDocs(lastMonthQuery);
        const prevMonthData = await getDocs(prevMonthQuery);
        // console.log(lastMonthData, prevMonthData);
        setCount(lastMonthData.docs.length);
        setDiff(
          ((lastMonthData.docs.length - prevMonthData.docs.length) /
            prevMonthData.docs.length) *
            100
        );
        setError(false);
        seterrMsg("");
      } catch (err) {
        setError(true);
        seterrMsg(err.message);
      }
    };
    pahtType && getData();
  }, [pahtType, setError, seterrMsg]);

  return (
    <article className="card">
      {error && <span>{errMsg}</span>}
      <div className="left">
        <div className="title">{content.title}</div>
        <div className="content">{price}</div>
        <div className="footer">{content.text}</div>
      </div>
      <div className="right">
        <div className={`${Diff > 0 ? "positive" : "negative"}`}>
          {Diff > 0 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          {Diff && <span>{Diff > 0 ? "+" + Diff : Diff} %</span>}
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
