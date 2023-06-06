import { FormProvider } from "react-hook-form";
import { useAppForm } from "./Filters/utils";
import { DevTool } from "@hookform/devtools";
import Content from "./Content/Content";
import Filters from "./Filters";
import { Box } from "@mui/material";

const Dashboard = () => {
  const form = useAppForm();

  return (
    <FormProvider {...form}>
      <Box display="flex" p={2} flexDirection={{ xs: "column", md: "row" }}>
        <Filters />
        <Box flex={1} px={{ md: 4 }} overflow="hidden">
          <Content />
        </Box>
      </Box>
      <DevTool control={form.control} />
    </FormProvider>
  );
};

export default Dashboard;
