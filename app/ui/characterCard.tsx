import { Box, Card, Grid, Stack, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";

export type Character = {
  name: string;
  title: string;
  picture: string;
};

type CharacterCardProps = Character & {
  onClick: () => void;
  isActive?: boolean;
};

function CharacterCard({
  name,
  title,
  picture,
  onClick,
  isActive,
}: CharacterCardProps) {
  const theme = useTheme();

  return (
    <Grid item xs={8}>
      <Card
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "20rem",
          justifyContent: "space-between",
          cursor: "pointer",
          outline: isActive ? `1px solid ${theme.palette.success.main}` : "",
        }}
        onClick={onClick}
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
            <Typography variant="h6">{name}</Typography>
            <Typography variant="subtitle2">{title}</Typography>
          </Stack>
          <Stack direction="row" gap={1.5}>
            <AutoFixHighIcon fontSize="small" color="action" />
            <HealthAndSafetyIcon fontSize="small" color="action" />
          </Stack>
        </Box>
        <Image src={picture} alt="char-img" width={150} height={36} />
      </Card>
    </Grid>
  );
}
export default CharacterCard;
