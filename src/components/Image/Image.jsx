import React from "react";

//Component uses loading attribute for images for the good lazy loading!

const Image = ({
  height = "180rem",
  width = "170rem",
  src,
  alt = "Unable to find picture",
  loading,
}) => {
  return (
    <img height={height} width={width} src={src} alt={alt} loading={loading} />
  );
};

export default Image;
