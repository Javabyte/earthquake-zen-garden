import React, { Suspense, lazy } from "react";
import { Helmet } from "react-helmet-async";
import handleTimeConversion from "../utils/handleConvertTime";
import earthquakeData from "../data/earthquakesData.json";

const EarthquakeTable = lazy(() => import("../components/Table/Table.jsx"));

//Improvement could be to abstract component styles from component data being passed as props.

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

  const tableColumns = [
    {
      headerName: "Title",
      dataKey: "place",
      isLink: true,
      linkText: "earthquakes",
    },
    { headerName: "Magnitude", dataKey: "mag" },
    { headerName: "Time", dataKey: "time" },
  ];
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
        <div>
          <EarthquakeTable
            data={data}
            tableColumns={tableColumns}
            minWidth="600px"
            trFontWeight="100"
            tdFontWeight="600"
            tdPadding="2px 1.2rem"
          />
        </div>
      </Suspense>
    </>
  );
};

export default Home;
