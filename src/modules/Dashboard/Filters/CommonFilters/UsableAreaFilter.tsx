import Grid from "@mui/material/Grid";
import FormNumberField from "../../../../components/FormNumberField";
import { useAppFormContext } from "../utils";

const UsableAreaFilter = () => {
  const { control } = useAppFormContext();
  return (
    <Grid display="flex" gap={2}>
      <FormNumberField label="From" name="usableArea.0" control={control} />
      <FormNumberField label="To" name="usableArea.1" control={control} />
    </Grid>
  );
};

export default UsableAreaFilter;
