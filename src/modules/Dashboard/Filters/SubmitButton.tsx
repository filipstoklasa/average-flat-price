import { useWatch } from "react-hook-form";
import { useAppFormContext } from "./utils";
import LoadingButton from "@mui/lab/LoadingButton";
import useSearchEstates from "../../../api/useSearchEstates";

const SubmitButton = () => {
  const { control } = useAppFormContext();

  const values = useWatch({ control });
  const { refetch, isRefetching } = useSearchEstates(values);

  if (!values.categoryFilter) {
    return null;
  }

  return (
    <LoadingButton loading={isRefetching} onClick={() => refetch()}>
      Search
    </LoadingButton>
  );
};

export default SubmitButton;
