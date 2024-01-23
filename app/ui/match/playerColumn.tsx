import { Box, Card, Stack, Typography } from "@mui/material/index";
import Image from "next/image";
import PlayerCardInMatch from "./playerCardInMatch";
import ChosenCharacterInMatch from "./chosenCharacterInMatch";
import { MatchOrientation } from "@/app/types";

type PlayerColumnProps = {
  orientation: MatchOrientation;
};

export default function PlayerColumn({ orientation }: PlayerColumnProps) {
  const characters = [
    {
      id: 1,
      name: "Yami",
      description: "description",
      picture: "/characters/2.png",
    },
    {
      id: 2,
      name: "Kaito",
      description: "description",
      picture: "/characters/1.png",
    },
    {
      id: 3,
      name: "Yuriko",
      description: "description",
      picture: "/characters/3.png",
    },
  ];
  const items = [
    {
      id: 1,
      name: "Cool item",
      description: "None",
      picture: "/abilities/1.png",
    },
    {
      id: 2,
      name: "Cool item",
      description: "None",
      picture: "/abilities/1.png",
    },
    {
      id: 3,
      name: "Cool item",
      description: "None",
      picture: "/abilities/1.png",
    },
    {
      id: 4,
      name: "Cool item",
      description: "None",
      picture: "/abilities/1.png",
    },
  ];
  const itemsBoxes = items.map((item) => {
    return (
      <Box
        key={item.id}
        sx={{
          width: "3.1rem",
        }}
      >
        <Image src={item.picture} alt="char-img" width={140} height={42} />
      </Box>
    );
  });
  const characterBoxes = characters.map((character) => {
    return (
      <ChosenCharacterInMatch
        key={character.id}
        id={character.id}
        name={character.name}
        picture={character.picture}
        orientation={orientation}
      />
    );
  });
  return (
    <Stack
      direction="column"
      spacing={4}
      sx={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <PlayerCardInMatch orientation={orientation} />
      {characterBoxes}
      <Stack direction="row" spacing={4}>
        {itemsBoxes}
      </Stack>
    </Stack>
  );
}
