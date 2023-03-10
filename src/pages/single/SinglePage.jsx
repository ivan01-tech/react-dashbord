import { useEffect, useState } from "react";
import { LineChart } from "../../components/LineCharts/LineChart";
import TableList from "../../components/list/TableList";
import "./Single.scss";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { fireStore } from "../../firebase-config";
import { useAuthContext } from "../../context/AuthContext";
import notFoundImage from "../../assets/undraw_empty.svg";
import { USERS } from "../../App";
import { productsSource, userSource } from "../../data/formSourceData";

function SinglePage({ path = "users" }) {
  const { id } = useParams();
  const { seterrMsg, setError, error, errMsg } = useAuthContext();

  const [Data, setData] = useState(null);
  const dataSource = path === USERS ? userSource : productsSource;
  const labels = dataSource.map((src) => src.label);
  const ids = dataSource.map((src) => src.id);

  useEffect(() => {
    (async function () {
      try {
        const docSnap = await getDoc(doc(fireStore, path, id));

        if (docSnap.exists()) {
          console.log("Document Data:", docSnap.data());
          setData(docSnap.data());
          setError(false);
          seterrMsg("");
        } else {
          setError(true);
          seterrMsg("No such document!");
        }
      } catch (err) {
        setError(true);
        seterrMsg(err.message);
      }
    })();
  }, [path, id, setError, seterrMsg]);

  return (
    <>
      {error && (
        <div className="error">
          <h3>{errMsg}</h3>
          <img src={notFoundImage} alt="" />
        </div>
      )}
      {Data && (
        <div className="single-wrapper">
          <div className="top">
            <div className="left">
              <div className="head">
                <h3> Informations</h3>
                <div className="edit">Edit</div>
              </div>

              <div className="user-info">
                <div>
                  <img src={Data?.image} alt="avatar" />
                </div>
                <div className="info">
                  <h2 className="title-info">{Data[ids[0]]}</h2>
                  {labels.map((label, ind) => (
                    <div>
                      <strong>{label}: </strong>
                      <span>{Data[ids[ind]]}</span>
                    </div>
                  ))}
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
      )}
    </>
  );
}

export default SinglePage;
