import { Box, Card, Typography } from "@mui/material/index";
import Image from "next/image";

export default function PlayerCardInMatch() {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "16rem",
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
          @BigGuy66
        </Typography>
        <Typography variant="subtitle2">ELO: 623</Typography>
      </Box>
    </Card>
  );
}
