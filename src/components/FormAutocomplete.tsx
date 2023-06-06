import Autocomplete from "@mui/material/Autocomplete";
import { FieldValues, useController } from "react-hook-form";
import TextField from "@mui/material/TextField";
import type { Form } from "../models/Form";

interface FormAutocompleteProps<
  T extends FieldValues,
  O extends Record<string, unknown>
> extends Form<T> {
  options: Array<O>;
  label?: string;
  isOptionEqualToValue?: (o1: O, o2: O) => boolean;
}

const FormAutocomplete = <
  T extends FieldValues,
  O extends Record<string, unknown>
>({
  control,
  name,
  options,
  label,
  isOptionEqualToValue,
}: FormAutocompleteProps<T, O>) => {
  const {
    field: { onChange, ...field },
  } = useController({ control, name });

  const onSelect = (_e: unknown, value: O[] | O | null) => {
    onChange(value);
  };

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={options}
      renderInput={(params) => <TextField {...params} label={label} />}
      {...field}
      onChange={onSelect}
      isOptionEqualToValue={isOptionEqualToValue}
    />
  );
};

export default FormAutocomplete;
