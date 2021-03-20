import React, { FC } from "react";
import { Divider } from "@material-ui/core";
import {
  StyledFilters,
  FiltersTextField,
  FiltersSelect,
  StyledFilterBox,
} from "src/styles/test";
import { BooksFilters } from "src/types";

interface FiltersProps {
  filters: BooksFilters;
  onFiltersChange: any;
}

const Filters: FC<FiltersProps> = ({ filters, onFiltersChange }) => {
  return (
    <>
      <StyledFilters>
        <FiltersTextField
          size="small"
          fullWidth
          label="Title"
          value={filters.title}
          name="title"
          variant="outlined"
          onChange={onFiltersChange}
          inputProps={{ style: { fontSize: 14 } }}
          InputLabelProps={{ style: { fontSize: 14 } }}
        />
        <FiltersTextField
          size="small"
          fullWidth
          label="Author"
          value={filters.author}
          name="author"
          variant="outlined"
          inputProps={{ style: { fontSize: 14 } }}
          InputLabelProps={{ style: { fontSize: 14 } }}
          onChange={onFiltersChange}
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
          <FiltersTextField
            size="small"
            type="number"
            fullWidth
            label="Pages"
            value={filters.pages || ""}
            name="pages"
            variant="outlined"
            inputProps={{ style: { fontSize: 14, textAlign: "right" } }}
            InputLabelProps={{ style: { fontSize: 14 } }}
            onChange={onFiltersChange}
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
          <FiltersTextField
            size="small"
            type="number"
            label="Release Year"
            fullWidth
            value={filters.year || ""}
            name="year"
            variant="outlined"
            inputProps={{ style: { fontSize: 14, textAlign: "right" } }}
            InputLabelProps={{ style: { fontSize: 14 } }}
            onChange={onFiltersChange}
          />
        </StyledFilterBox>
      </StyledFilters>
      <Divider />
    </>
  );
};

export default Filters;
