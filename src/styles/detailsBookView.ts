import styled from "styled-components";

export const DetailsBookComponent = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.white};

  margin: 0.5em !important;
  padding: 2em;
`;
