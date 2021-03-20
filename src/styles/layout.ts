import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};

  display: flex;
  padding: 1.5em 1em;
  margin-bottom: 2em;
`;

export const StyledAppName = styled.h1`
  margin-right: 4px;
`;
