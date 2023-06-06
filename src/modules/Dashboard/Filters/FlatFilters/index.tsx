import Grid from "@mui/material/Grid";
import TypeFilter from "./TypeFilter";
import DistrictFilter from "../CommonFilters/DistrictFilter";
import UsableAreaFilter from "../CommonFilters/UsableAreaFilter";
import Slide from "@mui/material/Slide";

const FlatFilters = () => {
  return (
    <Slide direction="right" in mountOnEnter unmountOnExit>
      <Grid container direction="column" gap={2}>
        <TypeFilter />
        <DistrictFilter />
        <UsableAreaFilter />
      </Grid>
    </Slide>
  );
};

export default FlatFilters;
