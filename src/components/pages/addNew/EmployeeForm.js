import React, { useEffect } from "react";
import classes from "../../styleContainer/AddNew.module.css";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { EmployeeCountry } from "../../api/EmployeesList";

const EmployeeForm = ({ handleSubmit, input, setInput }) => {
  const dispatch = useDispatch();
  const { country } = useSelector((state) => state.Employees);

  useEffect(() => {
    dispatch(EmployeeCountry());
  }, [dispatch]);

  return (
    <form onSubmit={handleSubmit}>
      <Box className={classes.field}>
     
        <TextField
          label="Name"
          fullWidth
          value={input.name}
          onChange={(e) => {
            setInput({ ...input, name: e.target.value });
          }}
        />
      </Box>
      <Box className={classes.field}>
        <TextField
          type="email"
          label="Email Id"
          fullWidth
          value={input.emailId}
          onChange={(e) => {
            setInput({ ...input, emailId: e.target.value });
          }}
        />
      </Box>
      <Box className={classes.field}>
        <TextField
          type="tel"
          label="Mobile No"
          fullWidth
          value={input.mobile}
          onChange={(e) => {
            setInput({ ...input, mobile: e.target.value });
          }}
        />
      </Box>
      <Box className={classes.field}>
        <FormControl fullWidth>
          <InputLabel>Country</InputLabel>
          <Select
            maxRows={5}
            value={input.country}
            label="Country"
            onChange={(e) => {
              setInput({ ...input, country: e.target.value });
            }}
          >
            {country.map((item) => (
              <MenuItem key={item.id} value={item.country}>
                {item.country}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <Box className={classes.field}>
        <TextField
          label="state"
          fullWidth
          value={input.state}
          onChange={(e) => {
            setInput({ ...input, state: e.target.value });
          }}
        />
      </Box>

      <Box className={classes.field}>
        <TextField
          label="District"
          fullWidth
          value={input.district}
          onChange={(e) => {
            setInput({ ...input, district: e.target.value });
          }}
        />
      </Box>
      <Box className={classes.btnContainer}>
        <Button
          variant="contained"
          size="large"
          className={classes.btn}
          type="submit"
        >
          ADD
        </Button>
      </Box>
    </form>
  );
};

export default EmployeeForm;
