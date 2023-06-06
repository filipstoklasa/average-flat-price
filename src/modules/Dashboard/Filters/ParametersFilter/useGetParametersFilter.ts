import { useWatch } from "react-hook-form";
import { useAppFormContext } from "../utils";
import { Category } from "../../../../models/Category";
import FlatFilters from "../FlatFilters";

export const useGetParametersFilter = () => {
  const { control } = useAppFormContext();
  const category = useWatch({ control, name: "categoryFilter" });

  switch (category) {
    case Category.Byty:
      return FlatFilters;
    default:
      return null;
  }
};
