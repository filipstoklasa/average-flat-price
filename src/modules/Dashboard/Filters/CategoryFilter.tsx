import FormSelect from "../../../components/FormSelect";
import { CATEGORY_FILTER_OPTIONS } from "./constants";
import { useAppFormContext } from "./utils";

const CategoryFilter = () => {
  const { control } = useAppFormContext();

  return (
    <FormSelect
      control={control}
      name="categoryFilter"
      label="Category type"
      options={CATEGORY_FILTER_OPTIONS()}
    />
  );
};

export default CategoryFilter;
