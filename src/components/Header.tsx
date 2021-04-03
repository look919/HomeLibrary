import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, SvgIcon } from "@material-ui/core";
import { BookOpen as BookOpenIcon } from "react-feather";
import { StyledHeader, AppName, AppNameText } from "src/styles/layout";

const Header = () => {
  const location = useLocation();

  return (
    <StyledHeader>
      <AppName to="/">
        <AppNameText>Home Library</AppNameText>
        <SvgIcon fontSize="small">
          <BookOpenIcon />
        </SvgIcon>
      </AppName>
      {location.pathname !== "/add" && (
        <Button variant="contained" color="primary" component={Link} to="/add">
          Add Book
        </Button>
      )}
    </StyledHeader>
  );
};

export default Header;
