import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";

import { Home, Settings } from "@mui/icons-material";

import { useNavigate } from "react-router-dom";

const getIcon = (icon) => {
  switch (icon) {
    case "HOME":
      return <Home />;
    case "TASKS":
      return <Home />;
    case "SETTINGS":
      return <Home />;
    default:
      return <Home />;
  }
};

const MenuListItems = ({ List }) => {
  const history = useNavigate();
  const navigate = (path) => {
    history(path);
  };

  return (
    <List>
      {List.map(
        ({ text, path, icon },
        index) => {
          <ListItem key={index} onClick={() => navigateTo(path)} >
            <ListItemIcon>
                {getIcon(icon)}
            </ListItemIcon>
            <ListItemText primary={text}/>
          <ListItem/>
        })}
      
    </List>
  );
};

export default MenuListItems;
