import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { googleLogout } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { AppBar, Avatar, Toolbar, Typography, Button } from "@material-ui/core";
import Memories from "../../images/memories.png";

import useStyles from "./styles";

const Navbar = () => {
  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();

  // JSON.parse(localStorage.getItem("profile"))

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    window.location.reload();
  };

  console.log(user);

  useEffect(() => {
    const token = user?.sub;

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, []);

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography
          component={Link}
          to="/"
          className={classes.heading}
          variant="h2"
          align="center"
        >
          Memories
        </Typography>
        <img
          className={classes.image}
          src={Memories}
          alt="memories"
          height="60"
        />
      </div>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user.name}
              src={user.picture}
            >
              {user.given_name.charAt(0)}
            </Avatar>
            <Typography className={classes.userName} variant="h6">
              {user.name}
            </Typography>
            <Button
              onClick={handleLogout}
              variant="contained"
              className={classes.logout}
              color="secondary"
            >
              Logout
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            color="primary"
          >
            Sign in
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
