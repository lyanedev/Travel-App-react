import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery, Rating, Box } from "@mui/material";
import LocationOnTwoToneIcon from "@mui/icons-material/LocationOnTwoTone";

const Map = (props) => {
  const isMobile = useMediaQuery("min-width: 600px");

  const coordinates = { lat: 0, lng: 0 };

  return (
    <>
      <Box style={{ width: "100%", height: "80 vh" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBpj82QKELnAq_SGymBerBe3bVwcnora_g" }}
          defaultCenter={coordinates}
          center={coordinates}
          defaultZoom={14}
          margin={[50, 50, 50, 50]}
          options={" "}
        />
      </Box>
    </>
  );
};

export default Map;
