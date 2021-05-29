import styled from "styled-components";
import { Button } from "@material-ui/core";
import { device } from "./index";

export const BookDetails = styled.section`
  width: 100%;
  background-color: ${(props) => props.theme.colors.background};

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0.5em !important;
  padding: 2em;

  @media ${device.tablet} {
    flex-direction: row;
  }
`;

export const BookPhoto = styled.img`
  height: 320px;
  width: 212px;
`;

export const BookInformations = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 1em 2.5em;
`;

export const Description = styled.div`
  width: 100%;
  margin-top: 2em;
  font-size: 14px;
`;

export const BooksOptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
export const RateBookBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2em;
`;

export const RateBookIconBtn = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 1px !important;
`;
