import Grid from "@mui/material/Grid";
import CategoryFilter from "./CategoryFilter";
import ParametersFilter from "./ParametersFilter";
import SubmitButton from "./SubmitButton";
import Collapse from "@mui/material/Collapse";
import { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ChevronRight from "@mui/icons-material/ChevronRight";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Filters = () => {
  const [checked, setChecked] = useState(true);
  const theme = useTheme();

  const isMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box>
      <Box display={{ xs: "none", md: "block" }}>
        <IconButton onClick={() => setChecked((prev) => !prev)}>
          {checked ? <ChevronLeft /> : <ChevronRight />}
        </IconButton>
      </Box>
      <Collapse
        in={isMd ? checked : true}
        orientation="horizontal"
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid container direction="column" gap={2} pt={2} minWidth={300}>
          <CategoryFilter />
          <ParametersFilter />
          <SubmitButton />
        </Grid>
      </Collapse>
    </Box>
  );
};

export default Filters;
