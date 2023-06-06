import { Category } from "../../../models/Category";
import { FlatType } from "../../../models/FlatType";
import { getOptionsFromEnum } from "./utils";

export const CATEGORY_FILTER_OPTIONS = () => getOptionsFromEnum(Category);
export const FLAT_TYPE_FILTER_OPTIONS = () => getOptionsFromEnum(FlatType);
