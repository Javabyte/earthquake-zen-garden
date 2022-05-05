import React, { useState, useMemo } from "react";
import Image from "../components/Image/Image.jsx";
import profileData from "../data/profileData.json";
import DetailsTable from "../components/DetailsTable/DetailsTable.jsx";
import { Helmet } from "react-helmet-async";
import FlexWrapper from "../components/Wrapper/FlexWrapper.jsx";

const Profile = () => {
  const tableColumnsData = [
    { headerName: "First name", dataKey: "firstName" },
    { headerName: "Last name", dataKey: "lastName" },
    { headerName: "Phone", dataKey: "phone" },
    { headerName: "Email", dataKey: "email" },
    { headerName: "Bio", dataKey: "bio" },
  ];

  const data = [profileData.profile];
  const { avatarImage: imageUrl } = data[0];
  const [profileStats] = useState(data);
  const [tableColumns] = useState(tableColumnsData);

  let memoizedData = useMemo(() => {
    return profileStats;
  }, [profileStats]);

  let memoizedTableColumns = useMemo(() => {
    return tableColumns;
  }, [tableColumns]);

  return (
    <>
      <Helmet
        meta={[
          {
            name: `Profile Page`,
            content: "Info about Sally",
          },
        ]}
      >
        <title>Earthquake Zen Garden | Profile</title>
      </Helmet>
      <h3 style={{ textAlign: "center", margin: "1rem" }}>Profile</h3>
      <FlexWrapper display="flex" justifyContent="center">
        <Image height="200px" width="200px" src={imageUrl} />
        <DetailsTable
          tableColumns={memoizedTableColumns}
          data={memoizedData}
          margin="0rem 1rem "
          padding="0 1.6rem 15px 0"
          maxWidth="14rem"
        />
      </FlexWrapper>
    </>
  );
};

export default Profile;
