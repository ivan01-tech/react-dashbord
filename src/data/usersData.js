export const columns = [
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


export const rows = [
  {
    id: 1,
    email: "ivansilatsa@gmal.com",
    username: "Snow",
    status: "active",
    user: "Jon",
    age: 35,
    image: "c",
  },
  {
    id: 2,
    username: "Lannister",
    status: "passive",
    user: "Cersei",
    age: 42,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH2DPwvSyCd5JPLbC6nahZBsaSaN6zVIFZOFSm35jcZA&s",
    email: "ivansilatsa@gmal.com"
  },
  {
    id: 3,
    username: "Lannister",
    status: "pending",
    user: "Jaime",
    age: 45,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH2DPwvSyCd5JPLbC6nahZBsaSaN6zVIFZOFSm35jcZA&s",
    email: "ivansilatsa@gmal.com"
  },
  {
    id: 4,
    username: "Stark",
    status: "active",
    user: "Arya",
    age: 16,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH2DPwvSyCd5JPLbC6nahZBsaSaN6zVIFZOFSm35jcZA&s",
    email: "ivansilatsa@gmal.com"
  },
  {
    id: 5,
    username: "Targaryen",
    status: "passive",
    user: "Daenerys",
    age: null,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH2DPwvSyCd5JPLbC6nahZBsaSaN6zVIFZOFSm35jcZA&s",
    email: "ivansilatsa@gmal.com"
  },
  {
    id: 6,
    username: "Melisandre",
    status: "pending",
    user: null,
    age: 150,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH2DPwvSyCd5JPLbC6nahZBsaSaN6zVIFZOFSm35jcZA&s",
    email: "ivansilatsa@gmal.com"
  },
  {
    id: 7,
    username: "Clifford",
    status: "active",
    user: "Ferrara",
    age: 44,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH2DPwvSyCd5JPLbC6nahZBsaSaN6zVIFZOFSm35jcZA&s",
    email: "ivansilatsa@gmal.com"
  },
  {
    id: 8,
    username: "Frances",
    status: "passive",
    user: "Rossini",
    age: 36,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH2DPwvSyCd5JPLbC6nahZBsaSaN6zVIFZOFSm35jcZA&s",
    email: "ivansilatsa@gmal.com"
  },
  {
    id: 9,
    username: "Roxie",
    status: "pending",
    user: "Harvey",
    age: 65,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH2DPwvSyCd5JPLbC6nahZBsaSaN6zVIFZOFSm35jcZA&s",
    email: "ivansilatsa@gmal.com"
  },
];
