"use client";

import { Button, Card, Stack, Typography, useTheme } from "@mui/material/index";
import Link from "next/link";

type SelectionOverlayProps = {
  cardsSelected: number;
  itemsSelected: number;
};

function SelectionOverlay({
  cardsSelected,
  itemsSelected,
}: SelectionOverlayProps) {
  const theme = useTheme();
  const maxSelectedCards = 2;
  const maxSelectedItems = 0;
  const hasMetRequirements = cardsSelected === maxSelectedCards;

  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "fixed",
        bottom: "0",
        zIndex: 999,
        padding: "2rem",
        marginLeft: "0 auto",
        marginBottom: "2rem",
        borderRadius: "0.7rem",
        outline: hasMetRequirements
          ? `1px solid ${theme.palette.success.main}`
          : "",
        gap: "2rem",
      }}
    >
      <Stack>
        <Stack direction="row">
          <Typography variant="subtitle1">Cards selected: </Typography>
          <Typography variant="subtitle1">
            {cardsSelected}/{maxSelectedCards}
          </Typography>
        </Stack>
        <Stack direction="row">
          <Typography variant="subtitle1">Items selected: </Typography>
          <Typography variant="subtitle1">
            {itemsSelected}/{maxSelectedItems}
          </Typography>
        </Stack>
      </Stack>
      <Link href="/match/1">
        <Button
          variant="contained"
          color="success"
          className="bg-teal-600"
          disabled={!hasMetRequirements}
        >
          Ready
        </Button>
      </Link>
    </Card>
  );
}

export default SelectionOverlay;
