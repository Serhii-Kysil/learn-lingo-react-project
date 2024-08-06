/* eslint-disable react/prop-types */
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

import css from "./KnowledgeLevelDropdown.module.css";

export const KnowledgeLevelDropdown = ({ level, setLevel }) => {
  return (
    <FormControl className={css.form}>
      <InputLabel
        id="knowledge-level-label"
        sx={{
          color: "#8A8A89",
          fontSize: "14px",
          lineHeight: "18px",
          fontWeight: "500",
        }}
      >
        Level of knowledge
      </InputLabel>
      <Select
        labelId="knowledge-level-label"
        value={level}
        onChange={(e) => setLevel(e.target.value)}
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
        <MenuItem value="A1 Beginner">A1 Beginner</MenuItem>
        <MenuItem value="A2 Elementary">A2 Elementary</MenuItem>
        <MenuItem value="B1 Intermediate">B1 Intermediate</MenuItem>
        <MenuItem value="B2 Upper-Intermediate">B2 Upper-Intermediate</MenuItem>
      </Select>
    </FormControl>
  );
};
