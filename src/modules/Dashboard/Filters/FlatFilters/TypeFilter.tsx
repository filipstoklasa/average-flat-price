import FormSelect from "../../../../components/FormSelect";
import { FLAT_TYPE_FILTER_OPTIONS } from "../constants";
import { useAppFormContext } from "../utils";

const TypeFilter = () => {
  const { control } = useAppFormContext();

  return (
    <FormSelect
      control={control}
      name="flatFilter.type"
      label="Type"
      options={FLAT_TYPE_FILTER_OPTIONS()}
      multiple
    />
  );
};

export default TypeFilter;
