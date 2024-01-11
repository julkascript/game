import { Box, Button, Link, Typography } from "@mui/material";

export default function Home() {
  return (
    <div className="grid min-h-screen">
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
        <Link href="/game">
          <Button variant="outlined">Play now!</Button>
        </Link>
      </Box>
    </div>
  );
}
