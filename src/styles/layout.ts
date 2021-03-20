import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
`;

export const StyledHeader = styled.header`
  width: 100vw;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};

  display: flex;
  padding: 1.5em 1em;
  margin-bottom: 1em;
`;

export const AppName = styled.section`
  display: flex;
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
