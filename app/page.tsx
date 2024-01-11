import { Box, Button, Typography } from "@mui/material";
import Navigation from "./components/navigation";

export default function Home() {
  return (
    <div className="grid min-h-screen">
      <Navigation />
      <Box
        component="span"
        sx={{
          display: "flex",
          flexDirection: "column",
          transform: "scale(0.8)",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            marginBottom: "1rem",
          }}
        >
          Become rank 1!
        </Typography>
        <Button variant="outlined">Play now!</Button>
      </Box>
    </div>
  );
}
