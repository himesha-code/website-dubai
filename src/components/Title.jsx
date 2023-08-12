import React from "react";

const Title = ({
  title,
  subTitle,
  titleColor = "#333",
  subTitleColor = "#999",
}) => {
  return (
    <div className="title">
      <p
        style={{ color: subTitleColor }}
        className="mb-0 font-regular ml-30 fs-16"
      >
        {subTitle}
      </p>
      <h2 className="fs-30 font-medium ml-30" style={{ color: titleColor }}>
        {title}
      </h2>
    </div>
  );
};

export default Title;
