import GameColumn from "@/app/ui/match/gameColumn";
import PlayerColumn from "@/app/ui/match/playerColumn";
import { Box, Grid, Stack } from "@mui/material/index";

export default function Page() {
  return (
    <Grid container>
      <Grid xs={4}>
        <PlayerColumn orientation="player" />
      </Grid>
      <Grid xs={4}>
        <GameColumn />
      </Grid>
      <Grid xs={4}>
        <PlayerColumn orientation="enemy" />
      </Grid>
    </Grid>
  );
}
