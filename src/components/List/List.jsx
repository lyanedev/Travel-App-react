import {
  LinearProgress,
  Grid,
  Typography,
  MenuItem,
  FormControl,
  Select,
  Box,
} from "@mui/material";

import { ListContainer, ListTitle } from "./styles";
import { useState } from "react";

const List = (props) => {
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState(0);

  return (
    <>
      <ListContainer>
        <ListTitle variant="h4">Restaurants, hotels et autres!</ListTitle>

        <FormControl>
          <Select
            variant="standard"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <MenuItem value="restaurants">Restaurants 🍽</MenuItem>
            <MenuItem value="hotels">Hotels 🏨</MenuItem>
            <MenuItem value="attractions">Attractions 🎢</MenuItem>
          </Select>
        </FormControl>

        <FormControl>
          <Select
            variant="standard"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          >
            <MenuItem value={0}>Tout ⭐️</MenuItem>
            <MenuItem value={3}>Plus de 3 ⭐️</MenuItem>
            <MenuItem value={4}>Plus de 4 ⭐️</MenuItem>
            <MenuItem value={4.5}>Plus de 4.5 ⭐️</MenuItem>
          </Select>
        </FormControl>
      </ListContainer>
    </>
  );
};

export default List;
