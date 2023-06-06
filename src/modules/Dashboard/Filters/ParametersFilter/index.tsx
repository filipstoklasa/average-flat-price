import { useGetParametersFilter } from "./useGetParametersFilter";

const ParametersFilter = () => {
  const Filter = useGetParametersFilter();

  if (!Filter) {
    return null;
  }

  return <Filter />;
};

export default ParametersFilter;
