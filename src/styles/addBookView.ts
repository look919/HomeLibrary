import styled from "styled-components";
import { Button, TextField } from "@material-ui/core";

export const AddBookForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AddBookTextField = styled(TextField)`
  width: 100%;
  max-width: 60em;
  margin-bottom: 2em !important;
`;
export const AddBookTextFieldSmall = styled(TextField)`
  width: 15em;
  text-align: right !important;

  &:not(:last-child) {
    margin-right: 1.5em;
  }
`;

export const AddBookBtn = styled(Button)`
  width: 100%;
  max-width: 45em !important;
  margin-top: 2.5em !important;
`;
