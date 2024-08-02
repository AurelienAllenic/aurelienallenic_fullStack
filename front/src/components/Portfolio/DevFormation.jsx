import { openclassrooms1 } from "../Data";
import CardSection from './CardSection';
import "./portfolio.scss";
import { useLanguage } from '../Context/LanguageContext.jsx';
import { IoIosArrowUp } from "react-icons/io";
import { useState } from 'react';

const DevFormation = () => {
  const { language } = useLanguage();
  const [isopen, setIsOpen] = useState(false);

  const IMG = openclassrooms1[0].image;

  return (
    <>
      <a className='anchor' id='formation-web'></a>
      <section className="container_portfolio" id="formation-web">
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
              <h1 className="main-title-portfolio">{language === 'FR' ? 'Formation Dev Web' : 'Web Dev formation'}</h1>
            </div>
          </div>
        </div>
        {
          isopen &&
          <article className="container-projects">
            <CardSection datas={openclassrooms1} />
          </article>
        }
      </section>
    </>
  );
}

export default DevFormation;
