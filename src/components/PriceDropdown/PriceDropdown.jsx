/* eslint-disable react/prop-types */
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

import css from "./PriceDropdown.module.css";

export const PriceDropdown = ({ price, setPrice }) => {
  return (
    <FormControl className={css.form}>
      <InputLabel id="price-label">Price</InputLabel>
      <Select
        labelId="price-label"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        sx={{
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
          "& .MuiSelect-select": {
            backgroundColor: "#f5f5f5",
            borderRadius: "14px",
            padding: "14px 18px",
            background: "#FFFFFF",
            margin: "8px 0px 0px 0px",
            color: "#121417",
            fontWeight: "500",
            fontSize: "18px",
            lineHeight: "20px",
          },
          "& .MuiMenuItem-root": {
            color: "grey",
          },
          "& .Mui-selected": {
            color: "#121417",
          },
        }}
        MenuProps={{
          PaperProps: {
            sx: {
              "& .MuiMenuItem-root": {
                background: "#FFFFFF",
                fontSize: "18px",
                lineHeight: "20px",
                color: "#12141733",
                padding: "8px 18px",
                borderRadius: "12px",

                "&.Mui-selected": {
                  color: "#121417",
                  fontWeight: "500",
                },
                "&.Mui-selected:hover": {
                  backgroundColor: "transparent",
                  color: "#121417",
                },
              },
              "& .MuiList-root": {
                padding: "6px 0px",
              },
            },
          },
        }}
      >
        <MenuItem value={10}>10 $</MenuItem>
        <MenuItem value={20}>20 $</MenuItem>
        <MenuItem value={30}>30 $</MenuItem>
        <MenuItem value={40}>40 $</MenuItem>
      </Select>
    </FormControl>
  );
};
