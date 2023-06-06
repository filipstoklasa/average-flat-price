import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { FieldValues, useController } from "react-hook-form";
import type { Form } from "../models/Form";

type Option = {
  label: string;
  value: string | ReadonlyArray<string> | number | undefined;
};

interface FormSelectProps<T extends FieldValues> extends Form<T> {
  options: Array<Option>;
  label?: string;
  multiple?: boolean;
}

const FormSelect = <T extends FieldValues>({
  control,
  name,
  options,
  label,
  multiple,
}: FormSelectProps<T>) => {
  const { field } = useController({ control, name });

  return (
    <FormControl>
      <InputLabel>{label}</InputLabel>
      <Select {...field} label={label} multiple={multiple}>
        {options.map(({ label, value }) => (
          <MenuItem key={label} value={value}>
            {label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default FormSelect;
