import { useNavigate } from "react-router-dom";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { User } from "../../api/Users/users";

interface Props {
  data: User[];
}
const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "firstName", headerName: "First name", width: 160 },
  { field: "lastName", headerName: "Last name", width: 160 },
  {
    field: "email",
    headerName: "Email",
    align: "left",
    headerAlign: "left",
    width: 200,
  },
  {
    field: "age",
    headerName: "Age",
    align: "left",
    headerAlign: "left",
    width: 130,
  },
  { field: "gender", headerName: "Gender", width: 90 },
];

export const UsersTable = ({ data }: Props) => {
  const navigate = useNavigate();

  const rows = data.map((user) => {
    return {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      age: user.age,
      gender: user.gender,
    };
  });
  const handleRowDoubleClick = (id: number) => {
    navigate(`/users/${id}`);
  };
  return (
    <div style={{ height: 630, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        onRowDoubleClick={(user: any) => handleRowDoubleClick(user.id)}
      />
    </div>
  );
};
