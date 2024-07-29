import { Container } from "@mui/material";
import React, { useEffect } from "react";
import classes from "../../styleContainer/Detail.module.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { EmployeesGetById } from "../../api/EmployeesList";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const { employeeDetail } = useSelector((state) => state.Employees);
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) dispatch(EmployeesGetById({ id }));
  }, [dispatch, id]);

  return (
    <Container sx={{ paddingTop: "5%" }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>NAME</TableCell>
              <TableCell>EMAIL ID</TableCell>
              <TableCell>MOBILE </TableCell>
              <TableCell>COUNTRY</TableCell>
              <TableCell>STATE</TableCell>
              <TableCell>DISTRICT</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell className={classes.nameText}>
                {employeeDetail.name}
              </TableCell>
              <TableCell className={classes.commonText}>
                {employeeDetail.emailId}
              </TableCell>
              <TableCell className={classes.commonText}>
                {employeeDetail.mobile}
              </TableCell>
              <TableCell className={classes.commonText}>
                {employeeDetail.country}
              </TableCell>
              <TableCell className={classes.commonText}>
                {employeeDetail.state}
              </TableCell>
              <TableCell className={classes.commonText}>
                {employeeDetail.district}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Detail;
