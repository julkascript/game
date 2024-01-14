"use client";
import { Box, Grid } from "@mui/material/index";
import CharacterCard from "./characterCard";
import SelectionOverlay from "./selectionOverlay";
import { Character } from "@prisma/client";
import { useState } from "react";

export function CharacterDashboard({
  characters,
}: {
  characters: Character[];
}) {
  const [selectedCharacters, setSelectedCharacters] = useState<Character[]>([]);
  const onCharacterClick = (character: Character) => {
    if (!selectedCharacters.includes(character)) {
      setSelectedCharacters([...selectedCharacters, character]);
    } else {
      setSelectedCharacters(
        selectedCharacters.filter((char) => char !== character)
      );
    }
  };
  const isCharActive = (character: Character) => {
    return selectedCharacters.includes(character);
  };
  const charactersBox = characters.map((character, index) => {
    return (
      <CharacterCard
        key={index}
        name={character.name}
        title={character.title}
        picture={character.picture}
        onClick={() => onCharacterClick(character)}
        isActive={isCharActive(character)}
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
      <SelectionOverlay
        cardsSelected={selectedCharacters.length}
        itemsSelected={0}
      />
    </Box>
  );
}
