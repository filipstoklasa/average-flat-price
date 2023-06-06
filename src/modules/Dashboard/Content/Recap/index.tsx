import List from "@mui/material/List";
import useGetParametersFilter from "./useGetRecapItems";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import useGetSearchData from "../../hooks/useGetSearchData";
import { priceFormatter } from "../utils";
import { getSquareMeters } from "../../../../utils";
import capitalize from "lodash/capitalize";

const Recap = () => {
  const items = useGetParametersFilter();
  const { data } = useGetSearchData();

  if (!data) {
    return null;
  }

  return (
    <div>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Recap</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography pt={2} component="h1">
            {data.data.description}
          </Typography>
          <List sx={{ display: "flex", flexDirection: "row" }}>{items}</List>
        </AccordionDetails>
      </Accordion>
      <Accordion TransitionProps={{ unmountOnExit: true }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          List of estates
        </AccordionSummary>
        <AccordionDetails sx={{ overflow: "auto", maxHeight: 200 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Location</TableCell>
                <TableCell>Size</TableCell>
                <TableCell>Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.data.estates.map((item) => (
                <TableRow key={item.hash_id}>
                  <TableCell>{capitalize(item.locality)}</TableCell>
                  <TableCell>{getSquareMeters(item.name)}</TableCell>
                  <TableCell>{priceFormatter.format(item.price)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Recap;
