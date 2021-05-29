import React, { FC } from "react";
import { FiltersTextField } from "src/styles/booksView";

interface Props {
  value: string;
  label: string;
  name: string;
  onChange: () => void;
  disabled?: boolean;
}

const TextField: FC<Props> = ({ value, label, name, onChange, disabled }) => {
  return (
    <FiltersTextField
      label={label}
      value={value}
      name={name}
      onChange={onChange}
      disabled={disabled}
      fullWidth
      variant="outlined"
      size="small"
      inputProps={{ style: { fontSize: 14 } }}
      InputLabelProps={{ style: { fontSize: 14 } }}
    />
  );
};

export default TextField;
// <Box display="flex" alignItems="center">
