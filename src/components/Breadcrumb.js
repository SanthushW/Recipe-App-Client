import React from "react";
import "../styles/Breadcrumb.css";

const Breadcrumb = () => {
  return (
    <div className="breadcrumb">
      <a href="/">Home</a> &gt; <span>Search</span>
    </div>
  );
};

export default Breadcrumb;