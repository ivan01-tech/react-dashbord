export const userColumns = [
  { field: "id", headerName: "ID", width: 100 },
  {
    field: "username",
    headerName: "User",
    width: 130,
    renderCell: function (params) {
      return (
        <div className="cellWithImage">
          <img src={params.row.image} className="cellImg" alt="Avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 130,
  },
  {
    field: "address",
    headerName: "Address",
    width: 100,
  },
  {
    headerName: "Name and Surname",
    field: "nameandsurname",
    width: 200,
  },
  {
    headerName: "Country",
    field: "country",
    width: 100
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      const status = ["pending", "active", "passive"][generateStatus()]
      return <div className={`cellWithStatus ${status}`}>
        {status}
      </div >
    }
  },
];

const generateStatus = () => Math.round(Math.random() * 2)


export const productsColumns = [
  { field: "id", headerName: "ID", width: 100 },
  {
    width: 130,
    headerName: "Title",
    field: "title",
  },
  {
    width: 100,
    headerName: "Price",
    field: "price",
  },
  {
    width: 100,
    headerName: "Society",
    field: "society",
  },
  {
    width: 150,
    headerName: "Qauntity",
    field: "qauntity",
  },
  {
    field: "image",
    headerName: "Image",
    width: 130,
    renderCell: function (params) {
      return (
        <div className="cellWithImage">
          <img src={params.row.image} className="cellImg" alt="Avatar" />
        </div>
      );
    },
  },
]
