import React, { FC } from "react";
import { Divider } from "@material-ui/core";
import TextField from "src/components/TextField";
import {
  StyledFilters,
  FiltersSelect,
  StyledFilterBox,
} from "src/styles/booksView";
import { BooksFilters } from "src/types";

interface FiltersProps {
  filters: BooksFilters;
  onFiltersChange: any;
}

const Filters: FC<FiltersProps> = ({ filters, onFiltersChange }) => {
  return (
    <>
      <StyledFilters>
        <TextField
          value={filters.title}
          label="Title"
          name="title"
          onChange={onFiltersChange}
          withCheckBox={true}
        />
        <TextField
          value={filters.author}
          label="Author"
          name="author"
          onChange={onFiltersChange}
          withCheckBox={true}
        />
        <StyledFilterBox>
          <FiltersSelect
            native
            variant="outlined"
            value={filters.pagesCompare || ""}
            name="pagesCompare"
            onChange={onFiltersChange}
          >
            <option value={""}>-</option>
            <option value={"BiggerThan"}>Bigger than</option>
            <option value={"SmallerThan"}>Smaller than</option>
          </FiltersSelect>
          <TextField
            value={filters.pages?.toLocaleString() || ""}
            label="Pages"
            name="pages"
            onChange={onFiltersChange}
            disabled={!filters.pagesCompare}
          />
        </StyledFilterBox>
        <StyledFilterBox>
          <FiltersSelect
            native
            variant="outlined"
            value={filters.yearCompare || ""}
            name="yearCompare"
            onChange={onFiltersChange}
          >
            <option value={""}>-</option>
            <option value={"BiggerThan"}>Bigger than</option>
            <option value={"SmallerThan"}>Smaller than</option>
          </FiltersSelect>
          <TextField
            value={filters.year?.toLocaleString() || ""}
            label="Release Year"
            name="year"
            onChange={onFiltersChange}
            disabled={!filters.yearCompare}
          />
        </StyledFilterBox>
      </StyledFilters>
      <Divider />
    </>
  );
};

export default Filters;
