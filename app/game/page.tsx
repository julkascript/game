import { Box, Grid, Stack } from "@mui/material/index";
import CharacterCard, { Character } from "../components/characterCard";
import SelectionOverlay from "../components/selectionOverlay";
import { getAllCharacters } from "../api/actions";

async function Game() {
  const characters = await getAllCharacters();
  console.log(123, characters);
  const charactersBox = characters.map((character, index) => {
    return (
      <CharacterCard
        key={index}
        name={character.name}
        title={character.title}
        picture={character.picture}
      />
    );
  });

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid
        sx={{ justifyContent: "center" }}
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 22, lg: 24, xl: 31 }}
      >
        {charactersBox}
      </Grid>
      <SelectionOverlay />
    </Box>
  );
}

export default Game;
