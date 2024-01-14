import { Box, Grid, Stack } from "@mui/material/index";
import CharacterCard, { Character } from "../components/characterCard";
import SelectionOverlay from "../components/selectionOverlay";

const characters: Character[] = [
  {
    name: "Raye",
    title: "The Spice Master",
    picture: "/characters/4.png",
  },
  {
    name: "Test1",
    title: "Test1 title",
    picture: "/characters/1.png",
  },
  {
    name: "Test2",
    title: "Test2 title",
    picture: "/characters/2.png",
  },
  {
    name: "Test3",
    title: "Test3 title",
    picture: "/characters/3.png",
  },
  {
    name: "Test4",
    title: "Test4 title",
    picture: "/characters/4.png",
  },
  {
    name: "Test4",
    title: "Test4 title",
    picture: "/characters/4.png",
  },
  {
    name: "Test4",
    title: "Test4 title",
    picture: "/characters/4.png",
  },
  {
    name: "Test4",
    title: "Test4 title",
    picture: "/characters/4.png",
  },
  {
    name: "Test4",
    title: "Test4 title",
    picture: "/characters/4.png",
  },
  {
    name: "Test4",
    title: "Test4 title",
    picture: "/characters/4.png",
  },
];

function Game() {
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
