import React, { useEffect } from "react";
import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  useMediaQuery,
} from "@mui/material";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import classes from "../../styleContainer/Home.module.css";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DeleteEmployee, EmployeesList } from "./../../api/EmployeesList";
import { openModal, selectedModal } from "../../redux/HomeSlice";
import Dialog from "@mui/material/Dialog";
import { useTheme } from "@mui/material/styles";

const Home = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    dispatch(EmployeesList());
  }, [dispatch]);

  const { EmployeesData } = useSelector((state) => state.Employees);
  const { search } = useSelector((state) => state.Employees);
  const open = useSelector(selectedModal);

  const handleClose = () => {
    dispatch(openModal(false));
  };

  return (
    <Container maxWidth="false">
      <Box className={classes.topContainer}>
        <Box className={classes.innerContainer}>
          <Box className={classes.listContainer}>
            <p className={classes.text}>Employee List : </p>
            <Button
              onClick={() => {
                navigate("/addNew");
              }}
              className={classes.btn}
              variant="contained"
              endIcon={<AddIcon />}
            >
              Add
            </Button>
          </Box>
          {[...EmployeesData]
            .filter(
              (item) =>
                item.name.includes(search) ||
                item.emailId.includes(search) ||
                item.id.includes(search)
            )
            .map((item, index) => (
              <Box key={item.id} className={classes.innerList}>
                <Avatar alt="avatars" src={item.avatar} />

                <p
                  className={classes.text}
                  onClick={() => {
                    navigate(`/detail/${item.id}`);
                  }}
                >
                  {item.name}
                </p>
                <Box>
                  <EditIcon
                    onClick={() => {
                      navigate(`/edit/${item.id}`);
                    }}
                  />
                  <DeleteIcon
                    onClick={() => {
                      dispatch(openModal(true));
                    }}
                  />
                  <Dialog
                    fullScreen={fullScreen}
                    open={open}
                    onClose={handleClose}
                  >
                    <DialogContent>
                      <DialogContentText>
                        Are You Sure You want to Delete !!
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button autoFocus onClick={handleClose}>
                        Disagree
                      </Button>
                      <Button
                        id={item.id}
                        onClick={() => {
                          dispatch(DeleteEmployee(item.id));
                          handleClose();
                        }}
                        autoFocus
                      >
                        Agree
                      </Button>
                    </DialogActions>
                  </Dialog>
                </Box>
              </Box>
            ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
