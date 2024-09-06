import React from "react";
import TextAcceuil from "./text-acceuil";
import ImageAcceuil from "./image-acceuil";

export default function Acceuil() {
  return (
    <div className="acceuil">
      <div className="text-acceuil">
        <TextAcceuil />
      </div>
      <div className="image-acceuil">
        <ImageAcceuil />
      </div>
      <div className="eclipse">
        <img src="/Ellipse.png" alt="photo" />
      </div>
    </div>
  );
}
