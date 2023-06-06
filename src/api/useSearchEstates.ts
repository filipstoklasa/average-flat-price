import { useQuery } from "@tanstack/react-query";
import apiClient from "./client";
import { FormValues } from "../modules/Dashboard/Filters/types";
import { Estate } from "../models/Estate";
import { DeepPartialSkipArrayKey } from "react-hook-form";

interface SearchEstatesResponse {
  description: string;
  estates: Estate[];
  averagePrice: number;
}

export const queryKey = "searchEstates";

const useSearchEstates = (filters: DeepPartialSkipArrayKey<FormValues>) =>
  useQuery(
    [queryKey],
    () => apiClient.post<SearchEstatesResponse>("/", filters),
    {
      enabled: false,
    }
  );

export default useSearchEstates;
