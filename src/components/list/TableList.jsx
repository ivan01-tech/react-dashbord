import "./list.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useThemeContextProvider } from "../../context/ThemeContext";

function TableList() {
  const { themeMode } = useThemeContextProvider();
  const mode = themeMode.isDarkMode ? "dark" : "";

  function createData(
    id,
    product,
    img,
    customer,
    date,
    amount,
    method,
    status
  ) {
    return { id, product, customer, date, amount, method, status, img };
  }

  const rows = [
    createData(
      345767,
      "ASUS ROG Car",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH2DPwvSyCd5JPLbC6nahZBsaSaN6zVIFZOFSm35jcZA&s",
      "Kakeu Ivan01",
      "3 June",
      2000,
      "Cash On Delivery",
      "active"
    ),
    createData(
      235767,
      "ASUS ROG Strix",
      "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      "Djiokeng Sonia",
      "1 march",
      2000,
      "Online",
      "pending"
    ),
    createData(
      345767,
      "ASUS ROG Car",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH2DPwvSyCd5JPLbC6nahZBsaSaN6zVIFZOFSm35jcZA&s",
      "Kakeu Ivan01",
      "3 June",
      2000,
      "Cash On Delivery",
      "active"
    ),
    createData(
      235767,
      "ASUS ROG Strix",
      "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      "Djiokeng Sonia",
      "1 march",
      2000,
      "Online",
      "pending"
    ),
    createData(
      345767,
      "ASUS ROG Car",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH2DPwvSyCd5JPLbC6nahZBsaSaN6zVIFZOFSm35jcZA&s",
      "Kakeu Ivan01",
      "3 June",
      2000,
      "Cash On Delivery",
      "active"
    ),
  ];

  return (
    <div className={`list ${mode}`}>
      <TableContainer component={Paper} className={mode}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="list-item">ID</TableCell>
              <TableCell className="list-item">Product</TableCell>
              <TableCell className="list-item">Customer</TableCell>
              <TableCell className="list-item">Date</TableCell>
              <TableCell className="list-item">Amount</TableCell>
              <TableCell className="list-item">Method</TableCell>
              <TableCell className="list-item">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row" className={mode}>
                  {row.id}
                </TableCell>
                <TableCell className={`list-product ${mode}`}>
                  <div>
                    <img src={row.img} alt="" width={32} height={32} />
                    <p>{row.product}</p>
                  </div>
                </TableCell>
                <TableCell className={mode}>{row.customer}</TableCell>
                <TableCell className={mode}>{row.date}</TableCell>
                <TableCell className={mode}>{row.amount}</TableCell>
                <TableCell className={mode}>{row.method}</TableCell>
                <TableCell className={mode}>
                  <p className={`status ${row.status}`}>{row.status}</p>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default TableList;
