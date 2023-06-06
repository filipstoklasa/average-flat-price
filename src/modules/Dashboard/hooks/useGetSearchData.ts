import { useWatch } from "react-hook-form";
import { useAppFormContext } from "../Filters/utils";
import useSearchEstates from "../../../api/useSearchEstates";

const useGetSearchData = () => {
  const { control } = useAppFormContext();
  const watchData = useWatch({ control });

  return useSearchEstates(watchData);
};

export default useGetSearchData;
