import { Box, Card, Stack, Typography } from "@mui/material";
import Image from "next/image";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";

function CharacterCard() {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "20rem",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          padding: "1.2rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Stack direction="column">
          <Typography variant="h6">Raye</Typography>
          <Typography variant="subtitle2">The Spice Master</Typography>
        </Stack>
        <Stack direction="row" gap={1.5}>
          <AutoFixHighIcon fontSize="small" color="action" />
          <HealthAndSafetyIcon fontSize="small" color="action" />
        </Stack>
      </Box>
      <Image src="/4.png" alt="char-img" width="150" height="64" />
    </Card>
  );
}
export default CharacterCard;
