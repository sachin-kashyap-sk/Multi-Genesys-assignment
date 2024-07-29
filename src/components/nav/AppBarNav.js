import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSearch } from "../redux/HomeSlice";
import { useLocation } from "react-router-dom";

const drawerWidth = 240;
const navItems = [
  {
    id: 1,
    title: "Home",
    linkTo: "/",
  },
  {
    id: 2,
    title: "Detail",
    linkTo: "/detail/37",
  },
  {
    id: 3,
    title: "Add New",
    linkTo: "/addNew",
  },
];

function AppBarNav(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const { search } = useSelector((state) => state.Employees);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton
              sx={{ textAlign: "start" }}
              onClick={() => {
                navigation(item.linkTo);
              }}
            >
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar
          sx={{
            backgroundColor: "#fff",
          }}
        >
          <IconButton
            color="#000"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              minWidth: "60%",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: { xs: "none", sm: "block" },
              }}
            >
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  sx={{ color: "#000" }}
                  onClick={() => {
                    navigation(item.linkTo);
                  }}
                >
                  {item.title}
                </Button>
              ))}
            </Box>

            <Box sx={{ width: { sm: "40%", xs: "100%" } }}>
              {location.pathname === "/" ? (
                <input
                  value={search}
                  onChange={(e) => {
                    dispatch(setSearch(e.target.value));
                  }}
                  style={{
                    padding: "4%",
                    width: "100%",
                    borderRadius: "10px",
                  }}
                />
              ) : null}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main">
        <Toolbar />
      </Box>
    </Box>
  );
}

AppBarNav.propTypes = {
  window: PropTypes.func,
};

export default AppBarNav;
