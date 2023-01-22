import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import "./datatable.scss";
import { columns as userColumns } from "../../data/usersData";
import { Link, useNavigate } from "react-router-dom";
import { useThemeContextProvider } from "../../context/ThemeContext";
import { useEffect, useState } from "react";
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { fireStore } from "../../firebase-config";
import { useAuthContext } from "../../context/AuthContext";

function DataTable({ title = "Users List", path = "users" }) {
  const { themeMode } = useThemeContextProvider();
  const { error, setError, errMsg, seterrMsg } = useAuthContext();
  const mode = themeMode.isDarkMode ? "dark" : "";

  const navigate = useNavigate();

  const [data, setData] = useState([]);

  const handleViewUsers = function (id) {
    navigate(`/${path}/${id}`);
  };
  const handleDelete = async function (id) {
    try {
      await deleteDoc(doc(fireStore, path, id));
      setError(false);
      seterrMsg("");
    } catch (err) {
      setError(true);
      seterrMsg(err.message);
      console.log(err);
    }
  };

  const action = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: function (params) {
        return (
          <div className="cellAction">
            <div
              onClick={() => handleViewUsers(params.row.id)}
              className="actionBtnDisplay"
            >
              View
            </div>
            <div
              className="actionBtnDelete"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  useEffect(() => {
    const unsub = onSnapshot(collection(fireStore, "users"), function (snap) {
      const newDta = [];
      snap.docs.forEach((elt) => newDta.push({ ...elt.data(), id: elt.id }));
      setData(newDta);
    });

    return unsub;
  }, []);

  return (
    <div className="DataTable">
      {error && <h3>{errMsg}</h3>}
      <div className="head">
        <h1>{title}</h1>
        <div>
          <Link to={"/users/new"}>Add new user</Link>
        </div>
      </div>

      <Box sx={{ height: 400, width: "100%" }} className={mode}>
        <DataGrid
          rows={data}
          columns={userColumns.concat(action)}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
          className={mode}
        />
      </Box>
    </div>
  );
}
export default DataTable;
