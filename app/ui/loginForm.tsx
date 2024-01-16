"use client";

import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
} from "@mui/material/index";
import Link from "next/link";
import { authenticate } from "../lib/actions";
import { useFormState } from "react-dom";

export default function LoginForm() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);
  return (
    <Box component="form" sx={{ mt: 1 }} action={dispatch}>
      <TextField
        margin="normal"
        required
        fullWidth
        id="username"
        label="Username"
        name="username"
        autoComplete="username"
        autoFocus
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
      />
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        className="bg-slate-800 hover:bg-slate-950 text-white"
        sx={{ mt: 3, mb: 2 }}
        // disabled={}
      >
        Sign In
      </Button>
      <div
        className="flex h-8 items-end space-x-1"
        aria-live="polite"
        aria-atomic="true"
      >
        {/* {errorMessage && (
          <>
            <p className="text-sm text-red-500">{errorMessage}</p>
          </>
        )} */}
      </div>
      <Grid container>
        <Grid item xs>
          <Link href="#">Forgot password?</Link>
        </Grid>
        <Grid item>
          <Link href="#">{"Don't have an account? Sign Up"}</Link>
        </Grid>
      </Grid>
    </Box>
  );
}
