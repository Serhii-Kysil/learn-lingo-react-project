import { Box } from "@mui/material";
import { useState } from "react";

import LanguageDropdown from "../LanguageDropdown/LanguageDropdown";
import KnowledgeLevelDropdown from "../KnowledgeLevelDropdown/KnowledgeLevelDropdown";
import PriceDropdown from "../PriceDropdown/PriceDropdown";

export const DropDownBlock = () => {
  const [language, setLanguage] = useState("English");
  const [level, setLevel] = useState("A1 Beginner");
  const [price, setPrice] = useState(30);

  return (
    <Box display="flex" justifyContent="space-around" p={3}>
      <LanguageDropdown language={language} setLanguage={setLanguage} />
      <KnowledgeLevelDropdown level={level} setLevel={setLevel} />
      <PriceDropdown price={price} setPrice={setPrice} />
    </Box>
  );
};
