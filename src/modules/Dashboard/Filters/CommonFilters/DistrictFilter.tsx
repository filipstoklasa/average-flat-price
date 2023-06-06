import { District } from "../../../../models/District";
import { getOptionsFromEnum, useAppFormContext } from "../utils";
import FormAutocomplete from "../../../../components/FormAutocomplete";

const DISTRICT_FILTER_OPTIONS = getOptionsFromEnum(District);

const DistrictFilter = () => {
  const { control } = useAppFormContext();
  return (
    <FormAutocomplete
      control={control}
      name="district"
      label="District type"
      options={DISTRICT_FILTER_OPTIONS}
      isOptionEqualToValue={(o1, o2) => o1.value === o2.value}
    />
  );
};

export default DistrictFilter;
