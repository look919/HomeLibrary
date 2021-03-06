import styled from "styled-components";
import {
  TableContainer,
  TableHead,
  TableRow,
  TableRowProps,
  TableCell,
  TextField,
  Select,
  darken,
} from "@material-ui/core";
import { device } from "./index";

export const StyledTableContainer = styled(TableContainer)`
  margin: 3em 0 !important;
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 5px;
`;

export const StyledTableHead = styled(TableHead)`
  font-weight: 600 !important;

  th {
    font-weight: 600 !important;
  }
`;

interface StyledTableRowsProps extends TableRowProps {
  $isRowEven: boolean;
}

export const StyledTableRow = styled(TableRow)<StyledTableRowsProps>`
  background-color: ${(props) =>
    props.$isRowEven
      ? props.theme.colors.background
      : darken(props.theme.colors.background, 0.1)};
`;

export const NoTableCell = styled(TableCell)`
  width: 1em;
  text-align: right;

  padding: 0 4px !important;

  @media ${device.tablet} {
    padding-left: 16px !important;
  }
`;

export const BookTitleCell = styled(TableCell)`
  position: relative;

  display: flex !important;
  align-items: center;
`;

export const DetailsCell = styled(TableCell)``;

export const BookImage = styled.img`
  position: absolute;
  opacity: 0.4;
  right: 0;

  height: 64px;
  width: 42px;

  @media ${device.mobile} {
    position: relative;
    opacity: 1;

    height: 80px;
    width: 53px;
    margin-right: 1em;
  }
`;

export const StyledFilters = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.background};

  margin: 0.5em !important;
  padding: 1em 2.5em;
  border-radius: 5px;

  @media ${device.mobileL} {
    display: grid;
    grid-gap: 1em;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const FiltersTextField = styled(TextField)`
  &:not(:last-child) {
    margin-bottom: 0.8em;
  }

  @media ${device.mobileL} {
    margin-bottom: 0;
  }
`;
export const FiltersSelect = styled(Select)`
  height: 39px;
  margin-right: 5px;
  width: 100%;
  margin-bottom: 0.8em;

  &:not(:last-child) {
    margin-bottom: 0;
  }

  @media ${device.mobileL} {
    margin-bottom: 0;
  }
`;

export const StyledFilterBox = styled.div`
  margin: 0.5em !important;
  display: flex;
  justify-content: space-between;

  &:not(:last-child) {
    margin-bottom: 0;
  }
`;

export const NoBooksDataView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2em;
`;

export const NoBooksDataImage = styled.img`
  width: 80%;

  @media ${device.mobileL} {
    max-width: 40em;
  }
`;

export const NoBooksButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    margin-top: 1em;
  }
`;
