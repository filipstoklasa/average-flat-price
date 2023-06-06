import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import { Fade, LinearProgress, Paper, Typography } from "@mui/material";
import PriceSize from "./Graphs/PriceSize";
import { getSquareMeters } from "../../../utils";
import { priceFormatter } from "./utils";
import useGetSearchData from "../hooks/useGetSearchData";
import Recap from "./Recap";
import SearchIcon from "@mui/icons-material/Search";
import { PropsWithChildren } from "react";

const StateWrapper = ({ children }: PropsWithChildren) => (
  <Box display="flex" height="100%" justifyContent="center" alignItems="center">
    {children}
  </Box>
);

const Content = () => {
  const { data, isInitialLoading, isRefetching, error } = useGetSearchData();

  if (isInitialLoading) {
    return (
      <StateWrapper>
        <CircularProgress />
      </StateWrapper>
    );
  }

  if (error) {
    return (
      <StateWrapper>
        <Alert severity="error">No results</Alert>
      </StateWrapper>
    );
  }

  if (!data) {
    return (
      <StateWrapper>
        <Typography color="GrayText" py={2}>
          Nothing to display. Use Filter to search for estates
        </Typography>
      </StateWrapper>
    );
  }

  return (
    <Fade in>
      <Box py={4}>
        {isRefetching && <LinearProgress />}
        <Box my={2}>
          <Paper>
            <Typography p={2} variant="h1" align="center">
              Average price:{" "}
              {priceFormatter.format(Number(data.data.averagePrice.toFixed(0)))}
            </Typography>
          </Paper>
        </Box>
        <Recap />

        <PriceSize
          data={data.data.estates.map(({ price, name }) => ({
            price,
            size: Number(getSquareMeters(name).split("\u00a0")[0]),
          }))}
        />
      </Box>
    </Fade>
  );
};

export default Content;
