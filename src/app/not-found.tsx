import Link from "next/link";
import { Button, Container, Typography } from "@mui/material";

const NotFoundPage = () => {
  return (
    <Container
      maxWidth="sm"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(100vh - 70px)",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Page Not Found
      </Typography>
      <Typography variant="body1" paragraph>
        Oops! The page you are looking for does not exist.
      </Typography>
      <Button variant="contained" color="primary">
        <Link href="/home" style={{ textDecoration: "none", color: "white" }}>
          Home
        </Link>
      </Button>
    </Container>
  );
};

export default NotFoundPage;
