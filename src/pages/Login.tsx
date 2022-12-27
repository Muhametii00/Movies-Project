import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";
import { useLoginFormik } from "../components/Login/LoginForm/useLoginFormik";

export const Login = () => {
  const formik = useLoginFormik({
    onSubmit(values, formikHelpers) {
      console.log(values);
    },
  });

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          border: 2,
          borderColor: "secondary.main",
          borderRadius: 1,
          padding: "10px",
          minWidth: 360,
        }}
      >
        <h1>Login</h1>

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
            name="username"
            label="Username"
            variant="outlined"
            value={formik.values.username}
            onChange={formik.handleChange}
            sx={{ marginBottom: 2 }}
            error={formik.touched.username && !formik.errors.username}
            helperText={formik.errors.username}
          />
          <TextField
            id="password"
            name="password"
            label="Password"
            type="password"
            variant="outlined"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && !formik.errors.password}
            helperText={formik.errors.password}
            sx={{ marginBottom: 2 }}
          />
          <Button type="submit" variant="contained">
            Login
          </Button>
        </Box>
        <Box
          sx={{
            marginTop: 2,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <NavLink to="/forgot-password">Forgot your password</NavLink>
          <NavLink to="/sign-up">Create an account</NavLink>
        </Box>
      </Box>
    </Box>
  );
};
