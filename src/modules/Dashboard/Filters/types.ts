export interface FormValues {
  categoryFilter: string;
  district: { label: string; value: string } | null;
  usableArea: [string, string | undefined];
  flatFilter: {
    type: string[];
  };
}
