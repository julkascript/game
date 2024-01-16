"use client";
import { Avatar, Box, IconButton, Menu, Tooltip } from "@mui/material/index";
import React, { useState } from "react";
import UserProfileDropdown from "./userProfileDropdown";

function NavbarUserMenu() {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton
          sx={{ p: 0 }}
          onClick={(event: React.MouseEvent<HTMLElement>) =>
            setAnchorElUser(event.currentTarget)
          }
        >
          <Avatar
            alt="Remy Sharp"
            src="/characters/4.png"
            sx={{
              width: 30,
              height: 30,
            }}
          />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={!!anchorElUser}
        onClose={() => setAnchorElUser(null)}
      >
        <UserProfileDropdown />
      </Menu>
    </Box>
  );
}

export default NavbarUserMenu;
