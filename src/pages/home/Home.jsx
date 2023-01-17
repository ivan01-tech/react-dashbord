import Card from "../../components/card/Card";
import MyCharts from "../../components/charts/Charts";
import Navbar from "../../components/navBar/navbar";
import "./home.scss";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <section className="cards">
        <Card type={"users"} />
        <Card type={"balance"} />
        <Card type={"orders"} />
        <Card type={"earnings"} />
      </section>
      <MyCharts />
    </div>
  );
}

export default Home;
