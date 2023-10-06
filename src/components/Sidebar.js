import React, { useState, useEffect } from "react";
import { Link, Route, Switch } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import HelpIcon from "@mui/icons-material/Help";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import { ColorTheme } from "../theme";

const drawerWidth = 320;
const minWidthForCollapse = 800;

function ResponsiveDrawer() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [collapsed, setCollapsed] = useState(window.innerWidth <= minWidthForCollapse);

  const handleItemClick = (text) => {
    setSelectedItem(text);
  };

  const handleToggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  // Add event listener to update 'collapsed' state on window resize
  useEffect(() => {
    const handleResize = () => {
      setCollapsed(window.innerWidth <= minWidthForCollapse);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const drawerItems = [
    { text: "Dashboard", path: "/Dashboard" },
    { text: "Chatbot", path: "/ChatBotTabs" },
    { text: "Account"},
    { text: "Subscription" },
    { text: "Need help?" },

  ];

  return (
    <div>
      <Drawer variant="permanent" sx={{ width: collapsed ? 60 : drawerWidth }}>
        <List>
          <ListItem
            onClick={handleToggleCollapse}
            sx={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              justifyContent: "space-between",
              paddingRight: "16px",
              paddingLeft: "16px",
            }}
            disablePadding
          >
            <ListItemButton>
              {!collapsed && (
                <div style={{ display: "flex", alignItems: "center" }}>
                  <PersonIcon sx={{ fontSize: 32, color: "#626262", marginRight: "8px" }} />
                  <Typography variant="h6" sx={{ fontSize: '32px', fontWeight: "bold", marginLeft: "8px", color: "#FF7F72" }}>Spoky</Typography>
                </div>
              )}
            </ListItemButton>
            <ListItemIcon sx={{ marginLeft: "1rem" }}>
              {collapsed ? (
                <MenuIcon />
              ) : (
                <MenuIcon sx={{ color: "#FF5841" }} />
              )}
            </ListItemIcon>
          </ListItem>
          <List>
            {drawerItems.map((item, index) => (
              <ListItem
                key={item.text}
                onClick={() => handleItemClick(item.text)}
                sx={{
                  width: "100%",
                  marginBottom: index < drawerItems.length - 1 ? "8px" : "0",
                  disablePadding: true,
                }}
              >
                <Link to={item.path} style={{ textDecoration: "none", width: "100%" }}>
                  <ListItemButton
                    sx={{
                      borderRadius: "10px",
                      border: selectedItem === item.text ? "none" : "1px solid #62D2E9",
                      padding: "15px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginLeft: "8px",
                      marginRight: "8px",
                      backgroundColor: selectedItem === item.text ? "#FF7F72 !important" : "white",
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        color: selectedItem === item.text ? "#ffffff" : ColorTheme?.color?.dark,
                      }}
                    >
                      {item.text === "Chatbot" ? <SmartToyIcon fontSize="large" /> :
                        item.text === "Account" ? <PeopleAltIcon fontSize="large" /> :
                          item.text === "Subscription" ? <SubscriptionsIcon fontSize="large" /> :
                            item.text === "Need help?" ? <HelpIcon fontSize="large" /> :
                              <DashboardIcon fontSize="large" />
                      }
                    </ListItemIcon>
                    {!collapsed && (
                      <ListItemText
                        primary={item.text}
                        sx={{
                          color: selectedItem === item.text ? "#ffffff" : ColorTheme?.color?.dark,
                          marginLeft: "1px",
                        }}
                      />
                    )}
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
          </List>
        </List>
      </Drawer>
      
    </div>
  );
}

export default ResponsiveDrawer;
