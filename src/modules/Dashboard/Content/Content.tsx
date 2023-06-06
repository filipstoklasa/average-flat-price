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

const Content = () => {
  const { data, isInitialLoading, isRefetching, error } = useGetSearchData();

  if (isInitialLoading) {
    return (
      <Box
        display="flex"
        height="100%"
        justifyContent="center"
        alignItems="center"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        display="flex"
        height="100%"
        justifyContent="center"
        alignItems="center"
      >
        <Alert severity="error">No results</Alert>
      </Box>
    );
  }

  if (!data) {
    return (
      <Box
        display="flex"
        height="100%"
        justifyContent="center"
        alignItems="center"
      >
        <Box display="inline-flex">
          <Typography color="GrayText">
            Nothing to display. Use Filter{" "}
          </Typography>
          <Box px={1}>
            <SearchIcon color="disabled" />
          </Box>
          <Typography color="GrayText"> to search for estates</Typography>
        </Box>
      </Box>
    );
  }

  return (
    <Fade in>
      <Box py={4}>
        {isRefetching && <LinearProgress />}
        <Box my={2}>
          <Paper>
            <Typography p={2} variant="h3" align="center">
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
