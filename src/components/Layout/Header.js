import React, { useState } from "react";
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from "@mui/material"
import NoFoodIcon from '@mui/icons-material/NoFood';
import { NavLink,useNavigate } from "react-router-dom";
import "../../styles/HeaderStyles.css";
import MenuIcon from '@mui/icons-material/Menu';
import { signOut } from "firebase/auth";
import { database} from "../../Firebaseconfig"
function Header() {
  const [mobileopen, setMobileOpen] = useState(false)

  const history = useNavigate()

  const handleClick =()=>{
    signOut(database).then(val=>{
      history('/')
    })
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileopen)
  }
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>

      <Typography
        color={"silver"}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1,my:2 }}
      ><NoFoodIcon />
        Prime Restaurant
      </Typography>
      <Divider/>

      <ul className="mobile-navigation">
        <li>
          <NavLink activeClassName="active" to={"/Home"}> Home </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to={"/menu"}> Menu </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to={"/about"}> About </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to={"/contact"}> Contact </NavLink>
        </li>
        <li>
          <button id="btn" onClick={handleClick}>SignOut</button>
        </li>
      </ul>

    </Box>

  )
  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{
                mr: 2,
                display: { sm: "none" },
              }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>

            <Typography
              color={"silver"}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            ><NoFoodIcon />
              Prime Restaurant
            </Typography>
            
            <Box sx={{ display: { xs: 'none', sm: "block" } }}>
              <ul className="navigation-menu">
                <li>
                  <NavLink activeClassName="active" to={"/Home"}> Home </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to={"/menu"}> Menu </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to={"/about"}> About </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to={"/contact"}> Contact </NavLink>
                </li>
                <li>
                <button id="btn" onClick={handleClick}>SignOut</button>
                </li>
              </ul>
            </Box>
          </Toolbar>

        </AppBar>
        <Box component="nav">
          <Drawer variant="temporary" open={mobileopen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" }, "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "250px",
              },
            }}
          >
            {drawer}
          </Drawer>

        </Box>
        <Box >
        <Toolbar/>
        </Box>
        
      </Box>
    </>
  )
}

export default Header
