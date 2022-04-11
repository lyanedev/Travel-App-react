import { AppBar, styled, TextField, Toolbar, Typography } from "@mui/material";

export const AppName = styled(Typography)({
  fontFamily: "Poppins",
  fontWeight: "800",
  fontSize: "2rem",
  color: "#000",
});

export const HeaderToolbar = styled(Toolbar)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: ".5rem",
});

export const HeaderBar = styled(AppBar)({
  backgroundColor: "#CDD1DE",
});

export const HeaderTextField = styled(TextField)({
  "&.MuiTextField-root": {
    backgroundColor: "#E7E8EF",
  },
});
