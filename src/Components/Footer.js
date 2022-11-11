import React from "react";
import { useState } from "react";
import image from "./thecake.jpg";

export default function Footer() {
  const [see, setsee] = useState(false);
  function togglePic() {
    setsee((e) => !e);
  }

  return (
    <div className="footer">
      <p className={`${see ? "invisible" : "visible"}`} onClick={togglePic}>
        © TautologyIndustries
      </p>
      <img
        src={image}
        alt="The cake is a lie"
        onClick={togglePic}
        className={`${see ? "visible" : "invisible"} img`}
      />
    </div>
  );
}
