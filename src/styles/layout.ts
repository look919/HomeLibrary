import styled from "styled-components";
import { Link } from "react-router-dom";
import { device } from "./index";

export const Flex = styled.div`
  display: flex;
`;

export const StyledHeader = styled.header`
  width: 100vw;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};

  display: flex;
  align-items: center;
  padding: 1.5em 1em;
  margin-bottom: 1em;
  height: 7em;

  @media ${device.tablet} {
    height: 10em;
    padding: 1.5em 3em;
  }
`;

export const AppName = styled(Link)`
  display: flex;
  margin-right: auto;

  &:link,
  &:visited {
    color: ${(props) => props.theme.colors.white};
    text-decoration: none;
    cursor: pointer;
  }
`;

export const AppNameText = styled.h1`
  margin-right: 4px;
`;

export const PageContainer = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100em;

  padding: 1em;
`;

export const PageHeading = styled.h2`
  margin: 2em 0;
  font-size: 1.8em;
`;

export const StyledLink = styled(Link)`
  &:link,
  &:visited {
    color: ${(props) => props.theme.colors.black};
    text-decoration: none;
    cursor: pointer;
  }
  &:hover {
    text-decoration: underline;
  }
`;
