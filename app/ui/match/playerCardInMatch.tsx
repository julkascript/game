import { MatchOrientation } from "@/app/types";
import { auth } from "@/auth";
import { Box, Card, Typography } from "@mui/material/index";
import Image from "next/image";

type PlayerCardInMatchProps = {
  orientation: MatchOrientation;
};

export default async function PlayerCardInMatch({
  orientation,
}: PlayerCardInMatchProps) {
  const session = await auth();
  const user = session?.user;
  console.log(123, user);

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "16rem",
        direction: orientation === "player" ? "ltr" : "rtl",
      }}
    >
      <Image src="/characters/4.png" alt="char-img" width={100} height={36} />
      <Box
        sx={{
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
        }}
      >
        <Typography variant="h6" fontWeight="bold">
          {user?.name}
        </Typography>
        <Typography variant="subtitle2">ELO: 623</Typography>
      </Box>
    </Card>
  );
}
