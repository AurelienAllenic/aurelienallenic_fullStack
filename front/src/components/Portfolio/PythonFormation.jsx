import React, { useEffect, useState } from 'react';
import { openclassrooms3 } from "../Data";
import CardSection from './CardSection';
import "./portfolio.scss";
import { useLanguage } from '../Context/LanguageContext.jsx';
import { PiCursorClickLight } from "react-icons/pi";
import SearchProject from './SeachProject/SearchProject.jsx';

const PythonFormation = () => {
  const { language } = useLanguage();
  const [isopen, setIsOpen] = useState(false);

  const IMG = openclassrooms3[0].image;

  return (
    <>
      <a className='anchor' id='formation-python'></a>
      <section className="container_portfolio margin" id="formation-python">
        <h1 className='react first-title'>{language === 'FR' ? 'Projets' : 'Projects'}</h1>
        <SearchProject />
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
              zIndex: 0,
            }} 
          />
          <div 
            style={{ 
              position: 'absolute', 
              top: 0, 
              left: 0, 
              right: 0, 
              bottom: 0, 
              backgroundColor: 'rgba(0, 0, 0, 0.2)', // Superposition sombre avec opacité de 50%
              zIndex: 1 
            }} 
          />
          <div style={{ position: 'relative', zIndex: 2 }}> {/* Contenu au-dessus de l'image et de la superposition */}
            <div onClick={() => setIsOpen(!isopen)} className="container_arrow_title">
              <h1 className="main-title-portfolio">{language === 'FR' ? 'Formation Python' : 'Python formation'}</h1>
            </div>
          </div>
        </div>
        {
          isopen &&
          <article className="container-projects">
            <CardSection datas={openclassrooms3} />
          </article>
        }
      </section>
    </>
  );
}

export default PythonFormation;
