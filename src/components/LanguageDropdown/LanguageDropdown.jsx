import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export const LanguageDropdown = ({ language, setLanguage }) => {
  return (
    <FormControl fullWidth>
      <InputLabel id="language-label">Languages</InputLabel>
      <Select
        labelId="language-label"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
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
