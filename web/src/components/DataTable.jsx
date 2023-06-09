import PropTypes from "prop-types";
import { Table, TableContainer, Paper } from "@mui/material";

export default function DataTable({ children }) {
  return (
    <TableContainer
      sx={{ maxWidth: 850, marginLeft: 15, marginTop: 15, marginBottom: 5 }}
      component={Paper}
    >
      <Table aria-label="simple table">{children}</Table>
    </TableContainer>
  );
}

DataTable.propTypes = {
  children: PropTypes.node,
};
