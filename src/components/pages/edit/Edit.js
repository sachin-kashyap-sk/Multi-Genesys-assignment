import { Box, Container } from "@mui/material";
import React, { useState } from "react";
import EmployeeForm from "../addNew/EmployeeForm";
import classes from "../../styleContainer/AddNew.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { UpdateEmployee } from "../../api/EmployeesList";
const Edit = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const selectedEmployee = useSelector((state) =>
    state.Employees.EmployeesData.find((item) => item.id === id)
  );

  const [input, setInput] = useState({
    id: selectedEmployee?.id || "",
    name: selectedEmployee?.name || "",
    emailId: selectedEmployee?.emailId || "",
    mobile: selectedEmployee?.mobile || "",
    country: selectedEmployee?.country || "",
    state: selectedEmployee?.state || "",
    district: selectedEmployee?.district || "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !input.name ||
      !input.emailId ||
      !input.mobile ||
      !input.country ||
      !input.state ||
      !input.district
    ) {
      alert("please Enter Details First !! ");
      return;
    }
    dispatch(
      UpdateEmployee({
        id: input.id,
        name: input.name,
        emailId: input.emailId,
        mobile: input.mobile,
        country: input.country,
        state: input.state,
        district: input.district,
      })
    );
    setInput({
      id: "",
      name: "",
      emailId: "",
      mobile: "",
      country: "",
      state: "",
      district: "",
    });
  };

  return (
    <Container maxWidth="false">
      <Box className={classes.topContainer}>
        <Box className={classes.innerContainer}>
          <EmployeeForm
            handleSubmit={handleSubmit}
            input={input}
            setInput={setInput}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Edit;
