import styled from "styled-components";
import { device } from "./index";

export const BookDetails = styled.section`
  width: 100%;
  background-color: ${(props) => props.theme.colors.white};

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0.5em !important;
  padding: 2em;

  @media ${device.tablet} {
    flex-direction: row;
  }
`;
