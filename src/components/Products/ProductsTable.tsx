import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Product } from "../../api/products/products";

interface Props {
  data: Product[];
}

export const ProductsTable = ({ data }: Props) => {
  return (
    <TableContainer sx={{ border: 1, borderRadius: 2 }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 600 }}>ID</TableCell>
            <TableCell sx={{ fontWeight: 600 }}>Title&nbsp;</TableCell>
            <TableCell sx={{ fontWeight: 600 }}>Description&nbsp;</TableCell>
            <TableCell sx={{ fontWeight: 600 }}>Price&nbsp;</TableCell>
            <TableCell sx={{ fontWeight: 600 }}>Stock&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((product) => (
            <TableRow key={product.id}>
              <TableCell>{product.id}</TableCell>
              <TableCell>{product.title}</TableCell>
              <TableCell>{product.description}</TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>{product.stock}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
