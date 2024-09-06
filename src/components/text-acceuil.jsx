import React, { useEffect, useRef } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function TextAcceuil() {
  return (
    <div className="text-accueil max-lg:ml-20">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
        BONJOUR, ICI ON PARTAGE{" "}
        <span className="text-green-500">
          SEULEMENT LES ALIMENTS DELICIEUSES
        </span>
      </h1>
      <p className="text-base md:text-lg mb-6">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
        voluptates in, fuga provident debitis quas aperiam eveniet id dolor quos
        similique necessitatibus u mollitia. Assu
      </p>
      <button className="cssbuttons-io-button mb-8">
        Get started
        <div className="icon">
          <svg
            height="24"
            width="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </button>
      <div className="select flex items-center gap-3 flex-wrap">
        <div>
          <img
            src="/1.png"
            alt="photo"
            id="imag1"
            className="w-16 h-16 object-cover rounded-full"
          />
        </div>
        <div className="image1">
          <img
            src="/Sans titre-2.png"
            alt="photo"
            id="imag2"
            className="w-16 h-16 object-cover rounded-full"
          />
        </div>
        <div>
          <img
            src="/4.png"
            alt=""
            id="imag3"
            className="w-16 h-16 object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
