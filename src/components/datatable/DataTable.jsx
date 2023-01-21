import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import "./datatable.scss";
import {
  columns as userColumns,
  rows as usersRows,
} from "../../data/usersData";
import { Link, useNavigate } from "react-router-dom";
import { useThemeContextProvider } from "../../context/ThemeContext";

function DataTable({ title = "Users List" }) {
  const { themeMode } = useThemeContextProvider();
  const mode = themeMode.isDarkMode ? "dark" : "";

  const navigate = useNavigate();
  const id = "myid";

  const handleViewUsers = function () {
    navigate(`/users/${id}`);
  };

  const action = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: function (params) {
        return (
          <div className="cellAction">
            <div onClick={handleViewUsers} className="actionBtnDisplay">
              View
            </div>
            <div className="actionBtnDelete">Delete</div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="DataTable">
      <div className="head">
        <h1>{title}</h1>
        <div>
          <Link to={"/users/new"}>Add new user</Link>
        </div>
      </div>

      <Box sx={{ height: 400, width: "100%" }} className={mode}>
        <DataGrid
          rows={usersRows}
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
