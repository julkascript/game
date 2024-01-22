import PlayerColumn from "@/app/ui/match/playerColumn";
import { Box, Grid, Stack } from "@mui/material/index";

export default function Page() {
  return (
    <Grid container>
      <Grid xs={4}>
        <PlayerColumn />
      </Grid>
      <Grid xs={4}>
        <p>Hello!</p>
      </Grid>
      <Grid xs={4}>
        <p>Hello!</p>
      </Grid>
    </Grid>
  );
}
