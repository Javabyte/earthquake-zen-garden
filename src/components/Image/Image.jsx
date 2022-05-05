import React from "react";

/*
  Component uses loading attribute for images for the good lazy loading! This could be improved by caching images as well
  Another possibility is to render the image in low resolution with the magic of CSS and clarify the picture when loaded.
*/
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
