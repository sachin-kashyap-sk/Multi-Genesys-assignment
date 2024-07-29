import React, { useState } from "react";
import { Box } from "@mui/material";
import Container from "@mui/material/Container";
import classes from "../../styleContainer/AddNew.module.css";
import { AddEmployee } from "./../../api/EmployeesList";
import { useDispatch } from "react-redux";
import EmployeeForm from "./EmployeeForm";

const AddNew = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    name: "",
    emailId: "",
    mobile: "",
    country: "",
    state: "",
    district: "",
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
    dispatch(AddEmployee({ ...input }));
    setInput({
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

export default AddNew;
