"use client";

import { Button, Card, Stack, Typography } from "@mui/material/index";
import { useState } from "react";

function SelectionOverlay() {
  const [hasMetRequirements, setHasMetRequirements] = useState(false);

  const hasBorder = hasMetRequirements ? "0.2px solid green" : "";
  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: "0",
        left: "50%",
        zIndex: 999,
        padding: "2rem",
        marginBottom: "5rem",
        borderRadius: "0.7rem",
        border: { hasBorder },
        gap: "2rem",
      }}
    >
      <Stack>
        <Stack direction="row">
          <Typography variant="subtitle1">Cards selected: </Typography>
          <Typography variant="subtitle1">5/5</Typography>
        </Stack>
        <Stack direction="row">
          <Typography variant="subtitle1">Items selected: </Typography>
          <Typography variant="subtitle1">5/5</Typography>
        </Stack>
      </Stack>
      <Button
        variant="contained"
        color="success"
        disabled={!hasMetRequirements}
      >
        Ready
      </Button>
    </Card>
  );
}

export default SelectionOverlay;
