import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export const PriceDropdown = ({ price, setPrice }) => {
  return (
    <FormControl fullWidth>
      <InputLabel id="price-label">Price</InputLabel>
      <Select
        labelId="price-label"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      >
        <MenuItem value={10}>10 $</MenuItem>
        <MenuItem value={20}>20 $</MenuItem>
        <MenuItem value={30}>30 $</MenuItem>
        <MenuItem value={40}>40 $</MenuItem>
      </Select>
    </FormControl>
  );
};
