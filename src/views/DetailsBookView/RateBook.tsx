import React, { useState, useEffect, FC } from "react";
import { Typography } from "@material-ui/core";
import {
  StarRounded as StarRoundedIcon,
  StarBorderRounded as StarBorderRoundedIcon,
} from "@material-ui/icons";
import { useDispatch } from "src/store";
import { RateBookBox, RateBookIconBtn } from "src/styles/detailsBookView";
import { updateBook } from "src/slices/books";

interface RateBookProps {
  bookId: string;
  bookRating: number;
}

const RateBook: FC<RateBookProps> = ({ bookId, bookRating }) => {
  const dispatch = useDispatch();
  const [rating, setRating] = useState<number>(0);
  const starsArr = ["", "", "", "", ""];

  useEffect(() => {
    setRating(bookRating);
  }, [bookRating]);

  const handleSetBookRating = (newRating: number) => {
    setRating(newRating);
    const updateBookData = {
      id: bookId,
      rating: newRating,
    };
    dispatch(updateBook(updateBookData));
  };

  return (
    <RateBookBox>
      <Typography variant="body2">Rate Book:</Typography>
      <div>
        {starsArr.map((star, i) => {
          const isStarActive = rating >= i + 1;
          const StarIcon = isStarActive
            ? StarRoundedIcon
            : StarBorderRoundedIcon;

          return (
            <RateBookIconBtn key={i} onClick={() => handleSetBookRating(i + 1)}>
              <StarIcon color="secondary" />
            </RateBookIconBtn>
          );
        })}
      </div>
    </RateBookBox>
  );
};

export default RateBook;
