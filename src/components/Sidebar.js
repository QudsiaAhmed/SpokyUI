import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
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
import { IconButton } from "@mui/material";
import { Box } from "@mui/system";

const drawerWidth = '18rem';
const minWidthForCollapse = 1200;

function ResponsiveDrawer({ collapsed, setCollapsed }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [expandedChatbotItem, setExpandedChatbotItem] = useState(null);
  const [open, setOpen] = useState(window.innerWidth > minWidthForCollapse);

  const handleItemClick = (text) => {
    if (selectedItem === text) {
      setSelectedItem(null);
    } else {
      setSelectedItem(text);
      setExpandedChatbotItem(null);
    }
  };

  const handleToggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const handleDrawerOpenClose = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleResize = () => {
      setCollapsed(window.innerWidth <= minWidthForCollapse);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const chatbotItems = ["My chatbot", "Create chatbot", "Chatbot templates"];

  const navigate = useNavigate();

  const handleChatbotItemClick = (text) => {
    if (expandedChatbotItem === text) {
      setExpandedChatbotItem(null);
    } else {
      setExpandedChatbotItem(text);
      setSelectedItem(null);
    }
  };

  const renderIcon = (itemText) => {
    if (itemText === "Chatbot") {
      return <SmartToyIcon />;
    } else if (itemText === "Account") {
      return <PeopleAltIcon />;
    } else if (itemText === "Subscription") {
      return <SubscriptionsIcon />;
    } else if (itemText === "Need help?") {
      return <HelpIcon />;
    } else {
      return <DashboardIcon />;
    }
  };

  const drawerItems = [
    { text: "Dashboard", path: "/Dashboard" },
    {
      text: "Chatbot",
      subItems: chatbotItems,
    },
    { text: "Account" },
    { text: "Subscription" },
    { text: "Need help?" },
  ];

  return (
    <div>
      <div>
        {window.innerWidth > minWidthForCollapse ? (
          <Drawer variant="permanent" open={open}>
            <List sx={{ width: collapsed ? 130 : drawerWidth, marginTop: '.7rem' }}>
              <ListItem
                onClick={handleToggleCollapse}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  justifyContent: "space-between",
                  paddingRight: "16px",
                  paddingLeft: "16px",
                  marginBottom: "1rem"
                }}
                disablePadding
              >
                <ListItemButton>
                  {!collapsed && (
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <PersonIcon sx={{ fontSize: 32, color: "#626262", marginRight: "8px" }} />
                      <Typography variant="h6" sx={{ fontSize: '2rem', fontWeight: "500", marginLeft: "8px", color: "#FF7F72" }}>Spoky</Typography>
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
                {drawerItems.map((item) => (
                  <div key={item.text}>
                    {item.text === "Chatbot" ? (
                      <>
                        <ListItem
                          onClick={() => handleChatbotItemClick(item.text)}
                          sx={{
                            backgroundColor: expandedChatbotItem === item.text ? ColorTheme?.color?.primary : "white",
                            color: expandedChatbotItem === item.text ? "#ffffff" : ColorTheme?.color?.dark,
                            border: expandedChatbotItem === item.text ? 'none' : `1px solid ${ColorTheme?.color.secondary}`,
                            borderRadius: 2,
                            width: '94%',
                            marginLeft: '.5rem',
                            marginBottom: '1.5rem',
                            padding: 1,
                            display: "flex",
                            justifyContent: "center", 
                          }}
                          disablePadding
                        >
                          <ListItemButton>
                            <ListItemIcon sx={{ color: expandedChatbotItem === item.text ? "#ffffff" : ColorTheme?.color?.dark }}>
                              {renderIcon(item.text)}
                            </ListItemIcon>
                            {!collapsed && (
                              <ListItemText primary={item.text} />
                            )}
                          </ListItemButton>
                        </ListItem>
                        {expandedChatbotItem === item.text && (
                          <List sx={{ display: 'flex', flexDirection: 'row' }}>
                            <Box sx={{ height: '10rem', width: '3px', backgroundColor: '#FF5841', marginLeft: '2.5rem' }}></Box>
                            <Box>
                              {item.subItems.map((subItem) => (
                                <ListItem
                                  key={subItem}
                                  onClick={() => handleItemClick(subItem)}
                                  sx={{
                                    width: "100%",
                                    marginBottom: "0px",
                                    paddingTop: '0',
                                  }}
                                >
                                  {subItem === "My chatbot" ? (
                                    <Link to="/MyChatBot" style={{ textDecoration: "none" }}>
                                      <List>
                                        {!collapsed && (
                                          <ListItemText
                                            primary={subItem}
                                            sx={{
                                              color: selectedItem === subItem ? "#ffffff" : '#00000080',
                                              marginLeft: "1px",
                                            }}
                                          />
                                        )}
                                      </List>
                                    </Link>
                                  ) : subItem === "Create chatbot" ? (
                                    <Link to="/ChatBotTabs" style={{ textDecoration: "none" }}>
                                      <List>
                                        {!collapsed && (
                                          <ListItemText
                                            primary={subItem}
                                            sx={{
                                              color: selectedItem === subItem ? "#ffffff" : '#00000080',
                                              marginLeft: "1px",
                                            }}
                                          />
                                        )}
                                      </List>
                                    </Link>
                                  ) : (
                                    <Link to={`/chatbot/${subItem.toLowerCase()}`} style={{ textDecoration: "none" }}>
                                      <List>
                                        {!collapsed && (
                                          <ListItemText
                                            primary={subItem}
                                            sx={{
                                              color: selectedItem === subItem ? "#ffffff" : '#00000080',
                                              marginLeft: "1px",
                                            }}
                                          />
                                        )}
                                      </List>
                                    </Link>
                                  )}
                                </ListItem>
                              ))}
                            </Box>
                          </List>
                        )}
                      </>
                    ) : (
                      <Link to={item.path} style={{ textDecoration: "none" }}>
                        <ListItemButton
                          onClick={() => handleItemClick(item.text)}
                          sx={{
                            borderRadius: "10px",
                            border: selectedItem === item.text ? "none" : `1px solid ${ColorTheme?.color.secondary}`,
                            padding: "15px",
                            display: "flex",
                            marginBottom: '1.5rem',
                            justifyContent: "center", 
                            alignItems: "center",
                            marginLeft: "8px",
                            marginRight: "8px",
                            backgroundColor: selectedItem === item.text ? ColorTheme?.color?.primary : "white",
                            "&:hover": {
                              backgroundColor: selectedItem === item.text ? ColorTheme?.color?.primary : "white",
                            },
                          }}
                        >
                          <ListItemIcon sx={{ color: selectedItem === item.text ? "#ffffff" : ColorTheme?.color?.dark }}>
                            {renderIcon(item.text)}
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
                    )}
                  </div>
                ))}
              </List>
            </List>
          </Drawer>
        ) : (
          <IconButton
            onClick={handleDrawerOpenClose}
            sx={{
              position: "fixed",
              top: "20px",
              left: "20px",
              zIndex: 2,
              color: "#FF5841",
            }}
          >
            {open ? <MenuIcon /> : <MenuIcon sx={{ color: "#FF5841" }} />}
          </IconButton>
        )}
      </div>
    </div>
  );
}

export default ResponsiveDrawer;