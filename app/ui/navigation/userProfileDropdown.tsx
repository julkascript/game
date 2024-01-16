import { signOut } from "@/auth";
import { MenuItem, Typography } from "@mui/material/index";

export default function UserProfileDropdown() {
  const profileActions = ["My profile", "Logout"];

  const handleProfileDropdownActions = async (setting: string) => {
    if (setting === "Logout") {
      await signOut();
    }
  };

  return (
    <>
      {profileActions.map((setting) => (
        <MenuItem
          key={setting}
          onClick={() => handleProfileDropdownActions(setting)}
        >
          <Typography textAlign="center">{setting}</Typography>
        </MenuItem>
      ))}
    </>
  );
}
