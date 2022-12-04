import React from "react";
import Ball from "../../assets/loadingGif/Ball.gif";

const Loading = () => {
  return (
    <div className="flex justify-center">
      <img src={Ball} alt="" />
    </div>
  );
};

export default Loading;
