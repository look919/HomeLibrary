import React from "react";
import { SvgIcon } from "@material-ui/core";
import { BookOpen as BookOpenIcon } from "react-feather";
import { StyledHeader, StyledAppName } from "src/styles/layout";

const Header = () => {
  return (
    <StyledHeader>
      <StyledAppName>Home Library</StyledAppName>
      <SvgIcon fontSize="small">
        <BookOpenIcon />
      </SvgIcon>
    </StyledHeader>
  );
};

export default Header;
