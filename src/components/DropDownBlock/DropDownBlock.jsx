/* eslint-disable react/prop-types */
import { Box } from "@mui/material";

import css from "./DropDownBlock.module.css";

import { LanguageDropdown } from "../LanguageDropdown/LanguageDropdown";
import { KnowledgeLevelDropdown } from "../KnowledgeLevelDropdown/KnowledgeLevelDropdown";
import { PriceDropdown } from "../PriceDropdown/PriceDropdown";

export const DropDownBlock = ({
  language,
  setLanguage,
  level,
  setLevel,
  price,
  setPrice,
}) => {
  return (
    <div className={css.container}>
      <Box
        display="flex"
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
