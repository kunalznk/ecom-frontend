import { Autocomplete, Stack, TextField } from "@mui/material";
import { useState } from "react";
import Paragraph from "./Paragraph";

const Select = (props: any) => {
  const [value, setValue] = useState<string | null>(null);
  const Products = props.options;
  console.log({ value });

  return (
    <Autocomplete
      options={Products}
      renderInput={(params) => (
        <TextField
          {...params}
          label={<Paragraph>Select Product</Paragraph>}
          sx={{
            width: "450px",
            height: "50px",
            left: "10px",
            right: "10px",
            top: "10px",
            borderRadius: "5px",
          }}
        />
      )}
      value={value}
      onChange={(event: any, newvalue: string | null) => setValue(newvalue)}
    />
  );
};

export default Select;