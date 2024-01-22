import { Box, Card, Stack, Typography } from "@mui/material/index";
import Image from "next/image";
import PlayerCardInMatch from "./playerCardInMatch";
import ChosenCharacterInMatch from "./chosenCharacterInMatch";

export default function PlayerColumn() {
  return (
    <Stack direction="column" spacing={4}>
      <PlayerCardInMatch />
      <ChosenCharacterInMatch
        id={1}
        name="Yami"
        picture={"/characters/2.png"}
      />
      <ChosenCharacterInMatch
        id={2}
        name="Kaito"
        picture={"/characters/1.png"}
      />
      <ChosenCharacterInMatch
        id={3}
        name="Yuriko"
        picture={"/characters/3.png"}
      />
    </Stack>
  );
}
