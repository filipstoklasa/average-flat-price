import type { Path, Control, FieldValues } from "react-hook-form";

export interface Form<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
}
