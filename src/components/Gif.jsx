import React from "react";
import './Gif.css'

const Gif = ({ title, id, url }) => {
  return (
    <a href={`#${id}`} className="Gif">
      <h3>{title}</h3>
      <img className="Gif_img" src={url} />
    </a>
  );
};

export default Gif;
