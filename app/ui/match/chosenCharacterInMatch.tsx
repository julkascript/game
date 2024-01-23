import { MatchOrientation } from "@/app/types";
import { Box, Card, Stack, Typography } from "@mui/material/index";
import Image from "next/image";

type Ability = {
  id: number;
  name: string;
  description: string;
  picture: string;
};

type Character = {
  id: number;
  name: string;
  description?: string;
  picture: string;
  orientation?: MatchOrientation;
  // abilities: Ability[];
};

export default function ChosenCharacterInMatch({
  id,
  name,
  description,
  picture,
  orientation = "player",
}: Character) {
  const abilities: Ability[] = [
    {
      id: 7,
      name: "Ability 1",
      description: "description",
      picture: "/abilities/1.png",
    },
    {
      id: 5,
      name: "Ability 2",
      description: "description",
      picture: "/abilities/1.png",
    },
    {
      id: 8,
      name: "Ability 3",
      description: "description",
      picture: "/abilities/1.png",
    },
  ];

  const abilityBoxes = abilities.map((ability) => {
    return (
      <Box
        key={ability.id}
        sx={{
          width: "2rem",
          height: "2rem",
        }}
      >
        <Image src={ability.picture} alt="char-img" width={100} height={36} />
      </Box>
    );
  });
  return (
    <Stack
      direction={orientation === "player" ? "row" : "row-reverse"}
      spacing={1}
    >
      <Card
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "16rem",
          direction: orientation === "player" ? "ltr" : "rtl",
        }}
      >
        <Box
          sx={{
            position: "relative",
          }}
        >
          <Image src={picture} alt="char-img" width={100} height={36} />
          <Box
            sx={{
              position: "absolute",
              backgroundColor: "green",
              transform: "translateX(-50%)",
              bottom: 0,
              left: "50%",
              width: "100%",
              textAlign: "center",
            }}
          >
            100
          </Box>
        </Box>
        <Box
          sx={{
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6">{name}</Typography>
          <Typography variant="subtitle2">attributes</Typography>
        </Box>
      </Card>
      <Stack direction="column" spacing={1}>
        {abilityBoxes}
      </Stack>
    </Stack>
  );
}
