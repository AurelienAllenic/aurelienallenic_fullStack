/* eslint-disable */
import React from 'react';
import { ImHtmlFive } from "react-icons/im";
import { IoLogoCss3 } from "react-icons/io5";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiPython } from "react-icons/si";
import { SiDjango } from "react-icons/si";
import { FaSass } from "react-icons/fa";

const Logos = () => {
  return (
    <div className='logos'>
      <div className='container_logos_left'>
        <figure>
          <ImHtmlFive fill='#E44D26' />
          <figcaption>HTML</figcaption>
        </figure>
        <figure>
          <IoLogoCss3 fill='#264DE4' />
          <figcaption>CSS</figcaption>
        </figure>
        <figure>
          <FaSass fill='#d49cb4' />
          <figcaption>Sass</figcaption>
        </figure>
        <figure>
          <SiJavascript fill='#F7DF1E' />
          <figcaption>JavaScript</figcaption>
        </figure>
        <figure>
          <FaReact fill='#61DAFB' />
          <figcaption>React</figcaption>
        </figure>
      </div>
      <div className='container_logos_right'>
        <figure>
          <FaNodeJs fill='#3C873A' />
          <figcaption>Node.js</figcaption>
        </figure>
        <figure>
          <SiPython fill='#3776AB' />
          <figcaption>Python</figcaption>
        </figure>
        <figure>
          <SiDjango fill='#249f70' />
          <figcaption>Django</figcaption>
        </figure>
      </div>
    </div>
  );
}

export default Logos;
