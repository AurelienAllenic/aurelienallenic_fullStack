/* eslint-disable */
import React, { Suspense, useState, useRef, useEffect } from 'react';
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, OrbitControls, Stage } from "@react-three/drei";
import { Atom } from './Atom';
import { FaArrowRight } from "react-icons/fa";

const FrontEnd = ({ setCodingLanguage }) => {
  const [isInView, setIsInView] = useState(false);
  const canvasRef = useRef();

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '100px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, options);

    if (canvasRef.current) {
      observer.observe(canvasRef.current);
    }

    return () => {
      if (canvasRef.current) {
        observer.unobserve(canvasRef.current);
      }
    };
  }, []);

  return (
    <>
      <div className='card_front' >
        <div className='container_title_button'>
          <h1 className='main_title_card underline'>Front End</h1>
          <button className='btn_card' onClick={() => setCodingLanguage('Back End')}>Back End<FaArrowRight /></button>
        </div>
        <div className='container_list_dev'>
          <ul className='list_card'>
            <li>HTML</li>
            <li>CSS/SCSS</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        </div>
      </div>
      <div className='position-animation-front' ref={canvasRef}>
        {isInView && (
          <Canvas>
          <Suspense fallback={null}>
            <Stage environment="city" intensity={0.6} scale={1.5}>
              <Atom />
            </Stage>
            <OrbitControls enableZoom={false} autoRotate />
          </Suspense>
        </Canvas>
        )}
      </div>
    </>
  );
}

export default FrontEnd;
