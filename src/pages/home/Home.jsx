import { PRODUCTS, USERS } from "../../App";
import Card from "../../components/card/Card";
import MyCharts from "../../components/charts/Charts";
import TableList from "../../components/list/TableList";
import "./home.scss";

function Home() {
  return (
    <div className="home">
      <section className="cards">
        <Card type={USERS} />
        <Card type={PRODUCTS} />
        <Card type={"orders"} />
        <Card type={"earnings"} />
      </section>
      <MyCharts />
      <div className="listtable">
        <h2 className="title">Lastest Transactions</h2>
        <TableList />
      </div>
    </div>
  );
}

export default Home;
