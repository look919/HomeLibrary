import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "src/store";
import { PageContainer, PageHeading, Flex } from "src/styles/layout";
import { DetailsBookComponent } from "src/styles/detailsBookView";

const DetailsBookView = () => {
  const location = useLocation();
  const bookId = location.pathname.split("/")[2];
  const dispatch = useDispatch();

  useEffect(() => {
    console.log();
  });

  return (
    <>
      <PageContainer>
        <PageHeading>Details Book View</PageHeading>
        <DetailsBookComponent>Test</DetailsBookComponent>
      </PageContainer>
    </>
  );
};

export default DetailsBookView;
