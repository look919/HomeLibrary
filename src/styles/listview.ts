import styled from "styled-components";
import { Table, TableCell, TextField, Select } from "@material-ui/core";
import { device } from "./index";

export const StyledTable = styled(Table)`
  margin: 1.5em 0 !important;
`;

export const NoTableCell = styled(TableCell)`
  width: 1em;
  text-align: right;

  padding: 0 !important;
  padding-right: 4px !important;
`;

export const StyledFilters = styled.div`
  margin: 0.5em !important;
  display: flex;
  flex-direction: column;
  align-items: center;

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
  width: 70%;
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
