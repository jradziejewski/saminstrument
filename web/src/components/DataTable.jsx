import PropTypes from "prop-types";
import { Table, TableContainer, Paper } from "@mui/material";

export default function DataTable({ children }) {
  return (
    <TableContainer
      sx={{ maxWidth: 500, marginLeft: 15, marginTop: 10 }}
      component={Paper}
    >
      <Table aria-label="simple table">{children}</Table>
    </TableContainer>
  );
}

DataTable.propTypes = {
  children: PropTypes.node,
};
