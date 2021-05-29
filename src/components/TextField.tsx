import { Box, Checkbox } from "@material-ui/core";
import React, { useState, FC } from "react";
import { FiltersTextField } from "src/styles/booksView";

interface Props {
  value: string;
  label: string;
  name: string;
  onChange: () => void;
  disabled?: boolean;
  withCheckBox?: boolean;
}

const TextField: FC<Props> = ({
  value,
  label,
  name,
  onChange,
  disabled,
  withCheckBox = false,
}) => {
  const [isDisabled, setIsDisabled] = useState<boolean>(disabled || false);

  return (
    <Box display="flex" alignItems="center">
      {withCheckBox && (
        <Checkbox
          color="primary"
          value={!isDisabled}
          onChange={() => setIsDisabled((prevState) => !prevState)}
        />
      )}

      <FiltersTextField
        label={label}
        value={value}
        name={name}
        onChange={onChange}
        disabled={isDisabled}
        fullWidth
        variant="outlined"
        size="small"
        inputProps={{ style: { fontSize: 14 } }}
        InputLabelProps={{ style: { fontSize: 14 } }}
      />
    </Box>
  );
};

export default TextField;
