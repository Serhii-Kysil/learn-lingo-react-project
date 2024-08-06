import { Box } from "@mui/material";
import { useState } from "react";

import css from "./DropDownBlock.module.css";

import { LanguageDropdown } from "../LanguageDropdown/LanguageDropdown";
import { KnowledgeLevelDropdown } from "../KnowledgeLevelDropdown/KnowledgeLevelDropdown";
import { PriceDropdown } from "../PriceDropdown/PriceDropdown";

export const DropDownBlock = () => {
  const [language, setLanguage] = useState("English");
  const [level, setLevel] = useState("A1 Beginner");
  const [price, setPrice] = useState(30);

  return (
    <div className={css.container}>
      <Box
        display="flex"
        justifyContent="space-around"
        p={3}
        gap={"20px"}
        padding={0}
        margin={"64px 0px 32px 0px"}
      >
        <LanguageDropdown language={language} setLanguage={setLanguage} />
        <KnowledgeLevelDropdown level={level} setLevel={setLevel} />
        <PriceDropdown price={price} setPrice={setPrice} />
      </Box>
    </div>
  );
};
