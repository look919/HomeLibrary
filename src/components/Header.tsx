import React, { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, IconButton, SvgIcon } from "@material-ui/core";
import { Sun as LightThemeIcon, Moon as DarkThemeIcon } from "react-feather";
import { BookOpen as BookOpenIcon } from "react-feather";
import { StyledHeader, AppName, AppNameText } from "src/styles/layout";

interface HeaderProps {
  theme: string;
  themeToggler: () => void;
}

const Header: FC<HeaderProps> = ({ theme, themeToggler }) => {
  const location = useLocation();

  return (
    <StyledHeader>
      <AppName to="/">
        <AppNameText>Home Library</AppNameText>
        <SvgIcon fontSize="small">
          <BookOpenIcon />
        </SvgIcon>
      </AppName>
      <IconButton onClick={themeToggler}>
        <SvgIcon fontSize="large" color="inherit">
          {theme === "light" ? (
            <LightThemeIcon color="yellow" />
          ) : (
            <DarkThemeIcon color="gray" />
          )}
        </SvgIcon>
      </IconButton>
      {location.pathname !== "/add" && (
        <Button variant="contained" color="primary" component={Link} to="/add">
          Add Book
        </Button>
      )}
    </StyledHeader>
  );
};

export default Header;
