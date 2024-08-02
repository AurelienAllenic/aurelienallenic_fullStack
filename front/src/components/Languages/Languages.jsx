/* eslint-disable */
import { useState } from 'react';
import "./languages.scss";
import FrontEnd from './FrontEnd';
import BackEnd from './BackEnd';
import { useLanguage } from '../Context/LanguageContext.jsx';
import Navbar from '../nav/Nav.jsx';

const Languages = () => {
  const { language } = useLanguage();
  const [codingLanguage, setCodingLanguage] = useState('Front End');

  return (
    <>
      <Navbar />
      <a className='anchor' id='languages'></a>
      <section className='section-languages'>
          <h1 className='main-title-languages' data-aos="fade-top" data-aos-duration="1000">{language === 'FR' ? 'Langages de Programmation' : 'Programming Languages'}</h1>
          <div className='container-two-languages' >
            <div className='container_langages_cards'>
              {codingLanguage === 'Front End' ? <FrontEnd setCodingLanguage={setCodingLanguage}/> : <BackEnd setCodingLanguage={setCodingLanguage}/>}
            </div>
          </div>
      </section>
    </>
  )
}

export default Languages;
