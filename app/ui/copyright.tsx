import { Stack, Typography } from "@mui/material/index";

export function Copyright() {
  return (
    <Stack
      direction="row"
      color="text.secondary"
      alignItems="center"
      justifyContent="center"
      sx={{ mt: 8, mb: 4 }}
      gap={0.6}
    >
      <Typography>Copyright ©</Typography>
      <Typography fontWeight="bold">Game</Typography>
      <Typography>{new Date().getFullYear()}</Typography>
      <Typography>.</Typography>
    </Stack>
  );
}
