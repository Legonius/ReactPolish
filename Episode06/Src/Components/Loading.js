import React from "react";
import Card from "./Card";
import SkeletonCard from "./SkeletonCard";

const Loading = ({ count }) => {
  const renderComponents = Array.from({ length: count }, (_, index) => (
    <SkeletonCard key={index} />
  ));
  return <>{renderComponents}</>;
};

export default Loading;
