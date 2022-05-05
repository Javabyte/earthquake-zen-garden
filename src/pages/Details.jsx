import React from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import DetailsTable from "../components/DetailsTable/DetailsTable.jsx";
import FlexWrapper from "../components/Wrapper/FlexWrapper.jsx";

const Details = () => {
  const location = useLocation();

  if (!location.state)
    return (
      <h1 style={{ textAlign: "center" }}>
        Looks like there's no info for this earthquake
      </h1>
    );

  let tableColumns = [
    { headerName: "Title", dataKey: "title" },
    { headerName: "Magnitude", dataKey: "mag" },
    { headerName: "Time", dataKey: "time" },
    { headerName: "Status", dataKey: "status" },
    { headerName: "Tsunami", dataKey: "tsunami" },
    { headerName: "Type", dataKey: "type" },
  ];

  let data = [{ ...location.state }];
  const [{ title }] = data;

  return (
    <>
      <Helmet
        meta={[
          {
            name: `Details Page`,
            content:
              "This content describes details about specific earthquakes that have taken palce",
          },
        ]}
      >
        <title>Earthquake Zen Garden | Earthquake Details</title>
      </Helmet>
      <FlexWrapper
        display="flex"
        justifyContent="start"
        maxWidth="400px"
        flexFlow="column"
        margin="auto"
      >
        <h3 style={{ margin: "1rem 0rem" }}>{title}</h3>
        <DetailsTable
          tableColumns={tableColumns}
          data={data}
          wordWrap
          margin="0"
          padding="0px 1.1rem 0px 0px"
        />
      </FlexWrapper>
    </>
  );
};

export default Details;
