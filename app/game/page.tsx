import { Box } from "@mui/material/index";
import CharacterCard from "../components/characterCard";
import SelectionOverlay from "../components/selectionOverlay";

function Game() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CharacterCard
        name="Raye"
        title="The Spice Master"
        picture="/characters/4.png"
      />
      <SelectionOverlay />
    </Box>
  );
}

export default Game;
