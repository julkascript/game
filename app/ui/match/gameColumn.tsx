import { Box, Card, Typography } from "@mui/material/index";

export default function GameColumn() {
  return (
    <>
      <Card
        sx={{
          padding: "1.3rem",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          marginBottom: "3.5rem",
        }}
      >
        <Typography variant="h6">24 minutes remaining</Typography>
      </Card>
      <Card
        sx={{
          padding: "1.3rem",
          display: "flex",
          height: "100%",
        }}
      >
        HELLO!
      </Card>
    </>
  );
}
