import { Box, Button, TextField } from "@mui/material";
import { useLoginFormik } from "./useLoginFormik";

import { useAuthContext } from "../../../contexts/AuthContext/AuthContext";
import { login } from "../../../api/auth/auth";

export const LoginForm = () => {
  const authCtx = useAuthContext();

  const formik = useLoginFormik({
    async onSubmit(values, formikHelpers) {
      try {
        const response = await login(values.username, values.password);

        const json = await response.json();
      } catch (error) {}
      authCtx.login();
    },
  });

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        marginTop: 4,
      }}
      noValidate
      autoComplete="off"
      onSubmit={formik.handleSubmit}
    >
      <TextField
        id="username"
        label="Username"
        variant="outlined"
        name="username"
        value={formik.values.username}
        onChange={formik.handleChange}
        sx={{ marginBottom: 2 }}
        error={formik.touched.username && Boolean(formik.errors.username)}
        helperText={
          formik.touched.username && Boolean(formik.errors.username)
            ? formik.errors.username
            : ""
        }
      />
      <TextField
        id="password"
        label="Password"
        type="password"
        variant="outlined"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        sx={{ marginBottom: 2 }}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={
          formik.touched.password && Boolean(formik.errors.password)
            ? formik.errors.password
            : ""
        }
      />

      <Button type="submit" variant="contained" disabled={formik.isSubmitting}>
        {formik.isSubmitting ? "Logging in..." : "Login"}
      </Button>
    </Box>
  );
};
