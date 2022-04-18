import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function RouteNotFound() {
  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Typography gutterBottom variant="h4">
        Oops... Seems like there is nothing here...
      </Typography>
      <Button component={Link} to="/">
        Back to Homepage
      </Button>
    </Container>
  );
}
