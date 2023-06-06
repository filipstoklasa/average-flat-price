import { useWatch } from "react-hook-form";
import {
  mapCategory,
  mapFlatTypes,
  useAppFormContext,
} from "../../Filters/utils";
import { Category } from "../../../../models/Category";
import { useMemo } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import HouseIcon from "@mui/icons-material/House";
import { areaTypeRecap } from "../../Filters/CommonFilters/CommonRecaps";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import PublicIcon from "@mui/icons-material/Public";
import ApartmentIcon from "@mui/icons-material/Apartment";

const getRecapItem = ({
  Icon,
  category,
  value,
}: {
  Icon: React.ReactNode;
  category: string;
  value: string;
}) => (
  <ListItem key={category}>
    <ListItemAvatar>
      <Avatar>{Icon}</Avatar>
    </ListItemAvatar>
    <ListItemText primary={category} secondary={<b>{value}</b>} />
  </ListItem>
);

const useGetParametersFilter = () => {
  const { control } = useAppFormContext();
  const formData = useWatch({ control });

  const commonRecaps = useMemo(() => {
    const recaps: JSX.Element[] = [];
    const { categoryFilter, usableArea, district, flatFilter } = formData;

    if (categoryFilter) {
      recaps.push(
        getRecapItem({
          Icon: <HouseIcon />,
          category: "Typ",
          value: mapCategory(categoryFilter),
        })
      );
    }

    if (usableArea && usableArea.some((item) => !!item)) {
      recaps.push(
        getRecapItem({
          Icon: <FullscreenIcon />,
          category: "Velikost",
          value: areaTypeRecap(usableArea),
        })
      );
    }

    if (district?.label) {
      recaps.push(
        getRecapItem({
          Icon: <PublicIcon />,
          category: "Oblast",
          value: district.label,
        })
      );
    }

    switch (categoryFilter) {
      case Category.Byty:
        if (flatFilter?.type?.length)
          recaps.push(
            getRecapItem({
              Icon: <ApartmentIcon />,
              category: "Dispozice",
              value: mapFlatTypes(flatFilter.type),
            })
          );
        break;
      default:
    }
    return recaps;
  }, [formData]);

  return commonRecaps;
};

export default useGetParametersFilter;
