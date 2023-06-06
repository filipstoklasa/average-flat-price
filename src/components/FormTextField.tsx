import TextField, { TextFieldProps } from "@mui/material/TextField";
import { FieldValues, useController } from "react-hook-form";
import type { Form } from "../models/Form";

export type FormTextFieldProps<T extends FieldValues> = Form<T> &
  TextFieldProps;

const FormTextField = <T extends FieldValues>({
  control,
  name,
  ...textFieldProps
}: FormTextFieldProps<T>) => {
  const { field } = useController({ control, name });
  return <TextField {...textFieldProps} {...field} />;
};

export default FormTextField;
