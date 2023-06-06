import { useForm, useFormContext } from "react-hook-form";
import { CATEGORY_FILTER_OPTIONS, FLAT_TYPE_FILTER_OPTIONS } from "./constants";
import type { FormValues } from "./types";

const MOCK_FILTER = {
  defaultValues: {
    categoryFilter: "1",
    district: {
      label: "Praha 1",
      value: "5001",
    },
    usableArea: ["1", "111"],
    flatFilter: {
      type: ["3"],
    },
  },
};

export const useAppFormContext = () => useFormContext<FormValues>();

export const useAppForm = () => useForm<FormValues>(MOCK_FILTER);

export const getOptionsFromEnum = (
  enumeration: Record<string, string | number>
) =>
  Object.entries(enumeration).map((item) => ({
    label: item[0],
    value: item[1],
  }));

export const mapFlatTypes = (types: string[]) => {
  const typesMap: Record<string | number, string> = {};

  for (const type of FLAT_TYPE_FILTER_OPTIONS()) {
    typesMap[type.value] = type.label;
  }
  return types.map((item) => typesMap[item]).join(", ");
};

export const mapCategory = (category: string) =>
  CATEGORY_FILTER_OPTIONS().find(({ value }) => value === category)?.label ??
  "UNKNOWN";
