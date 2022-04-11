import {Autocomplete} from "@react-google-maps/api";

import {AppBar, Toolbar, Typography, Input, Box, Container, InputAdornment} from '@mui/material';
import ScreenSearchDesktopTwoToneIcon from '@mui/icons-material/ScreenSearchDesktopTwoTone';
import {InboxOutlined} from "@mui/icons-material";

const Header = (props) => {

  return (
      <>
        <AppBar position="static">
          <Container maxWidth="lg">
            <Toolbar>
              <Typography variant="h5">Travel App</Typography>
              <Box display="flex">
                <Typography variant="h6">Decouvrez!</Typography>
                <Box>
                  <Input autoFocus variant="outlined" placeholder="Paris, Londres,..." startAdornment={
                    <InputAdornment position="start">
                      <ScreenSearchDesktopTwoToneIcon/>
                    </InputAdornment>
                  }/>
                </Box>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </>
  );
}

export default Header;