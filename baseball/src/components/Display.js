import React, { useState } from "react";

const Display = ({ balls, strikes }) => {
  return (
    <>
      <div className="display-container">
        <div className="balls-card">Balls: {balls}</div>
        <div className="strikes-card">Strikes: {strikes}</div>
      </div>
    </>
  );
};

export default Display;
