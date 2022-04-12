import {AppBar, styled, TextField, Toolbar, Typography} from "@mui/material";

export const AppName = styled(Typography)({
  fontFamily: "Poppins",
  fontWeight: "800",
  fontSize: "2rem",
  color: "#FFFF",
});

export const HeaderToolbar = styled(Toolbar)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 1rem",
});

export const HeaderBar = styled(AppBar)({
  backgroundColor: "#5463FF",
  height: "5rem",
});

export const HeaderTextField = styled(TextField)({});
