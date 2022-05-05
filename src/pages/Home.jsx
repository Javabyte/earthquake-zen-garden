import React, { Suspense, lazy, useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import handleTimeConversion from "../utils/handleConvertTime";
import earthquakeData from "../data/earthquakesData.json";

const EarthquakeTable = lazy(() => import("../components/Table/Table.jsx"));

//Improvement could be to use PropTypes to make sure that all components are strict with prop type.

const Home = () => {
  const data = earthquakeData.data.features.map(({ properties, ...obj }) => ({
    id: obj.id,
    place: properties.place,
    mag: properties.mag,
    time: handleTimeConversion(properties.time),
    type: properties.type,
    status: properties.status,
    tsunami: properties.tsunami,
    title: properties.title,
  }));

  const parsedTableColumns = [
    {
      headerName: "Title",
      dataKey: "place",
      isLink: true,
      linkText: "earthquakes",
    },
    { headerName: "Magnitude", dataKey: "mag" },
    { headerName: "Time", dataKey: "time" },
  ];

  /* 
    There would be an update to these states, but since the data is static and not an API call, it's just to mimic the memoization.
    This is built with the assumption the data is static and there could be buttons that re-render this page.  
  */

  const [fetchedData] = useState(data);
  const [tableColumns] = useState(parsedTableColumns);

  let memoizedData = useMemo(() => {
    return fetchedData;
  }, [fetchedData]);

  let memoizedTableColumns = useMemo(() => {
    return tableColumns;
  }, [tableColumns]);

  return (
    <>
      <Helmet
        meta={[
          {
            name: `Home Page`,
            content: "Home page lists most recent earthquakes",
          },
        ]}
      >
        <title>Earthquake Zen Garden | Home</title>
      </Helmet>
      <Suspense fallback={<div>Loading...</div>}>
        <h3 style={{ textAlign: "center", margin: "1rem" }}>
          USGS All Earthquakes, Past Hour
        </h3>
        <EarthquakeTable
          data={memoizedData}
          tableColumns={memoizedTableColumns}
          minWidth="600px"
          trFontWeight="100"
          tdFontWeight="600"
          tdPadding="2px 1.2rem"
        />
      </Suspense>
    </>
  );
};

export default Home;
