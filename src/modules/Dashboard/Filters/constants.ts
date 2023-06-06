import { Category } from "../../../models/Category";
import { FlatType } from "../../../models/FlatType";
import { getOptionsFromEnum } from "./utils";

export const CATEGORY_FILTER_OPTIONS = () =>
  getOptionsFromEnum(Category).map((item, index) => ({
    ...item,
    disabled: index > 0,
  }));
export const FLAT_TYPE_FILTER_OPTIONS = () => getOptionsFromEnum(FlatType);
