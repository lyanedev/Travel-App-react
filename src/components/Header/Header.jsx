import { Autocomplete } from "@react-google-maps/api";
import {
  Typography,
  Input,
  Box,
  Container,
  InputAdornment,
  TextField,
} from "@mui/material";
import ScreenSearchDesktopTwoToneIcon from "@mui/icons-material/ScreenSearchDesktopTwoTone";

import { AppName, HeaderBar, HeaderTextField, HeaderToolbar } from "./styles";

const Header = (props) => {
  return (
    <>
      <HeaderBar position="static">
        <Container maxWidth="lg">
          <HeaderToolbar>
            <AppName variant="h5">Travel App</AppName>
            <Box display="flex">
              <Typography variant="h6" sx={{ marginRight: "1rem" }}>
                Decouvrez!
              </Typography>
              <Box>
                <HeaderTextField
                  autoFocus
                  placeholder="Paris, Londres,..."
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <ScreenSearchDesktopTwoToneIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Box>
          </HeaderToolbar>
        </Container>
      </HeaderBar>
    </>
  );
};

export default Header;
