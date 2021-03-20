import React from "react";
import { SvgIcon } from "@material-ui/core";
import { BookOpen as BookOpenIcon } from "react-feather";
import { StyledHeader, AppName, AppNameText } from "src/styles/layout";

const Header = () => {
  return (
    <StyledHeader>
      <AppName>
        <AppNameText>Home Library</AppNameText>
        <SvgIcon fontSize="small">
          <BookOpenIcon />
        </SvgIcon>
      </AppName>
    </StyledHeader>
  );
};

export default Header;
