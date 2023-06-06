import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ThemeToggle from "./ThemeToggle";

const Navigation = () => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Average property price
        </Typography>
        <ThemeToggle />
      </Toolbar>
    </AppBar>
  </Box>
);

export default Navigation;
