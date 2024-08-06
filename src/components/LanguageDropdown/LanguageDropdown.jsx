/* eslint-disable react/prop-types */
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

import css from "./LanguageDropdown.module.css";

export const LanguageDropdown = ({ language, setLanguage }) => {
  return (
    <FormControl className={css.form} sx={{ border: "none" }}>
      <InputLabel id="language-label" className={css.label}>
        Languages
      </InputLabel>
      <Select
        labelId="language-label"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className={css.select}
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
          "& .MuiMenuItem": {
            color: "grey",
          },
          "& .Mui-selected": {
            color: "#121417",
          },
        }}
      >
        <MenuItem value="French">French</MenuItem>
        <MenuItem value="English">English</MenuItem>
        <MenuItem value="German">German</MenuItem>
        <MenuItem value="Ukrainian">Ukrainian</MenuItem>
        <MenuItem value="Polish">Polish</MenuItem>
      </Select>
    </FormControl>
  );
};
