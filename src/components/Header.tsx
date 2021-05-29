import React, { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, SvgIcon } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { BookOpen as BookOpenIcon } from "react-feather";
import {
  StyledHeader,
  AppName,
  AppNameText,
  MenuButton,
  IconWrapper,
} from "src/styles/layout";

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
      <MenuButton onClick={themeToggler}>
        <IconWrapper>
          {theme === "light" ? (
            <FontAwesomeIcon icon={faSun} />
          ) : (
            <FontAwesomeIcon icon={faMoon} />
          )}
        </IconWrapper>
      </MenuButton>
      {location.pathname !== "/add" && (
        <Button variant="contained" color="primary" component={Link} to="/add">
          Add Book
        </Button>
      )}
    </StyledHeader>
  );
};

export default Header;
