import { Alert } from "@mui/material";

interface Props {
  message: string;
}

export const ErrorMessage = (props: Props) => {
  return (
    <Alert
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      severity="error"
    >
      {props.message}
    </Alert>
  );
};
