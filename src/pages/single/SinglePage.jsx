import { LineChart } from "../../components/LineCharts/LineChart";
import TableList from "../../components/list/TableList";
import "./Single.scss";

function SinglePage() {
  return (
    <div className="single-wrapper">
      <div className="top">
        <div className="left">
          <div className="head">
            <h3> Informations</h3>
            <div className="edit">Edit</div>
          </div>

          <div className="user-info">
            <div>
              <img
                src="data:image/jpeg;base64,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"
                alt=""
              />
            </div>
            <div className="info">
              <h2 className="title-info">Jane Doe</h2>
              <div>
                <strong>Email : </strong>
                <span>janedoe@gmail.com</span>
              </div>
              <div>
                <strong>Phone : </strong>
                <span>+237 696763200</span>
              </div>
              <div>
                <strong>Adresse : </strong>
                <span>Dla Pk14 market,rue Avenue 2345</span>
              </div>
              <div>
                <strong>Country : </strong>
                <span>Cameroon</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <LineChart />
        </div>
      </div>
      <div className="bottom">
        <h2 className="title">Lastest Transactions</h2>
        <TableList />
      </div>
    </div>
  );
}

export default SinglePage;
