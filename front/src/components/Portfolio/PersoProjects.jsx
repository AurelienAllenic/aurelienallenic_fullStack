/* eslint-disable */
import React, { useState } from 'react';
import CardSection from './CardSection';
import { projects } from "../Data";
import "./portfolio.scss";
import { useLanguage } from '../Context/LanguageContext.jsx';
import { IoIosArrowUp } from "react-icons/io";

const PersoProjects = () => {
  const { language } = useLanguage();
  const [isopen, setIsOpen] = useState(false);

  const IMG = projects[0].image; // Supposition que la première image des projets est utilisée

  return (
    <>
      <a className='anchor' id='projets-personnels'></a>
      <section className="container_portfolio" id='projets-personnels'>
        <div className='container_title_img' style={{ position: 'relative' }}>
          <div 
            style={{ 
              backgroundImage: `url(${IMG})`, 
              filter: 'blur(3px)', // Applique un flou de 5 pixels
              backgroundSize: 'cover', // Assure que l'image couvre tout le conteneur
              backgroundPosition: 'center', // Centre l'image
              position: 'absolute', // Positionne l'image en arrière-plan
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 0 // Met l'image derrière le contenu
            }} 
          />
          <div 
            style={{ 
              position: 'absolute', 
              top: 0, 
              left: 0, 
              right: 0, 
              bottom: 0, 
              backgroundColor: 'rgba(0, 0, 0, 0.5)', // Superposition sombre avec opacité de 50%
              zIndex: 1 
            }} 
          />
          <div style={{ position: 'relative', zIndex: 2 }}> {/* Contenu au-dessus de l'image et de la superposition */}
            <div onClick={() => setIsOpen(!isopen)} className="container_arrow_title">
              <h1 className="main-title-portfolio">{language === 'FR' ? 'Projets Personnels' : 'Personal Projects'}</h1>
            </div>
          </div>
        </div>
        {
          isopen &&
          <article className="container-projects">
            <CardSection datas={projects} />
          </article>
        }
      </section>
    </>
  );
}

export default PersoProjects;
