import {CssBaseline, Grid} from '@mui/material';

import './App.css'

import {Header, Map, List, PlaceDetails} from "./components";

function App() {
  return (<>
    <CssBaseline>
      <Header/>
      <Grid container spacing={3} sx={{
        width: "100%"
      }}>
        <Grid item xs={12} md={4}>
          <List/>
        </Grid>
        <Grid item xs={12} md={8}>
          <Map/>
        </Grid>
      </Grid>
    </CssBaseline>
  </>)
}

export default App
