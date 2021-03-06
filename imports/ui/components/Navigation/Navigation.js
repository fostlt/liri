import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import {
  Typography,
  CardMedia,
  AppBar,
  Toolbar,
  IconButton,
  MenuItem,
  Menu
} from "@material-ui/core";
import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ExitIcon from "@material-ui/icons/PowerSettingsNew";
import { withRouter, Link, NavLink } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import ClipboardIcon from "@material-ui/icons/Assignment";
import CalendarIcon from "@material-ui/icons/CalendarToday";
import ScoreIcon from "@material-ui/icons/Timeline";
import Popover from "@material-ui/core/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import AddTask from "../../components/AddTask";

const Navigation = props => {
  const { classes } = props;
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <AppBar position="static" color="primary">
        <Toolbar className={classes.toolbar}>
          <div className={classes.title}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              open={open}
              onClose={handleClose}
            >
              <Typography variant="h5" className={classes.menuTitle}>
                Menu
              </Typography>
              <Link to="/home" className={classes.link}>
                <MenuItem onClick={handleClose}>
                  <HomeIcon className={classes.icon} /> Home
                </MenuItem>
              </Link>
              <Link to="/goals" className={classes.link}>
                <MenuItem onClick={handleClose}>
                  <ClipboardIcon className={classes.icon} /> Goals
                </MenuItem>
              </Link>
              <Link to="/calendar" className={classes.link}>
                <MenuItem onClick={handleClose}>
                  <CalendarIcon className={classes.icon} /> Calendar
                </MenuItem>
              </Link>
              <Link to="/scoreboard" className={classes.link}>
                <MenuItem onClick={handleClose}>
                  <ScoreIcon className={classes.icon} /> Scoreboard
                </MenuItem>
              </Link>
            </Menu>

            <Link to="/home" className={classes.link}>
              <Typography className={classes.titleText} variant="h5">
                LIRI
              </Typography>
            </Link>
          </div>
          <Link to="/home">
            <CardMedia
              className={classes.liri}
              component="img"
              image="/liri.png"
            />
          </Link>
          <div>
            <div>
              <PopupState variant="popover" popupId="demo-popup-popover">
                {popupState => (
                  <div className={classes.position}>
                    <Button
                      variant="contained"
                      style={{
                        display:
                          props.location.pathname === "/calendar"
                            ? "block"
                            : "none"
                      }}
                      color="primary"
                      {...bindTrigger(popupState)}
                    >
                      Add New Task
                    </Button>
                    <Popover
                      {...bindPopover(popupState)}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left"
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right"
                      }}
                    >
                      <Box p={2}>
                        <AddTask />
                      </Box>
                    </Popover>
                  </div>
                )}
              </PopupState>
            </div>
            <div>
              <NavLink to="/profile">
                <IconButton className={classes.link}>
                  <AccountCircle color="secondary" className={classes.icons} />
                </IconButton>
              </NavLink>
              {auth && (
                <IconButton
                  color="secondary"
                  onClick={(handleClose, Meteor.logout)}
                >
                  <ExitIcon className={classes.icons} />
                </IconButton>
              )}
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(withStyles(styles)(Navigation));
