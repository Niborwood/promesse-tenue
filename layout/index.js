import Header from "./header";
import { Container, Box } from "@mui/material";
import { Fragment } from "react";

export default function Layout({ children }) {
  return (
    <Fragment>
      <Header />
      <Box
        sx={{
          background: "linear-gradient(#14b8a6, #06b6d4)",
          minHeight: "100vh",
        }}
      >
        <Container maxWidth="sm">{children}</Container>
      </Box>
    </Fragment>
  );
}
