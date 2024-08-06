/* eslint-disable react/prop-types */
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

import css from "./LanguageDropdown.module.css";

export const LanguageDropdown = ({ language, setLanguage }) => {
  return (
    <FormControl className={css.form}>
      <InputLabel id="language-label">Languages</InputLabel>
      <Select
        labelId="language-label"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className={css.select}
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
