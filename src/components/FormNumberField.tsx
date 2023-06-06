import { FieldValues } from "react-hook-form";
import FormTextField, { FormTextFieldProps } from "./FormTextField";

const FormNumberField = <T extends FieldValues>(
  props: FormTextFieldProps<T>
) => (
  <FormTextField
    type="number"
    inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
    {...props}
  />
);

export default FormNumberField;
